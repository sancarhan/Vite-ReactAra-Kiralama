import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {assets, dummyCarData} from '../assets/assets'
import Loader from '../components/Loader'

const CarDetails = () => {

  const {id} = useParams()
  const navigate = useNavigate()
  const [car, setCar] = useState(null)
  const currency = import.meta.env.VITE_CURRENCY

  const handleSubmit = async (e) => {
    e.preventDefault();
  }

  useEffect(()=>{
    setCar(dummyCarData.find(car => car._id === id))
  },[id])

  return car ? (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 mt-16'>

      <button onClick={()=> navigate(-1)} className='flex items-center gap-2 mb-6 text-gray-500 cursor-pointer'><img src={assets.arrow_icon} alt="arrow" className='rotate-180 opacity-65'/>Tüm arabalara dön</button>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12'>  
        {/* Sol panel: Araba görseli ve Detay */}
        <div className='lg:col-span-2'>
          <img src={car.image} className='w-full h-auto md:max-h-100 object-cover rounded-xl mb-6 shadow-md' alt="#" />
          <div className='space-y-6'>
            <div>
              <h1 className='text-3xl font-bold'>{car.brand} {car.model}</h1>
              <p className='text-gray-500 text-lg'>{car.category} • {car.year}</p>
            </div>
            <hr className='border-borderColor my-6'/>

            <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
              {[
                {icon: assets.users_icon, text:  `${car.seating_capacity} Kişilik`},
                {icon: assets.fuel_icon, text: car.fuel_type},
                {icon: assets.car_icon, text: car.transmission},
                {icon: assets.location_icon, text: car.location},
              ].map(({icon, text})=>(
                <div key={text} className='flex flex-col items-center bg-light p-4 rounded-lg'>
                  <img src={icon} alt="" className='h-5 mb-2'/>
                  {text}
                </div>
              ))}
            </div>

            {/* Açıklama */}
            <div>
              <h1 className='text-xl font-medium mb-3'>Açıklama</h1>
              <p className='text-gray-500'>{car.description}</p>
            </div>

            {/* Özellik */}
            <div>
               <h1 className='text-xl font-medium mb-3'>Özellikleri</h1>
               <ul className='grid grid-cols-1 sm:grid-cols-2 gap-2 '>
                {
                  ["360 Kamera","Bluetooth", "GPS", "Isıtmalı Koltuk", "ABS", "Hız Sabitleme Sistemi", "Yokuş Kalkış Desteği", "Kör Nokta Uyarı Sistemi", "Çocuk Kilidi", "Şeritten Ayrılma İkazı", "Şerit Takip Sistemi", "Merkezi Kilit", "Hava Yastığı (Yolcu)" ].map((item)=>(
                    <li key={item} className='flex items-start text-gray-500'>
                      <img src={assets.check_icon} className='h-4 mr-2' alt="" />
                      {item}
                    </li>
                  ))
                }
               </ul>
            </div>

          </div>
        </div>

        {/* Sağ panel: Form */}
        <form onSubmit={handleSubmit} className='shadow-lg h-max sticky top-18 rounded-xl p-6 space-y-6 text-gray-500'>

          <p className='flex items-center justify-between text-2xl text-gray-800 font-semibold'><span className='text-base text-gray-400 font-normal'>Günlük Fiyatlandırma</span> {car.pricePerDay}{currency}</p> 

          <hr className='border-borderColor my-6'/>

          <div className='flex flex-col gap-2'>
            <label htmlFor="pickup-date">Teslim Alma Tarihi</label>
            <input type="date"  className='border border-borderColor px-3 py-2 rounded-lg' required id='pickup-date' min={new Date().toISOString().split('T')[0]}/>
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor="return-date">Teslim Etme Tarihi</label>
            <input type="date"  className='border border-borderColor px-3 py-2 rounded-lg' required id='return-date' min={new Date().toISOString().split('T')[0]}/>
          </div>

          <button className='w-full bg-blue-500 hover:bg-blue-800 transition-all py-3 font-medium text-white rounded-xl cursor-pointer'>Şimdi rezervasyon yapın</button>

          <p className='text-center text-sm'>Rezervasyon için kredi kartı gerekmiyor.</p>

        </form>
      </div>

    </div>
  ) : <Loader/>
}

export default CarDetails
