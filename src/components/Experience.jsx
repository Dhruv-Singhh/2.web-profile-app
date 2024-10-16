import React from 'react'
import { EXPERIENCES } from '../constants'
import { motion } from 'framer-motion'

const Experience = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h2 
            whileInView={{y: 0, opacity: 1}}
            animate={{y: -100, opacity: 0}}
            transition={{duration: 0.4, delay: 0}}
            className='my-20 text-center text-4xl'>
            Experience
        </motion.h2>
        <div>
            {EXPERIENCES.map((exp,ind) => (
                <div key={ind} className='mb-8 flex flex-wrap lg:justify-center'>
                    <motion.div 
                        whileInView={{x: 0, opacity: 1}}
                        animate={{x: -100, opacity: 0}}
                        transition={{duration: 0.7, delay: 0}}
                        className='w-full lg:w-1/4'>
                        <p className='mb-2 text-sm text-neutral-400'>{exp.year}</p>
                    </motion.div>
                    <motion.div 
                        whileInView={{x: 0, opacity: 1}}
                        animate={{x: 100, opacity: 0}}
                        transition={{duration: 0.7, delay: 0}}
                        className='w-full max-w-xl lg:w-3/4'>
                        <h6 className='mb-2 font-semibold'>
                            {exp.role} - <span className='text-sm text-purple-100'>{exp.company}</span>
                        </h6>
                        <p className='mb-4 text-neutral-400'>
                            {exp.description}
                        </p>
                        <div className='flex flex-wrap'>
                            {exp.technologies.map((tech, index) => (
                                <div className='flex-col mr-2 mt-4 rounded bg-neutral-800 px-2 py-1 text-sm font-medium text-slate-500' key={index}>{tech}</div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Experience