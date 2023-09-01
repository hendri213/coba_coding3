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
        </div>
        <div>
         <Image
          src="/profile.png"
          width={700}
          height={700}
          alt="profile"
         />
        </div>
        <div>
         <Image
          src="/profile.png"
          width={700}
          height={700}
          alt="profile"
         />
        </div>
      </div>
    </div>
  )
}

export default Projects