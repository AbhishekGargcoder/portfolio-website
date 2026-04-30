import { div } from 'framer-motion/client'
import React from 'react'

export default function ProjectCard({ title, description, image, tech, icons, demo, code }) {
    return (
        <div className='rounded-2xl p-4 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-dark-400 hover:text-white cursor-pointer'>
            <img src={image} alt="image-not-loaded" className='rounded-2xl w-full h-60 object-cover' />
            <h3 className='font-semibold text-xl p-4'>{title}</h3>
            <p className='text-sm text-gray-400 p-4'>{description}</p>
            {/* all tech used in my project */}
            <div className='flex md:flex-row items-center gap-2 flex-wrap rounded-full px-3 py-1 text-sm'>
                {tech.map((technology,idx)=>{
                    return(
                        <span key=  {idx} className='rounded-lg   bg-gray-500 p-2 m-1' >
                            {technology}
                        </span>
                    )
                })}
            </div>
            {/* btn for github code and deployment link */}
            <div className=' flex justify-center items-center'>
                <a className='p-4 m-3 text-md bg-violet-500 rounded-xl transition-transform duration-300 hover:scale-105 hover:text-white '  href={code}>View Code</a>
                <a className='p-4 m-3 text-md bg-dark-500 border-2 rounded-xl transition-transform duration-300 hover:scale-105  hover:bg-dark-400 hover:text-white'  href={demo}>Live Demo</a>

            </div>
            

        </div>
    )
}
