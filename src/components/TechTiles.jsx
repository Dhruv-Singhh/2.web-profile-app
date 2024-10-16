import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { RiJavascriptLine } from 'react-icons/ri'
import { RiHtml5Line } from 'react-icons/ri'
import { RiCss3Line } from 'react-icons/ri'
import { SiSap } from "react-icons/si";
import { motion } from 'framer-motion'

const TileVariants = (time) => ({
  initial: { y: -10},
  animate: {
    y: [-10, 10],
    transition: {
      duration: time,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
})

const TechTiles = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h2 
          whileInView={{y: 0, opacity: 1}}
          animate={{y: -100, opacity: 0}}
          transition={{duration: 0.4, delay: 0}}
          className='my-20 text-center text-4xl'>
            Technologies
        </motion.h2>
        <motion.div 
          whileInView={{x: 0, opacity: 1}}
          animate={{x: -100, opacity: 0}}
          transition={{duration: 0.7, delay: 0}}
          className='flex flex-wrap items-center justify-center gap-4'>
          <motion.div 
            variants={TileVariants(4)} 
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
            <RiReactjsLine className='text-7xl text-cyan-400'/>
          </motion.div>
          <motion.div 
            variants={TileVariants(2.5)} 
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
            <RiJavascriptLine className='text-7xl text-amber-400'/>
          </motion.div>
          <motion.div 
            variants={TileVariants(5)} 
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
            <RiHtml5Line className='text-7xl text-orange-400'/>
          </motion.div>
          <motion.div 
            variants={TileVariants(3.5)} 
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
            <RiCss3Line className='text-7xl text-sky-400'/>
          </motion.div>
          <motion.div 
            variants={TileVariants(3)} 
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiSap className='text-7xl text-blue-400'/>
          </motion.div>
        </motion.div>
    </div>
  )
}

export default TechTiles