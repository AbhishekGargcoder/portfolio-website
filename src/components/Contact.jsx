import React from 'react'
import { motion } from 'framer-motion'
import { div } from 'framer-motion/client'
import { FaArrowRight, FaPhone, FaVoicemail, FaGithub, FaInstagram, FaLinkedin, } from 'react-icons/fa'
import { FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa'

function Contact(){
  return (
    <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: false,amount:0.2}}
        className='py-20 bg-dark-200'
        id="contact">   
                <div className='container mx-auto px-6'>
                        <h2 className='text-3xl font-semibold text-center mb-4 '>Get <span className='text-violet-400'>In Touch</span></h2>
                        <p className=' text-gray-400 mb-6 text-center mb-16'>Have a project in mind or want to collaborate? Let's talk</p>
                        {/* 2 grids one for contact form and another for contact  info */}
                        <div className='grid grid-cols-1 lg:grid-cols-2 mx-auto'>
                             <div className='grid grid-cols-1 '>
                                <form className='space-y-6'>
                                    <div>
                                        <label htmlFor="name" className='block text-gray-300 mb-2'>Your Name</label>
                                        <input type="text"id='name'  className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none' />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className='block text-gray-300 mb-2'>Your Email</label>
                                        <input type="email"id='email'  className='w-full bg-dark-900 border border-dark-400 rounded-lg px-4 py-3 outline-none' />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className='block text-gray-300 mb-2'>Your Message</label>
                                        <textarea type="text"id='message'  className='h-40 w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none' />
                                    </div>
                                    <button type='submit' className='w-full bg-green-400 text-xl rounded-2xl px-3 py-4 bg-violet-500 font-medium hover:bg-violet-400 cursor-pointer'>Send</button>
                                    
                                </form>

                            </div>
                            <div className='space-y-6 pl-7 pt-4'>
                                <div className='flex  pl-4' >
                                        <div className=' text-2xl text-violet-400 font-medium'>
                                            <FaMapMarkerAlt />
                                        </div>
                                        <div className='pl-4'>
                                            <h2 className=' font-medium text-xl'>Location</h2>
                                            <p className='text-md text-gray-300 p-2'>Agra, Uttar pradesh</p>
                                        </div>
                                </div>
                                <div className='flex  pl-4' >
                                        <div className='text-2xl text-violet-400 font-medium'>
                                            <FaEnvelope />
                                        </div>
                                        <div className='pl-4'>
                                            <h2 className=' font-medium text-xl'>Email</h2> 
                                            <p className='text-md text-gray-300 p-2'>abhigarg1408@gmail.com</p>
                                        </div>
                                </div>
                                <div className='flex  pl-4' >
                                        <div className='text-2xl text-violet-400 font-medium'>
                                            <FaPhone />
                                        </div>
                                        <div className='pl-4'>
                                            <h2 className=' font-medium text-xl'>Phone no</h2>
                                            <p className='text-md text-gray-300 p-2'>+917302982603</p>
                                        </div>
                                </div>
                                <div className='pt-4'>
                                    <h2 className='text-xl font-medium p-2'>Follow Me</h2>
                                    <div className='flex'>
                                        <a href="" className='m-2 text-2xl p-2 border-2 border-violet-400 rounded-xl transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-dark-400 hover:text-white'>
                                            <FaGithub />
                                        </a>
                                        <a href="" className='m-2 text-2xl p-2 border-2 border-violet-400 rounded-xl transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-dark-400 hover:text-white'>
                                            <FaInstagram />
                                        </a>
                                        <a href="" className='m-2 text-2xl p-2 border-2 border-violet-400 rounded-xl transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-dark-400 hover:text-white'> 
                                            <FaLinkedin />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                </div>
        </motion.div>
  )     
}
  export default Contact