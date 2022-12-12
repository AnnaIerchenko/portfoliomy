import React, { useState } from 'react'
import {FaBars, FaTimes, FaGithub, FaFacebook} from "react-icons/fa"
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

import {Link} from "react-scroll"

const Navbar = () => {

  const  [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between 
    items-center px-4 bg-[#112b52] text-gray-300'>
      <div>
        {/*<img src={Logo} alt="logo" style={{width: "50px"}}/>*/}
      </div>

      {/*menu */}
      
        <ul className='hidden md:flex'>
          <li className='hover:text-[#61dafb]'>
            <Link to='home' smooth={true} duration={500}>
            Home
            </Link>
          </li>
          <li className='hover:text-[#61dafb]'>
          <Link to='about' spy={true} smooth={true} duration={500}>
            About
          </Link>
          </li>
          <li className='hover:text-[#61dafb]'>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>  
          </li>
          <li className='hover:text-[#61dafb]'>
          <Link to='work' smooth={true} duration={500}>
            Work
          </Link>
          </li>
          <li className='hover:text-[#61dafb]'>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
          </li>
        </ul>
      

      {/**humburger */}
      <div 
        className='md:hidden z-10'
        onClick={handleClick}
        >
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/**mobileMenu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#112b52] flex flex-col justify-center items-center'} >
        <li className='py-6 text-4xl hover:text-[#61dafb]'>
        <Link onClick={handleClick} to='home' smooth={true} duration={500}>
          Home
        </Link>  
        </li>
        <li className='py-6 text-4xl hover:text-[#61dafb]'>
        <Link onClick={handleClick} to='about' smooth={true} duration={500}>
          About
        </Link>
        </li>
        <li className='py-6 text-4xl hover:text-[#61dafb]'>
        <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
          Skills
        </Link>  
        </li>
        <li className='py-6 text-4xl hover:text-[#61dafb]'>
        <Link onClick={handleClick} to='work' smooth={true} duration={500}>
          Work
        </Link>  
        </li>
        <li className='py-6 text-4xl hover:text-[#61dafb]'>
        <Link  onClick={handleClick} to='contact' smooth={true} duration={500}>
          Contact
        </Link>
        </li>
      </ul>

      {/**social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          {/*<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
            <a 
              className='flex justify-between items-center w-full text-gray-300'
              href='https://facebook.com'>
              Facebook <FaFacebook size={30}/>
            </a>
            </li>*/}
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a 
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/AnnaIerchenko'>
              Github <FaGithub size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#61dafb]'>
             <Link to='contact' smooth={true} duration={500}
              className='flex justify-between items-center w-full text-gray-300'
              >
              Email <HiOutlineMail size={30} />
              </Link> 
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a 
              className='flex justify-between items-center w-full text-gray-300'
              href='https://docs.google.com/document/d/1B1imvNqcWWwtu-VeZro4wXK55Bv0U57aaDZ3u388f9Y/edit?usp=sharing'>
              Resume <BsFillPersonLinesFill size={30}/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar