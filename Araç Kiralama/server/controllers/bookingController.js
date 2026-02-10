import Booking from "../models/Booking.js"
import Car from "../models/Car.js"

const checkAvailability = async (car, pickupDate, returnDate) =>{

 const bookings = await Booking.find({
  car,
  pickupDate : {$lte: returnDate},
  returnDate : {$lte: pickupDate},
 })

 return bookings.length === 0;

}

export const checkAvailabilityOfCar = async (req,res) => {

 try {
  
  const {location, pickupDate, returnDate} = req.body

  const cars = await Car.find({location, isAvaliable: true})

  const availableCarsPromises = cars.map(async (car) => {
   const isAvaliable = await checkAvailability(car._id, pickupDate, returnDate)
   return {...car._doc, isAvaliable: isAvaliable}
  })

  let availableCars = await Promise.all(availableCarsPromises);
  availableCars = availableCars.filter( car => car.isAvaliable === true )

  res.json({success:true, availableCars})

 } catch (error) {
  console.log(error.message);
  res.json({success: false, message: error.message})
  
 }

}

export const createBooking = async (req,res) =>{

 try {
  
  const {_id} = req.user;
  const {car, pickupDate, returnDate} = req.body;

  const isAvaliable = await checkAvailability(car, pickupDate, returnDate)
  if (!isAvaliable) {
   return res.json({success: false, message: "Araba mevcut değil"})
  }

  const carData = await Car.findById(car)

  const picked = new Date(pickupDate);
  const returned = new Date(returnDate);
  const noOfDays = Math.ceil((returned - picked) / (1000 * 60 * 60 * 24))
  const price = carData.pricePerDay * noOfDays;

  await Booking.create({car, owner: carData.owner, user: _id, pickupDate, returnDate, price})

  res.json({success: true, message: "Rezervasyon Oluşturuldu"})

 } catch (error) {
  console.log(error.message);
  res.json({success: false, message: error.message})
 }

}

export const getUserBookings = async (req,res) =>{
try {

 const {_id} = req.user;
 const bookings = await Booking.find({ user: _id }).populate("car").sort
 ({createAt: -1})
 res.json({success: true, bookings})

} catch (error) {
  console.log(error.message);
  res.json({success: false, message: error.message})
}
}


export const getOwnerBookings = async (req,res) =>{
try {

 if (req.user.role !== 'owner') {
  return res.json({success: false, message: "Yetkisiz"})
 }
 const bookings = await Booking.find({owner: req.user._id}).populate('car user').select("-user.password").sort({createAt: -1})
 res.json({success: true, bookings})

} catch (error) {
  console.log(error.message);
  res.json({success: false, message: error.message})
}
}


export const changeBookingStatus = async (req,res) =>{
try {

const {_id} = req.user;
const {bookingId, status} = req.body

const booking = await Booking.findById(bookingId)

if (booking.owner.toString() !== _id.toString()) {
 return res.json({success: false, message: "Yetkisiz"})
}

booking.status = status;
await booking.save();

res.json({success: true, message: error.message})

} catch (error) {
  console.log(error.message);
  res.json({success: false, message: error.message})
}
}