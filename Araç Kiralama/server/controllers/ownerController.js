import imagekit from "../configs/imageKit.js"
import User from "../models/User.js";
import Car from "../models/Car.js"
import fs from "fs";

// Kullanıcının Rolünü Değiştirmek için API
export const changeRoleToOwner = async (req,res)=>{
 try {
  const {_id} = req.user;
  await User.findByIdAndUpdate(_id, {role: "owner"})
  res.json({success: true, message: "Artık arabaları listeleyebilirsiniz."})
 } catch (error) {
  console.log(error.message);
  res.json({success: false, message: error.message})
 }
}

// Arabayı Listelemek için API

export const addCar = async (req,res)=>{
 try {
  const {_id } = req.user;
  let car = JSON.parse(req.body.carData);
  const imageFile = req.file;

  const fileBuffer = fs.readFileSync(imageFile.path)
  const response = await imagekit.upload({
   file: fileBuffer,
   fileName: imageFile.originalname,
   folder: '/cars'
  })

  var optimizedImageUrl = imagekit.url({
   path: response.filePath,
   transformation: [
    {width: '1280'},
    {quality: 'auto'},
    {format: 'webp'}
   ]
  });

  const image = optimizedImageUrl;
  await Car.create({...car, owner: _id, image})

  res.json({success: true, message: "Araba Eklendi"})


  
 } catch (error) {
  console.log(error.message);
  res.json({success: false, message: error.message})
 }
}

export const getOwnerCars = async (req, res)=>{
 try {
  
  const {_id } = req.user;
  const cars = await Car.find({owner: _id})
  res.json({success: true, cars})
 

 } catch (error) {
  console.log(error.message);
  res.json({success: false, message: error.message})
 }
}

export const toggleCarAvailability = async (req,res)=>{
 try {
  
  const {_id } = req.user;
  const {carId} = req.body
  const car = await Car.findById(carId)

  if (car.owner.toString() !== _id.toString()) {
   return res.json({ success: false, message: "Yetkisiz" });
  }

  car.isAvaliable = !car.isAvaliable;
  await car.save()

  res.json({success: true, message: "Kullanılabilirlik etkinleştirildi"})
 

 } catch (error) {
  console.log(error.message);
  res.json({success: false, message: error.message})
 }
}

export const deleteCar = async (req,res)=>{
 try {
  
  const {_id } = req.user;
  const {carId} = req.body
  const car = await Car.findById(carId)

  if (car.owner.toString() !== _id.toString()) {
   return res.json({ success: false, message: "Yetkisiz" });
  }

  car.owner = null;
  car.isAvaliable = false;
  await car.save()

  res.json({success: true, message: "Araç Kaldırıldı"})
 

 } catch (error) {
  console.log(error.message);
  res.json({success: false, message: error.message})
 }
}

export const getDashboardData = async (req,res)=>{
 try {
  
  const {_id , role} = req.user;

  if (role !== 'owner') {
   return res.json({success: false, message: "Yetkisiz"})
  }

  const cars = await Car.find({owner: _id})
  

 } catch (error) {
  console.log(error.message);
  res.json({success: false, message: error.message})
 }
}
