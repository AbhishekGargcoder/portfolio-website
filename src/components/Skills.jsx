import React from 'react'
import { motion } from 'framer-motion'
import { skills } from '../assets/assets'

function Skills() {
    return (

        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: false,amount:0.2}}
            className='py-20 bg-dark-200'
            id="skills">
            <div className='container mx-auto px-6'>
                <h2 className='text-3xl font-semibold text-center mb-4 '>My <span className='text-violet-400'>Skills</span></h2>
                <p className=' text-gray-400 mb-6 text-center mb-16'>Technologies I work with to bring my ideas to life.</p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        skills.map((skill, idx) => {
                            return (
                                <div key={idx} className='bg-gray-700 rounded-2xl p-4 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-dark-400 hover:text-white cursor-pointer'>
                                    <div className='text-violet-400 text-4xl mb-4'>
                                        <skill.icon />
                                    </div>
                                    <h3 className='text-xl font-semibold'>{skill.title}</h3>
                                    <p className='text-gray-400'>{skill.description}</p>
                                    {/* technologies i known */}
                                    <div className='flex flex-wrap gap-2 mt-2'>
                                        {skill.tags.map((tech, idx) => {
                                            return (
                                                <span key={idx} className='text-gray-400 bg-gray-900 rounded-full px-3 py-1 text-sm'>{tech}</span>
                                            )
                                        })}
                                    </div>

                                </div>
                            )
                        })
                    }

                </div>
            </div>

        </motion.div>
    )
}

export default Skills