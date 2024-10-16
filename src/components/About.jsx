import React from 'react'
import aboutImg from '../assets/aboutMe.jpg'
import { ABOUT_TEXT } from '../constants'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h2 
            whileInView={{y: 0, opacity: 1}}
            initial={{y:-100, opacity: 0}}
            transition={{duration: 0.4}}
            className='my-20 text-center text-4xl font-light'>
            About
            <span className='text-neutral-500'> Me</span>
        </motion.h2>
        <div className='flex flex-wrap'>
            <motion.div 
                whileInView={{x: 0, opacity: 1}}
                initial={{x: -100, opacity:0}}
                transition={{duration: 0.5}}
                className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex items-center justify-center'>
                    <img className='h-2/3 w-2/3 rounded-2xl' src={aboutImg} alt='About'></img>
                </div>
            </motion.div>
            <motion.div 
                whileInView={{x: 0, opacity: 1}}
                initial={{x: 100, opacity:0}}
                transition={{duration: 0.5}}
                className='w-full lg:w-1/2'>
                <div className='flex justify-center lg:justify-start'>
                    <p className='my-2 max-w-xl py-6'>{ABOUT_TEXT}</p>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default About