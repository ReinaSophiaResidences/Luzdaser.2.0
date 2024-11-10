import React from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import mobileLogo from "../assets/Luzdazer.png";
import { HashLink as Link } from "react-router-hash-link";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    {
      name: "Sobre Nosotros",
      path: "#we",
    },
    {
      name: "Servicios",
      path: "#services",
    },
    {
      name: "Proyectos",
      path: "#proyects",
    },
    {
      name: "Galería",
      path: "#gallery",
    },
  ];

  const topLineVariants = {
    open: { rotate: 45, y: 8 },
    closed: { rotate: 0, y: 0 },
  };

  const middleLineVariants = {
    open: { opacity: 0 },
    closed: { opacity: 1 },
  };

  const bottomLineVariants = {
    open: { rotate: -45, y: -8 },
    closed: { rotate: 0, y: 0 },
  };

  const menuVariants = {
    hidden: { x: "100%" },
    visible: { x: 0 },
    exit: { x: "100%" },
  };

  return (
    <nav className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`focus:outline-none z-50 ${
          isOpen ? "fixed right-10 top-14" : "absolute top-0 right-6"
        }`}
      >
        <motion.div
          className={`w-6 h-1 mb-1 rounded top-14 ${
            isOpen ? "bg-black" : "bg-white"
          } transition-colors duration-500 ease-out delay-200`}
          animate={isOpen ? "open" : "closed"}
          variants={topLineVariants}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className={`w-6 h-1 mb-1 rounded top-16 ${
            isOpen ? "bg-black" : "bg-white"
          } transition-colors duration-500 ease-out delay-200`}
          animate={isOpen ? "open" : "closed"}
          variants={middleLineVariants}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className={`w-6 h-1 mb-1 rounded top-20 ${
            isOpen ? "bg-black" : "bg-white"
          } transition-colors duration-500 ease-out delay-200`}
          animate={isOpen ? "open" : "closed"}
          variants={bottomLineVariants}
          transition={{ duration: 0.3 }}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed w-4/5 right-0 top-0 bottom-0 bg-gradient-to-b from-white to-green-300 flex flex-col items-center space-y-4 z-0"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
          >
            <div className="w-32 h-32 mt-28">
              <img src={mobileLogo} alt="mobileLogo" />
            </div>
            <ul className="space-y-8">
              {links.map((link, index) => (
                <li key={index} onClick={() => setIsOpen(false)}>
                  <Link
                    smooth to={link.path}
                    className="text-black text-2xl hover:text-gray-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default MobileNav;
