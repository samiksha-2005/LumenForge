import React from 'react'
import assets from '../assets/assets'
import { motion as Motion } from "motion/react"

const Footer = () => {
  return (
    <Motion.div 
    initial= {{opacity:0, y: 50}}
    whileInView={{opacity:1, y: 0}}
    transition={{duration: 0.8}}
    viewport={{once: true}}
    className='bg-slate-900 text-slate-200 pt-14 mt-20 sm:mt-28 px-4 sm:px-10 lg:px-24 xl:px-40'>
        {/* footer top */}
        <div className='flex justify-between lg:items-start max-lg:flex-col gap-10'>
            <Motion.div 
            initial= {{opacity:0, x: -30}}
            whileInView={{opacity:1, y: 0}}
            transition={{duration: 0.6, delay: 0.2}}
            viewport={{once: true}}
            className='space-y-5 text-sm text-slate-300'>
                <div>
                  <p className='text-xl leading-none text-white font-semibold'>LumenForge</p>
                    <p className='text-[10px] uppercase tracking-[0.2em] text-amber-400 mt-1'>Strategic Design Studio</p>
                </div>
                <p className='max-w-md text-slate-400'>We help companies build trust and scale demand through clear strategy, high-quality design, and performance execution.</p>

                <ul className='flex gap-8 flex-wrap'>
                    <li><a className='hover:text-amber-400 transition-colors' href="#hero">Home</a></li>
                    <li><a className='hover:text-amber-400 transition-colors' href="#services">Services</a></li>
                    <li><a className='hover:text-amber-400 transition-colors' href="#our-work">Work</a></li>
                    <li><a className='hover:text-amber-400 transition-colors' href="#contact-us">Contact</a></li>
                </ul>
            </Motion.div>
            <Motion.div 
            initial= {{opacity:0, x: 30}}
            whileInView={{opacity:1, y: 0}}
            transition={{duration: 0.5, delay: 0.3}}
            viewport={{once: true}}
            className='text-slate-400 w-full max-w-md'>
                <h3 className='font-semibold text-white'>Subscribe to Growth Notes</h3>
                <p className='text-sm mt-2 mb-6'>Monthly practical insights on brand, UX, and conversion strategy.</p>
                <div className='flex gap-2 text-sm'>
                    <input type="email" placeholder='Enter your email' className='w-full p-3 text-sm outline-none rounded-lg text-slate-100 bg-slate-800 border border-slate-700'/>
                    <button className='bg-emerald-600 text-white rounded-lg px-6 hover:bg-emerald-700 transition-colors'>Subscribe</button>
                </div>
            </Motion.div>
        </div>
        <hr className='border-slate-800 my-8'/>

        {/* footer bottom */}
        <Motion.div 
        initial= {{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration: 0.5, delay: 0.4}}
        viewport={{once: true}}
        className='pb-8 text-sm text-slate-500 flex justify-center sm:justify-between gap-4 flex-wrap'>
            <p>Copyright 2026 LumenForge Studio. All rights reserved.</p>
            <div className='flex items-center justify-between gap-4'>
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.instagram_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
                </Motion.div>
        </Motion.div>
  )
}

export default Footer