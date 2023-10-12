import React, { useState } from "react";
import { motion } from "framer-motion";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

const Toggle = ({ onClick }) => (
  <button className="navbar-toggle" onClick={onClick}>
    Toggle
  </button>
);

const Items = () => (
  <ul className="navbar-items">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
);

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      animate={isOpen ? "open" : "closed"}
      variants={variants}
    >
      <Toggle onClick={() => setIsOpen((isOpen) => !isOpen)} />
      <Items />
    </motion.nav>
  );
};
