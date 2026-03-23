import React from 'react'
import { motion as Motion } from "motion/react"

const Title = ({title, desc}) => {
  return (
    <div className='text-center space-y-3'>
      <Motion.h2 
      initial= {{opacity:0, y: 30}}
      whileInView={{opacity:1, y: 0}}
      transition={{duration: 0.6}}
      viewport={{once: true}} 

      className='text-3xl sm:text-5xl font-semibold tracking-tight text-slate-900 dark:text-slate-100'>{title}</Motion.h2>

      <Motion.p 
      initial= {{opacity:0, y: 20}}
      whileInView={{opacity:1, y: 0}}
      transition={{duration: 0.5, delay: 0.2}}
      viewport={{once: true}} 

      className='max-w-2xl mx-auto text-slate-600 dark:text-slate-300 mb-6'>{desc}</Motion.p>
    </div>
  )
}

export default Title