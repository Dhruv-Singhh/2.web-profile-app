import React from "react";
import logo from "../assets/white-Logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img src={logo} className="mx-2 w-25 h-20 pb-1" alt="logo" />
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/dhruvsingh1519/">
                    <FaLinkedin/>
                </a>
                <a target="_blank" rel="noreferrer" href="https://github.com/Dhruv-Singhh">
                    <FaGithub/>
                </a>
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/dhruv_sing.h/">
                    <FaInstagram/>
                </a>
            </div>
        </nav>
    )
}

export default Navbar;