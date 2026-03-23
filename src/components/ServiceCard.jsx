import React, { useRef, useState } from 'react'
import { motion as Motion } from "motion/react"

const ServiceCard = ({service, index}) => {

    const [position, setposition] = useState({x:0, y:0})
    const [visible, setVisible] = useState(false)

    const divRef = useRef(null)

    const handleMouseMove = (e) => {
        const bounds = divRef.current.getBoundingClientRect();
        setposition({x: e.clientX - bounds.left, y: e.clientY - bounds.top})
    }

  return (
    <Motion.div 
    initial= {{opacity:0, y: 30}}
    whileInView={{opacity:1, y: 0}}
    transition={{duration: 0.5, delay: index * 0.2}}
    viewport={{once: true}}
    className='group relative overflow-hidden max-w-lg m-2 sm:m-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl transition-shadow duration-300' onMouseEnter={()=>setVisible(true)} onMouseLeave={()=>setVisible(false)} ref={divRef} onMouseMove={handleMouseMove}>

        <div className={`pointer-events-none blur-2xl rounded-full bg-gradient-to-r from-emerald-300 to-amber-300 w-[260px] h-[260px] absolute z-0 transition-opacity duration-500 ${visible ? 'opacity-25' : 'opacity-0'}`} style={{top:position.y - 130, left:position.x - 130}}/>

            <div className='flex items-start gap-5 p-7 sm:p-8 z-10 relative'>

                <div className='bg-emerald-50 dark:bg-slate-800 rounded-xl p-3'>
                    <img src={service.icon} alt="" className='w-10 h-10 object-contain' />
                </div>
                <div className='flex-1'>
                   <h3 className='font-semibold text-xl text-slate-900 dark:text-slate-100'>{service.title}</h3>
                   <p className='text-sm mt-2 text-slate-600 dark:text-slate-300 leading-relaxed'>{service.description}</p>
                </div>

            </div>

       
        
    </Motion.div>
  )
}

export default ServiceCard