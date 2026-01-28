import React from 'react'
import Title from './Title'
import { assets } from '../assets/assets'

const Testimonial = () => {

  const testimonials = [
        { name: "Emma Rodriguez",
          location: "İstanbul", 
          image: assets.testimonial_image_1, 
          testimonial: "Çeşitli şirketlerden araç kiraladım, ancak CarRental ile yaşadığım deneyim olağanüstüydü."
        },
        
        { name: "John Smith",
          location: "İzmir", 
          image: assets.testimonial_image_2, 
          testimonial: "CarRental seyahatimi çok daha kolay hale getirdi. Araba doğrudan kapıma teslim edildi ve müşteri hizmetleri harikaydı!"
        },
        
        { name: "Ava Johnson",
          location: "Ankara", 
          image: assets.testimonial_image_2, 
          testimonial: "CarRental'ı şiddetle tavsiye ederim! Araç filoları muhteşem ve her zaman mükemmel hizmetle en iyi fırsatı yakaladığımı hissediyorum."
        },
        
    ];

  return (
     <div className="py-28 px-6 md:px-16 lg:px-24 xl:px-44">
         
         <Title title="Müşterilerimiz Ne Diyor?" subTitle="Seçkin gezginlerin dünyanın dört bir yanındaki lüks konaklamaları için neden StayVenture'ı tercih ettiğini keşfedin."/>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-18">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:-translate-y-1 transition-all duration-500">

                        <div className="flex items-center gap-3">
                            <img className="w-12 h-12 rounded-full" src={testimonial.image} alt={testimonial.name} />
                            <div>
                                <p className="text-xl">{testimonial.name}</p>
                                <p className="text-gray-500">{testimonial.location}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 mt-4">
                            {Array(5).fill(0).map((_, index) => (
                             <img key={index} src={assets.star_icon} alt="" />
                                
                            ))}
                        </div>
                        <p className="text-gray-500 max-w-90 mt-4 font-light">"{testimonial.testimonial}"</p>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default Testimonial
