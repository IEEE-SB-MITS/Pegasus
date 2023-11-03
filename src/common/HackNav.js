import React, { useState } from 'react';
import { clglogo } from '../assets';
import styles from '../constants/style';
import { Link } from 'react-scroll'; // Import Link and Element

const HackNav = () => {
  let Links = [
    { name: 'HOME', link: 'section1' },
    { name: 'TIMELINE', link: 'section3' },
    { name: 'ABOUT', link: 'section2' },
    { name: 'GALLERY', link: 'section4' },
    { name: 'CONTACT', link: 'section5' },
  ];

  let [open, setOpen] = useState(false);
  
  return (
    <div className='shadow-md w-full fixed top-0 left-0 z-50'>
      <div className={`md:flex items-center justify-between ${styles.hackColor} py-4 md:px-10 px-7`}>
        <div className='font-bold text-2xl pt-2 cursor-pointer flex items-center font-[Poppins] text-white'>
          <span className='text-3xl text-white mr-1'>
            <img src={clglogo} alt='' className='h-[40px] w-[80px]' />
          </span>
          SB MITS
        </div>

        <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-4 cursor-pointer md:hidden'>
          <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
        </div>

        <ul className={`md:flex md:items-center md:pb-0 absolute md:static rounded-b-2xl font-bold text-center md:bg-transparent bg-[#1f0120da] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
          {Links.map((link) => (
            <li key={link.name} className='md:ml-8 text-xl md:m-0 my-7'>
              <Link
                to={link.link} // Use the link property as the target section ID
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HackNav;
