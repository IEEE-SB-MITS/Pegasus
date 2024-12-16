import React, { act, useEffect, useState } from "react";
import { clglogo } from "../assets";
import styles from "./nav.css";
import { Link } from "react-scroll"; 
import DateExtended from "./extension";

const Links = [
  { name: "Home", link: "section1" },
  { name: "About", link: "section2" },
  { name: "Timeline", link: "section3" },
  // { name: "Partners ", link: "section4" },
  { name: "Contact", link: "section5" },
];

const HackNav = () => {
  const [isActive, setIsActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className="w-full fixed top-0 left-0 z-50 font-ProductSans">
      
      <div
        className={`md:flex items-center justify-between ${scrolled ? 'bg-[#020202] text-white' : 'bg-transparent'} py-4 md:px-10 px-7 transition-all ease-in-out duration-300`}
      >
        <div className="font-bold text-2xl pt-2 cursor-pointer flex items-center font-[Poppins] text-white">
          <span className="text-3xl text-white mr-1">
            <Link to="section1" spy={true} smooth={true} offset={-70} duration={500}>
              <img src={clglogo} alt="" className="h-[40px] w-[90px]" />
            </Link>
          </span>
          
        </div>

        {/* <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div> */}

        <div className="md:hidden text-3xl absolute right-8 top-0 cursor-pointer" >
                <div onClick={() => {setIsActive(!isActive)}} className="button">
                <div className={`burger ${isActive ? "burgerActive" : ""}`}></div>
                </div> 
        </div>

        {/* <ul
          className={`md:flex text-[#E2DCD0] md:gap-14 bg-[#020202] md:items-center md:pb-0 absolute md:static rounded-b-2xl font-medium text-center  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 md:pr-10 transition-all duration-500 ease-in ${
            isActive ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:m-0 my-7">
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
        </ul> */}

        <ul
          className={`hidden md:flex text-[#E2DCD0] gap-14  items-center pb-0 static rounded-b-2xl font-medium text-center  z-auto  left-0 w-auto pl-0 pr-10 transition-all duration-500 ease-in`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:m-0 my-7 hover:scale-x-110 cursor-pointer transition-all ease-in-out duration-300">
              <Link
                to={link.link}
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



        <Nav active={isActive} setIsActive={setIsActive}/>


        
      </div>
      {/* <DateExtended/> */}
    </div>
  );
};

export default HackNav;

const Nav = ({active, setIsActive}) => {
  return (
    <div
    className={`bg-[#020202] absolute overflow-hidden right-0 w-full flex justify-center transition-all ease-in-out duration-300 top-[70px] ${!active? 'h-0': 'h-screen-minus-80'}`}>
        <nav className=" list-none flex flex-col justify-evenly text-center text-white items-center text-[40px] font-[300px] h-full w-full mx-10">
        {Links.map((link) => (
            <li key={link.name} className="text-4xl w-full px-10">
              <Link
                to={link.link} // Use the link property as the target section ID
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() =>{setIsActive(false)}}
                className="block border-b-[1px] py-6 w-full border-white/40 cursor-pointer"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </nav>
    </div>
  )
}