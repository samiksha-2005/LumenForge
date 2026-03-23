import React from 'react'
import Title from './Title'
import { teamData } from '../assets/assets'
import { motion as Motion } from "motion/react"


const Teams = () => {
  return (
    <Motion.div 
    initial= "hidden"
    whileInView= "visible"
    viewport={{once: true}} 
    
    className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-28 text-slate-800 dark:text-slate-100'>
        <Title title='Expert team, integrated delivery' desc='Cross-functional specialists aligned around one goal: helping your business grow predictably.'/>

        <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 max-w-6xl'>
            {teamData.map((team, idx)=>(
                <Motion.div 
                initial= {{opacity:0, y: 20}}
                whileInView={{opacity:1, y: 0}}
                transition={{duration: 0.4, delay: idx * 0.1}}
                viewport={{once: true}}
                key={idx} className='group rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-5 hover:shadow-xl transition-all duration-300'>
                  <img src={team.image} className='w-16 h-16 rounded-2xl object-cover' alt={team.name} />
                  <div className='mt-4'>
                    <h3 className='font-semibold text-base text-slate-900 dark:text-slate-100'>{team.name}</h3>
                    <p className='text-xs text-emerald-700 dark:text-emerald-400 mt-1'>{team.title}</p>
                    <p className='text-xs text-slate-500 dark:text-slate-400 mt-3 leading-relaxed'>Focused on execution quality, transparent communication, and measurable delivery.</p>
                  </div>
                </Motion.div>
            ))}
        </div>
    </Motion.div>
  )
}

export default Teams