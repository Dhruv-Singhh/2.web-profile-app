import React, { useState } from 'react'
import { CONTACT } from '../constants'
import { motion } from 'framer-motion'

const ContactSection = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
        <motion.h1 
            whileInView={{y: 0, opacity: 1}}
            initial={{y:-100, opacity: 0}}
            transition={{duration: 0.4}}
            className='my-10 text-center text-4xl'>
            Get in Touch
        </motion.h1>
        <div className='text-center tracking-tighter'>
            <motion.p 
                whileInView={{x: 0, opacity: 1}}
                initial={{x:-100, opacity: 0}}
                transition={{duration: 0.7}}
                className='my-3'>
                {CONTACT.address}
            </motion.p>
            <motion.div 
                initial={{x: 100, opacity: 1}}
                whileInView={{x: 0, opacity: 1}}
                transition={{x: {duration: 0.7}, scale:{duration: 0.1}}}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1.1 }}
                className='my-3'>
                <a className='underline' href={"tel:" + CONTACT.phoneNo}>
                    {CONTACT.phoneNo}
                </a>
            </motion.div>
            <motion.div 
                initial={{y: 40, opacity: 1}}
                whileInView={{y: 0, opacity: 1}}
                transition={{y: {duration: 0.7}, scale:{duration: 0.1}}}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1.1 }}
                className='my-3'>
                <a className='underline' href={"mailto:" + CONTACT.email}>
                    {CONTACT.email}
                </a>
            </motion.div>
        </div>
    </div>
  )
}

export default ContactSection