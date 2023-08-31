import React from 'react'
import Image from 'next/image'


const Projects = () => {
  return (
    <div className="md:ml-[-35px] ml-[-20px] mt-[50px]">
      <h2 className="text-3xl font-semibold">Projects</h2>  
      <div>
        <div>
         <Image
          src="/profile.png"
          width={700}
          height={700}
          alt="profile"
         />
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Projects