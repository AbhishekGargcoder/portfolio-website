import React from 'react'
import { motion } from 'framer-motion'
import { div } from 'framer-motion/client'
import { FaArrowRight } from 'react-icons/fa'
import { workData } from '../assets/assets'


function WorkExperience(){
  return (
    <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: false,amount:0.2}}
        className='py-20 bg-dark-200'
        id="experience">

        <div className='container mx-auto px-6'>
                <h2 className='text-3xl font-semibold text-center mb-4 '>Work <span className='text-violet-400'>Experience</span></h2>
                <p className=' text-gray-400 mb-6 text-center mb-16'>My professional journey so far</p>
            {/* work exp list */}
              <div className='max-w-3xl mx-auto'>
                  <div className='space-y-12'>
                      {workData.map((data, idx) => { {/** ball and box */}
                          return (
                              <div key={idx} className='relative  pl-12 cursor-pointer before:w-[5px] before:bg-violet-500 before:content-[""] before:absolute before:top-0  before:w- before:h-full  before:left-0 before:transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-dark-400 hover:text-white'>
                                  <div className='absolute top-0 left-[-0.5rem] w-6 h-6 rounded-full bg-violet-500'></div>
                                  <div className=' flex justify-between pl-6'>
                                      <h3 className='text-2xl font-semibold'>{data.role}</h3>
                                      <p className='text-gray-400'>{data.duration}</p>
                                  </div>
                                  <p className='text-xl pl-6 text-gray-400 mb-4 mt-2'>{data.company}</p>
                                  <p className='text-md pl-6 text-gray-300 mb-2'>{data.description}</p>
                              </div>)
                      })}

                  </div>

            </div>

        </div>
    </motion.div>
  )
}
export default WorkExperience