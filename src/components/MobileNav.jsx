import React from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    {
        name: "Sobre Nosotros",
        path: "/we"
    },
    {
        name: "Proyectos",
        path: "/proyects"
    },
    {
        name: "Servicios",
        path: "/services"
    },
    {
        name: "Galería",
        path: "/gallery"
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
        className="absolute top-4 right-4 focus:outline-none z-40"
      >
        <motion.div
          className="w-6 h-1 bg-white mb-1 rounded"
          animate={isOpen ? "open" : "closed"}
          variants={topLineVariants}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="w-6 h-1 bg-white mb-1 rounded"
          animate={isOpen ? "open" : "closed"}
          variants={middleLineVariants}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="w-6 h-1 bg-white rounded"
          animate={isOpen ? "open" : "closed"}
          variants={bottomLineVariants}
          transition={{ duration: 0.3 }}
        />
      </button>
    <AnimatePresence>
      {isOpen && (
        <motion.ul
          className="fixed w-4/5 right-0 top-0 bottom-0 bg-gradient-to-b from-blue-500 to-green-300 flex flex-col items-center justify-center  space-y-4 z-0"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={menuVariants}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
        >
          {links.map((item, index) => (
            <li
              key={index}
              href={item.path}
              onClick={() => setIsOpen(false)}
            >
                <a className="text-white text-2xl hover:text-gray-300">
                  {item.name}  
                </a>
              
            </li>
          ))}
        </motion.ul>
      )}
      </AnimatePresence>
    </nav>
  );
};

export default MobileNav;
