import React from 'react'
import {motion } from 'framer-motion'
import { assets } from '../assets/assets'
import { aboutInfo } from '../assets/assets'

export default function About(){
  return (
    <motion.div 
    initial={{opacity: 0, y: 100}}
    whileInView={{opacity:1,y:0}}
    transition={{duration: 0.6,ease:"easeOut"}}
    viewport={{once:false,amount:0.2}}
    className='py-20 bg-dark-200'
    id="about"
    >
        <div className='container mx-auto'>
            <h2 className='text-3xl font-bold text-center mb-10 mt-20'>
                About
                <span className='text-violet-400 '> Me</span>
            </h2>
            <p className='text-gray-400 text-center mb-10 '>
                I'm a full stack developer with a passion for creating innovative solutions. I love building user-friendly, responsive web applications that deliver exceptional user experiences.
            </p>
            { /* about info  img + my journey */}
            <div className='flex flex-col md:flex-row  items-center gap-12'>
                {/* {img} */}
                <div className='my-img md:w-1/2 rounded-2xl overflow-hidden h-full w-full'> 
                    <motion.img src={assets.reactLogo} alt="MyImage"
                    initial={{opacity: 0, y: 50}}
                    whileInView={{opacity:1,y:0}}
                    transition={{duration: 0.9,ease:"easeOut"}}
                    viewport={{once:true}}
                    className='h-full w-full p-2 rounded-4xl' />
                </div>
                {/* {my journey} text content*/}
                  <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.9, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className='md:w-1/2 '
                  >
                      <div className='rounded-4xl p-8'>
                          <h3 className='text-2xl font-semibold mb-6'>My Journey </h3>
                          <p className='text-gray-400 mb-6'>Fresh out of the gate, but anything but a beginner. I'm a MERN Stack Developer with a sharp eye for problem-solving and a passion for building end-to-end web applications that actually work — fast, clean, and scalable. Ready to contribute from day one.
                          </p>

                          <p className='text-gray-400 mb-12'>Every great product starts with a problem worth solving. As a MERN Stack Developer, that's exactly how I think — from the database to the UI, I engineer with purpose. I'm a fresher hungry for real-world challenges, and I bring the full stack to the table: MongoDB, Express, React, and Node.js.</p>

                          {/* {Cards} */}
                          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            {   
                                aboutInfo.map((info,idx)=>{
                                    return (
                                        <div key={idx} className='bg-gray-700 rounded-2xl p-4 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-dark-400 hover:text-white'>
                                                <div className='text-violet-400 text-4xl mb-4'>
                                                    <info.icon/>
                                                </div>
                                                <h3 className='text-xl font-semibold'>{info.title}</h3>
                                                <p className='text-gray-400'>{info.description}</p>
                                        </div>
                                    )
                                })

                            }

                          </div>
                      </div>
                  </motion.div>
            </div>



        </div>



        </motion.div>
  )
}
