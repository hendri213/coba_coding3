"use client"

import {useState} from 'react'
import { BiMenu } from 'react-icons/bi';
import { RxCross1 } from 'react-icons/rx';


const Header = () => {

  const [open, setOpen] = useState()
 
  let links = [
    {name:"Home", link:"#home"},
    {name:"About", link:"#about"},
    {name:"Projects", link:"#projects"},
  ]

  return (
    <div className='fixed top-0 left-0 w-full'>
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
        <div>
          <a className='text-3xl font-semibold' href="#home">Hendri Setiawan</a>
          <div onClick={() => setOpen(!open)} className={`md:hidden border-b transition duration-500 ${open ? 'top-20 opacity-100  border-gray-300 py-3' : 'top-[-490px]'} opacity-0`}></div>
        </div>
        <div onClick={() => setOpen(!open)} className='md:hidden flex absolute text-3xl top-[23px] right-[25px] transition duration-500'>
          {
            open ? <RxCross1 />
                 : <BiMenu />
          }
        </div>
        <ul className='md:flex md:mt-0 mt-[20px] items-center'>
          {
            links.map((link) => (
              <li className={`md:ml-8 md:my-0 my-5  text-xl transition duration-500 ${open ? 'top-20 opacity-100' : 'top-[-490px]'} opacity-0 md:opacity-100`} key="link.name"><a href={link.link}>{link.name}</a></li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Header