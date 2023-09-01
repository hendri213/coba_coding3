import React from 'react'
import Image from 'next/image'


const Projects = () => {
  return (
    <div className=" md:ml-[-35px] ml-[-20px] mt-[50px]">
      <h2 className="text-3xl font-semibold flex text-center ml-[670px]">Projects</h2>  
      <div className="flex flex-row">
        <div>
         <Image
          src="/profile.png"
          width={700}
          height={700}
          alt="profile"
         />
         <h2 className="ml-[150px] text-3xl font-semibold">Ecommerce</h2>
         <p className='text-xl ml-[20px] mt-[20px]'>dibuat dengan Nuxt JS dan Tailwind CSS dan sudah terkoneksi dengan Rest Api. Rest API Mongo DB</p>
        </div>
        <div>
         <Image
          src="/profile.png"
          width={700}
          height={700}
          alt="profile"
         />
         <h2 className="ml-[150px] text-3xl font-semibold">Login System</h2>
         <p className='text-xl ml-[20px] mt-[20px]'>dibuat dengan Next JS dan Tailwind CSS dan sudah terkoneksi dengan Rest Api. Rest API MYSQL</p>
        </div>
        <div>
         <Image
          src="/profile.png"
          width={700}
          height={700}
          alt="profile"
         />
         <h2 className="ml-[150px] text-3xl font-semibold">Search Engine</h2>
         <p className='text-xl ml-[20px] mt-[20px]'>dibuat dengan Nuxt JS dan Tailwind CSS yang terhubung dengan library search engine</p>
        </div>
      </div>
    </div>
  )
}

export default Projects