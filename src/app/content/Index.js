import Image from 'next/image'

const Index = () => {
  return (
    <div className="flex items-center justify-between">
        <div className="flex flex-col mb-[160px]">
          <p className="md:text-5xl text-xl">Halo,</p>
          <h2 className='md:text-5xl text-xl mt-3'>Nama Saya <span className="font-semibold">Hendri Setiawan</span></h2>
          <p className="md:text-3xl text-xl mt-3">Saya adalah seorang Frontend Developer</p>
        </div>
        
        <div className="flex">
        <Image
         src="/profile.png"
         width={700}
         height={700}
         alt="profile"
       />
        </div>
      </div>
  )
}

export default Index