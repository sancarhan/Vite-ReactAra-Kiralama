import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
  
   <div className='px-6 md:px-16 lg:px-24 xl:px-32 mt-60 text-sm text-gray-500'>

            <div className='flex flex-wrap justify-between items-start gap-8 pb-6 border-borderColor border-b'>
                <div >
                    <img src={assets.logo} alt="logo" className='h-8 md:h-9' />
                    <p className='max-w-80 mt-3'>
                        Tüm sürüş ihtiyaçlarınız için geniş bir yelpazede lüks ve günlük kullanım araçları sunan birinci sınıf araç kiralama hizmeti.
                    </p>
                    <div className='flex items-center gap-3 mt-6'>
                        <a href="#"> <img src={assets.facebook_logo} className='w-5 h-5' alt="" /> </a>
                        <a href="#"> <img src={assets.instagram_logo} className='w-5 h-5' alt="" /> </a>
                        <a href="#"> <img src={assets.twitter_logo} className='w-5 h-5' alt="" /> </a>
                        <a href="#"> <img src={assets.gmail_logo} className='w-5 h-5' alt="" /> </a>
                    </div>
                </div>

                <div>
                    <h2 className='text-base font-medium text-gray-800 uppercase'>Hızlı Bağlantılar</h2>
                    <ul className='mt-3 flex flex-col gap-1.5'>
                        <li><a href="#">Ana Sayfa</a></li>
                        <li><a href="#">Araçlara Göz Atın</a></li>
                        <li><a href="#">Aracınızı Listeleyin</a></li>
                        <li><a href="#">Hakkımızda</a></li>
                    </ul>
                </div>

                <div>
                    <h2 className='text-base font-medium text-gray-800 uppercase'>Kaynaklar</h2>
                    <ul className='mt-3 flex flex-col gap-1.5'>
                        <li><a href="#">Yardım Merkezi</a></li>
                        <li><a href="#">Hizmet Şartları</a></li>
                        <li><a href="#">Gizlilik Politikası</a></li>
                        <li><a href="#">Sigorta</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-base font-medium text-gray-800 uppercase'>İletişim</h2>
                    <ul className='mt-3 flex flex-col gap-1.5'>
                        <li><a href="#">1234 Luxury Drive</a></li>
                        <li><a href="#">San Francisco, CA 94107</a></li>
                        <li><a href="#">+1 234 567890</a></li>
                        <li><a href="#">info@example.com</a></li>
                    </ul>
                </div>            
            </div>
            <div className='flex flex-col md:flex-row gap-2 items-center justify-between py-5'>
                <p>© {new Date().getFullYear()} Hakları SancarhanYazılım Tarafından Saklıdır</p>
                <ul className='flex items-center gap-4'>
                    <li><a href="#">Gizlilik</a></li>
                    <li>|</li>
                    <li><a href="#">Şartlar</a></li>
                    <li>|</li>
                    <li><a href="#">Site </a></li>
                </ul>
            </div>
        </div>
  )
}

export default Footer
