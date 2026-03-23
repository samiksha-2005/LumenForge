import React from 'react'
import { company_logos } from '../assets/assets' 
import { motion as Motion } from "motion/react"   

const TrustedBy = () => {
  return (
    <Motion.div
    initial= {{opacity:0, y: 30}}
    whileInView={{opacity:1, y: 0}}
    transition={{duration: 0.6}}
    viewport={{once: true}} 

    className='px-4 sm:px-12 lg:px-24 xl:px-40 pt-6 text-slate-700 dark:text-slate-200'> 

      <Motion.h3 
      initial= {{opacity:0, y: 20}}
      whileInView={{opacity:1, y: 0}}
      transition={{duration: 0.5}}
      viewport={{once: true}} 

      className='text-center font-semibold tracking-[0.16em] uppercase text-xs sm:text-sm text-slate-500 dark:text-slate-400'>Trusted by industry leaders</Motion.h3>

      <Motion.div 
      initial= "hidden"
      whileInView= "visible"
      transition={{staggerChildren: 0.1}}
      viewport={{once: true}} 
      className='flex items-center justify-center flex-wrap gap-8 mt-4 w-full max-w-6xl rounded-2xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/60 p-6 sm:p-8'>
        {company_logos.map((logo, idx) => (
          <Motion.img 
          variants={{
            hidden: {opacity: 0, y: 10},
            visible: {opacity: 1, y: 0}
          }}
          transition={{duration: 0.4}}
          key={idx} src={logo} alt='Company logo' className='max-h-5 sm:max-h-6' />
        ))}

      </Motion.div>

    </Motion.div>

  )
}

export default TrustedBy