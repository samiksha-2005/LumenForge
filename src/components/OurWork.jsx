import React from 'react'
import Title from './Title'
import { motion as Motion } from "motion/react"

const OurWork = () => {

    const workData = [
        {
      title: 'B2B SaaS Repositioning',
      description: 'Refined enterprise messaging and rebuilt website architecture to improve sales-qualified leads.',
      metric: '+68% SQL growth',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80'
        },
        {
      title: 'Fintech Platform Launch',
      description: 'Complete campaign framework and performance landing pages for a new financial product line.',
      metric: '3.2x ROAS',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80'
        },
        {
      title: 'Healthcare Service Expansion',
      description: 'Patient acquisition strategy with clear service-line pages and targeted digital campaigns.',
      metric: '+41% appointments',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80'
        },
    ]
  return (
    <Motion.div 
    initial= "hidden"
    whileInView= "visible"
    transition={{staggerChildren: 0.2}}
    viewport={{once: true}}
     id='our-work' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-28 text-slate-700 dark:text-slate-100'>

       <Title title='Selected client outcomes' desc='Recent engagements where strategy, design, and performance execution created measurable impact.'/> 

       <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl'>
        {workData.map((work, index)=>(
           <Motion.div 
           initial= {{opacity:0, y: 30}}
           whileInView={{opacity:1, y: 0}}
           transition={{duration: 0.5, delay: index * 0.2}}
           viewport={{once: true}}
           key={index} className='group rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 overflow-hidden hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-xl'>
            <div className='relative overflow-hidden'>
              <img src={work.image} className='w-full h-64 object-cover group-hover:scale-105 transition duration-700' alt="Project preview" />
              <div className='absolute top-4 left-4 rounded-full bg-white/90 dark:bg-slate-900/80 px-3 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-400'>
                {work.metric}
              </div>
            </div>
            <div className='p-5'>
              <p className='text-xs tracking-[0.14em] uppercase text-slate-500 dark:text-slate-400 mb-2'>Case Study</p>
              <h3 className='text-lg font-semibold text-slate-900 dark:text-slate-100'>{work.title}</h3>
              <p className='text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed'>{work.description}</p>
            </div>

              </Motion.div>
        ))}

       </div>
    </Motion.div>

  )
}

export default OurWork