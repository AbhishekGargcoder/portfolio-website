import React from 'react'
import { motion } from 'framer-motion'
import { projects } from '../assets/assets'
import { div } from 'framer-motion/client'
import ProjectCard from './ProjectCard'
import { FaArrowRight } from 'react-icons/fa'

function Projects(){
  return (
    <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: false,amount:0.2}}
        className='py-20 bg-dark-200'
        id="projects">

        <div className='container mx-auto px-6'>
            <h2 className='text-3xl font-semibold text-center mb-4 '>My <span className='text-violet-400'>Projects</span></h2>
            <p className=' text-gray-400 mb-6 text-center mb-16'>Projects and ideas  I've worked on.</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {/* my  project card */}
                {projects.map((project,idx)=>{
                    return(
                            <ProjectCard key={idx} {...project}/>
                    )
                })}

            </div>

            {/* {more projects div hai ye} */}
            <div className='text-center mt-10'>
                <a href="#projects" className='text-xl inline-flex border-violet-500  px-6 py-3 justify-center bg-violet-500 rounded-xl items-center border-2 font-medium transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-dark-400 hover:text-white  '>
                    <span className='font-medium text-grey-400 p-2 rounded-2xl'>More Projects</span>
                    <FaArrowRight />
                </a>
            </div>

        <div>

        </div>


        </div>

                
    </motion.div>
  )
}

export default Projects