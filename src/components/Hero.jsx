import React from 'react'
import {motion } from 'framer-motion'
import { assets } from '../assets/assets'


function Hero(){
  return (
    <motion.div 
    initial={{opacity: 0, y: 100}}
    whileInView={{opacity:1,y:0}}
    animate={{opacity: 1, y: 0}}
    transition={{duration: 0.6}}
    viewport={{once:false,amount:0.2}}
    className='flex items-center min-h-screen pt-20 pb-8'
    id="home"
    >
          <div className='mt-5 flex flex-col items-center px-6 md:flex-row justify-between container mx-auto'>
            {/* left wala div */}
              <div className='md:w-1/2  mb-10  md:mb-0'>
                  <h1 className='text-5xl font-bold '>Hi,
                     <span className='text-violet-400 '>I'm Abhishek garg</span>
                    </h1>
                  <h2 className='text-3xl font-semibold md:text-3xl mb-6 mt-4  typewriter-name'>MERN Stack Developer</h2>
                  <p className='text-lg text-gray-400 mb-8'>
                      I'm a full stack developer with a passion for creating innovative solutions. I love building user-friendly, responsive web applications that deliver exceptional user experiences.
                  </p>
                  <div className='mt-5 flex flex-col md:flex-row space-x-4'>
                    <a href="#contact" className='px-4 py-5 md:mr-4 font-bold bg-violet-400 mr-0 rounded-lg font-medium hover:bg-violet-500 hover:text-white transition duration 300'>Contact Me</a>
                    <br /> 
                    <a href="#projects" className='px-4 py-5 font-bold text-violet-400 border-2 text-[#34D399] rounded-lg font-medium hover:bg-sky-350 hover:text-white transition duration 300'>View My Work</a>  
                  </div>

              </div>
              {/* right wala div */}
              <div>
                <motion.img animate={{y:[0,-20,0]}}
                transition={{
                    duration:10,
                    repeat :Infinity,
                    repeatType:"loop",
                    ease:"easeOut"
                }}
                src={assets.reactLogo} alt='img' 
                className='relative rounded-full md:w-80 md:h-80 animate-float'/>
              </div>
          </div>
          
        </motion.div>

  )
}

export default Hero