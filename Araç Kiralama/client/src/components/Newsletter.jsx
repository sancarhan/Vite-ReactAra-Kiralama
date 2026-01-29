import React from 'react'

const Newsletter = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-2 max-md:px-4 my-10 mb-40">
            <h1 className="md:text-4xl text-2xl font-semibold">Hiçbir fırsatı kaçırmayın!</h1>
            <p className="md:text-lg text-gray-500/70 pb-8">
               En yeni tekliflerden, yeni ürünlerden ve özel indirimlerden haberdar olmak için abone olun.
            </p>
            <form className="flex items-center justify-between max-w-2xl w-full md:h-13 h-12">
                <input
                    className="border border-gray-300 rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-3 text-gray-500"
                    type="text"
                    placeholder="Email Giriniz"
                    required
                />
                <button type="submit" className="md:px-20 px-15 h-full text-white bg-blue-500 hover:bg-blue-600 transition-all cursor-pointer rounded-md rounded-l-none">
                    Abone Ol
                </button>
            </form>
        </div>
  )
}

export default Newsletter
