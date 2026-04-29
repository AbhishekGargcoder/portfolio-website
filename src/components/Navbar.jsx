import React from 'react'
import {useState} from 'react'
import { FaBars} from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'
// 8860044948 -> shivam sharma
// 05624266666 -> raghunandan
const Navbar = () => {
    const [showMenu,setShowMenu] = useState(false)
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }
  return (
    <nav className='fixed w-full z-50 bg-black/90 backdrop-blur-sm py-4 px-8 w-full '>
        <div className='flex justify-between mx-auto  items-center '>
            <div>
                <a href='#' className='text-3xl font-bold transition duration-300 hover:text-white/50 group'>
                    Abhishek garg
                <div className='w-6 h-6 bg-violet-400 rounded-full'></div>
                </a>
            </div>
            { /* by default hidden on mobile screen size*/}
            <div className='hidden md:flex space-x-10'> 
                <a href='#home'className='text-xl flex items-center text-white/80 relative transition duration-300 hover:text-white/50 group'>
                    <span>Home</span>
                    <span className='absolute left-0 bottom-1 w-0 h-0.5 bg-white/50 transition-all duration-300 group-hover:w-full'></span>
                </a>
                <a href='#about'className='text-xl flex items-center text-white/80 relative transition duration-300 hover:text-white/50 group'>
                    <span>About</span>
                    <span className='absolute left-0 bottom-1 w-0 h-0.5 bg-white/50 transition-all duration-300 group-hover:w-full'></span>
                </a>
               
                <a href='#skills'className='text-xl flex items-center text-white/80 relative transition duration-300 hover:text-white/50 group'>
                    <span>Skills</span>
                    <span className='absolute left-0 bottom-1 w-0 h-0.5 bg-white/50 transition-all duration-300 group-hover:w-full'></span>
                </a>
                 <a href='#projects'className='text-xl flex items-center text-white/80 relative transition duration-300 hover:text-white/50 group'>
                    <span>Projects</span>
                    <span className='absolute left-0 bottom-1 w-0 h-0.5 bg-white/50 transition-all duration-300 group-hover:w-full'></span>
                </a>
                <a href='#experience'className='text-xl flex items-center text-white/80 relative transition duration-300 hover:text-white/50 group'>
                    <span>Experience</span>
                    <span className='absolute left-0 bottom-1 w-0 h-0.5 bg-white/50 transition-all duration-300 group-hover:w-full'></span>
                </a>
                <a href='#contact'className='text-xl flex items-center text-white/80 relative transition duration-300 hover:text-white/50 group'>
                    <span>Contact us</span>
                    <span className='absolute left-0 bottom-1 w-0 h-0.5 bg-white/50 transition-all duration-300 group-hover:w-full'></span>
                </a>
                
                </div>
                <div className='md:hidden'>
            {showMenu ?
            (<div id='menuBar' >
            <FaXmark className='text-2xl cursor-pointer' onClick={toggleMenu}/>
            </div>)
             : <FaBars className='text-2xl cursor-pointer' onClick={toggleMenu}/>}
        </div>
        </div>

        {showMenu &&(
            <div className='md:hidden flex flex-col justify-center items-center space-y-6  h-screen  '> 
                <a onClick={()=>setShowMenu(!showMenu)} href='#home'className='text-xl flex items-center text-white/80 relative transition duration-300 hover:text-white/50 group'>
                    <span>Home</span>
                    <span className='absolute left-0 bottom-1 w-0 h-0.5 bg-white/50 transition-all duration-300 group-hover:w-full'></span>
                </a>
                <a onClick={()=>setShowMenu(!showMenu)}  href='#about'className='text-xl flex items-center text-white/80 relative transition duration-300 hover:text-white/50 group'>
                    <span>About</span>
                    <span className='absolute left-0 bottom-1 w-0 h-0.5 bg-white/50 transition-all duration-300 group-hover:w-full'></span>
                </a>
                <a onClick={()=>setShowMenu(!showMenu)}  href='#projects'className='text-xl flex items-center text-white/80 relative transition duration-300 hover:text-white/50 group'>
                    <span>Projects</span>
                    <span className='absolute left-0 bottom-1 w-0 h-0.5 bg-white/50 transition-all duration-300 group-hover:w-full'></span>
                </a>
                <a onClick={()=>setShowMenu(!showMenu)}  href='#skills'className='text-xl flex items-center text-white/80 relative transition duration-300 hover:text-white/50 group'>
                    <span>Skills</span>
                    <span className='absolute left-0 bottom-1 w-0 h-0.5 bg-white/50 transition-all duration-300 group-hover:w-full'></span>
                </a>
                <a onClick={()=>setShowMenu(!showMenu)}  href='#experience'className='text-xl flex items-center text-white/80 relative transition duration-300 hover:text-white/50 group'>
                    <span>Experience</span>
                    <span className='absolute left-0 bottom-1 w-0 h-0.5 bg-white/50 transition-all duration-300 group-hover:w-full'></span>
                </a>
                <a  onClick={()=>setShowMenu(!showMenu)} href='#contact'className='text-xl flex items-center text-white/80 relative transition duration-300 hover:text-white/50 group'>
                    <span>Contact us</span>
                    <span className='absolute left-0 bottom-1 w-0 h-0.5 bg-white/50 transition-all duration-300 group-hover:w-full'></span>
                </a>
                
                </div>
            
        )}
        
    </nav>
  )
}

export default Navbar