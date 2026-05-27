import React from 'react'
import { motion } from 'framer-motion'
import { projects } from '../assets/assets'
import { div } from 'framer-motion/client'
import ProjectCard from './ProjectCard'
import { FaArrowRight } from 'react-icons/fa'

function Projects() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className='py-20 bg-dark-200'
            id="projects">

            <div className='container mx-auto px-6'>
                <h2 className='text-3xl font-semibold text-center mb-4 '>My <span className='text-violet-400'>Projects</span></h2>
                <p className=' text-gray-400 mb-6 text-center mb-16'>Projects and ideas  I've worked on.</p>

                {/*  make it a horizontal scrollbar */}

                <div className='overflow-x-auto scrollbar-hide w-full mt-10'>
                    <div className='flex gap-6 items-stretch py-4 px-1 w-max'>
                        {/* <div className='grid grid-cols-1 gap-6 border-2 border-red-500 overflow-x-auto '> */}
                        {/* my  project card */}
                        {projects.map((project, idx) => {
                            return (
                                <ProjectCard key={idx} {...project} />
                            )
                        })}
                    </div>
                </div>

                <div>

                </div>


            </div>


        </motion.div>
    )
}

export default Projects