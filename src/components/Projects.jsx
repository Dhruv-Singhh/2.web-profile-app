import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h2 
            whileInView={{y: 0, opacity: 1}}
            animate={{y: -100, opacity: 0}}
            transition={{duration: 0.4, delay: 0}}
            className='my-20 text-center text-4xl'>
            Projects
        </motion.h2>
        <div>
            {PROJECTS.map((project, ind) => (
                <div key={ind} className='mb-8 flex flex-wrap lg:justify-center'>
                    <motion.div 
                        whileInView={{x: 0, opacity: 1}}
                        animate={{x: -100, opacity: 0}}
                        transition={{duration: 0.7, delay: 0}}
                        className='w-full lg:w-1/4'>
                        <img className='mb-6 rounded' width={150} height={150} src={project.image} alt={project.title}/>
                    </motion.div>
                    <motion.div 
                        whileInView={{x: 0, opacity: 1}}
                        animate={{x: 100, opacity: 0}}
                        transition={{duration: 0.7, delay: 0}}
                        className='w-full max-w-xl lg:w-3/4'>
                        <h6 className='mb-2 font-semibold'>
                            {project.title}
                        </h6>
                        <p className='mb-4 text-neutral-400'>
                            {project.description}
                        </p>
                        <div className='flex flex-wrap'>
                            {project.technologies.map((tech, index) => (
                                <span className='flex-col mr-2 mt-4 rounded bg-neutral-800 px-2 py-1 text-sm font-medium text-slate-500 mb-2' key={index}>{tech}</span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            ))}

        </div>
    </div>
  )
}

export default Projects