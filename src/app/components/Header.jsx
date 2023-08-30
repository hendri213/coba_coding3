"use client"

import {useState} from 'react'
import { BiMenu } from 'react-icons/bi';
import { RxCross1 } from 'react-icons/rx';


const Header = () => {
   
  const [open, setOpen] = useState()

  let links = [
                {name:"HOME", link:"#home"},
                {name:"ABOUT", link:"#about"},
                {name:"PROJECTS", link:"#projects"},
              ]

  return (
    <div className={`fixed left-0 top-0 md:w-full w-[700px] ${open ? 'h-[200px]' : 'h-[75px]'} bg-black`}>
      <div className='md:flex items-center justify-between py-4 md:px-10 px-7'>
        <div className='md:flex'>
          <a href="#home" className="text-3xl font-semibold transition duration-500 hover:text-slate-500">Hendri Setiawan</a>
          <div className={`transition duration-500 ${open ? 'top-20 opacity-100 border-b border-gray-300 mt-[15px]' : 'top-[-490px]'} opacity-0`}></div>
        </div>
        <div onClick={() => setOpen(!open)} className='md:hidden text-3xl absolute top-5 right-5 transition duration-500 cursor-pointer hover:text-slate-500'>
          {
            open ? <RxCross1 />
                 : <BiMenu />
          }
        </div>
        <ul className='md:flex items-center'>
          {
            links.map((link) => (
              <li className={`hover:text-slate-500 md:ml-8 md:my-0 my-4 transition duration-500 ${open ? 'top-20 opacity-100' : 'top-[-490px]'} md:opacity-100 opacity-0`} key={link.name}><a href={link.link}>{link.name}</a></li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Header