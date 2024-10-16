import React from "react";
import logo from "../assets/white-Logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <motion.img 
                initial={{y:-100, opacity:1}}
                animate={{y:0, opacity:1}}
                transition={{duration:0.5, delay:0}}
                src={logo} 
                className="mx-2 w-25 h-20 pb-1" 
                alt="logo" />
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <motion.a 
                    initial={{y:-100, opacity:1}}
                    animate={{y:0, opacity:1}}
                    transition={{y: {duration:0.5, delay:0}, scale:{duration: 0.1, delay:0}}}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 1.1 }}
                    target="_blank" 
                    rel="noreferrer" 
                    href="https://www.linkedin.com/in/dhruvsingh1519/">
                    <FaLinkedin/>
                </motion.a>
                <motion.a 
                    initial={{y:-100, opacity:1}}
                    animate={{y:0, opacity:1}}
                    transition={{y: {duration:0.5, delay:0}, scale:{duration: 0.1, delay:0}}}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 1.1 }}
                    target="_blank" 
                    rel="noreferrer" 
                    href="https://github.com/Dhruv-Singhh">
                    <FaGithub/>
                </motion.a>
                <motion.a 
                    initial={{y:-100, opacity:1}}
                    animate={{y:0, opacity:1}}
                    transition={{y: {duration:0.5, delay:0}, scale:{duration: 0.1, delay:0}}}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 1.1 }}
                    target="_blank" 
                    rel="noreferrer" 
                    href="https://www.instagram.com/dhruv_sing.h/">
                    <FaInstagram/>
                </motion.a>
            </div>
        </nav>
    )
}

export default Navbar;