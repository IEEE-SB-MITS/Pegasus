import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { clglogo, close, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  // Define transition settings
  const menuVariants = {
    hidden: {
      clipPath: "inset(10% 50% 90% 50% round 10px)",
    },
    visible: {
      clipPath: "inset(0% 0% 0% 0% round 10px)",
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.5,
      },
    },
  };

  const menuItemVariants = {
    hidden: {
      opacity: 0,
      scale: 0.3,
      filter: "blur(20px)",
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
    },
  };

  return (
    <nav className="w-full flex pt-6 justify-between items-center navbar">
      <img src={clglogo} alt="pegasus" className="w-[150px] md:w-1/5" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <AnimatePresence>
          {toggle && (
            <motion.div
              className="p-6 bg-black absolute top-20 right-0 mx-4 my-2 w-screen rounded-xl "
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={menuVariants}
            >
              <ul className="list-none flex justify-end items-start flex-1 flex-col">
                {navLinks.map((nav, index) => (
                  <motion.li
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${
                      active === nav.title ? "text-white" : "text-dimWhite"
                    } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                    variants={menuItemVariants}
                    onClick={() => setActive(nav.title)}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
