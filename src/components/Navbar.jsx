import React, { useState } from 'react'
import assets from '../assets/assets'
import ThemeBtn from './ThemeBtn'
import { motion as Motion } from "motion/react"

const Navbar = ({theme, setTheme}) => {

  const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <Motion.div 
    initial= {{opacity: 0, y: -50}}
    animate= {{opacity: 1, y: 0}}
    transition={{duration: 0.6, ease: 'easeOut'}}
    className='sticky top-0 z-40 px-4 sm:px-12 lg:px-24 xl:px-40 py-4 border-b border-slate-200/70 dark:border-slate-700/70 bg-white/85 dark:bg-slate-950/75 backdrop-blur-xl'>

        <div className='flex items-center justify-between'>
          <a href='#hero' className='flex items-center gap-3'>
            <span className='h-9 w-9 rounded-xl bg-gradient-to-br from-emerald-500 to-amber-500 text-white flex items-center justify-center text-sm font-bold'>LF</span>
            <div>
              <p className='text-lg sm:text-xl leading-none tracking-tight font-semibold text-slate-900 dark:text-slate-100'>LumenForge</p>
              <p className='text-[10px] sm:text-xs uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-400'>Strategic Design Studio</p>
            </div>
          </a>

          <div className={`text-slate-700 dark:text-slate-100 sm:text-sm ${!sidebarOpen ? 'max-sm:w-0 overflow-hidden' : 'max-sm:w-64 max-sm:pl-10'} max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-slate-900 max-sm:text-white max-sm:pt-20 flex sm:items-center gap-6 transition-all`}>

            <img src={assets.close_icon} alt="" className='w-5 absolute right-4 top-4 sm:hidden' onClick={()=> setSidebarOpen(false)}/>

            <a onClick={()=>setSidebarOpen(false)} href="#" className='hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors'>Home</a>
            <a onClick={()=>setSidebarOpen(false)} href="#services" className='hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors'>Services</a>
            <a onClick={()=>setSidebarOpen(false)} href="#our-work" className='hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors'>Work</a>
            <a onClick={()=>setSidebarOpen(false)} href="#contact-us" className='hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors'>Contact</a>
          </div>

          <div className='flex items-center gap-2 sm:gap-4'>

            <ThemeBtn theme={theme} setTheme={setTheme}/>

            <img src={theme === 'dark' ? assets.menu_icon_dark : assets.menu_icon} alt="" onClick={()=> setSidebarOpen(true)} className='w-8 sm:hidden' />

            <a href="#contact-us" className='text-sm max-sm:hidden flex items-center gap-2 bg-amber-500 text-white px-5 py-2.5 rounded-full cursor-pointer hover:bg-amber-600 transition-all shadow-lg shadow-amber-500/25'>
              Book Consultation <img src={assets.arrow_icon} width={14} alt="" />
            </a>
          </div>
        </div>
    </Motion.div>
  )
}

export default Navbar