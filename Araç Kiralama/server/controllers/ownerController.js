import imagekit from "../configs/imageKit.js"
import User from "../models/User.js";
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
  })


  
 } catch (error) {
  console.log(error.message);
  res.json({success: false, message: error.message})
 }
}