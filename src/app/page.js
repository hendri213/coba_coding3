import Image from 'next/image'
import './globals.css'

const Home = () => {
  return (
    <div className="md:px-10 px-7 py-4 mt-[50px]">
      <div className="flex items-center justify-between">
        <div className="flex flex-col mb-[160px] content">
          <p className="text-5xl">Halo,</p>
          <h2 className='text-5xl mt-3'>Nama Saya <span className="font-semibold">Hendri Setiawan</span></h2>
          <p className="text-3xl mt-3  animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform  text">Saya adalah seorang Frontend Developer</p>
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
    </div>
  )
}

export default Home