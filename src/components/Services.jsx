import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'
import { motion as Motion } from "motion/react"

const Services = () => {

    const servicesData = [
        {
            title: 'Brand Strategy',
            description: 'Positioning, voice, and messaging frameworks that align teams and sharpen market presence.',
            icon: assets.ads_icon
        },
        {
            title: 'Creative Production',
            description: 'Campaign visuals and storytelling systems tailored to your audience and channels.',
            icon: assets.marketing_icon
        },
        {
            title: 'Web Experience Design',
            description: 'High-converting website journeys focused on trust, clarity, and action.',
            icon: assets.content_icon
        },
        {
            title: 'Performance Marketing',
            description: 'Multi-channel acquisition and optimization to scale pipeline and revenue sustainably.',
            icon: assets.social_icon
        }
    ]
  return (
    <Motion.div 
    initial= "hidden"
    whileInView= "visible"
    transition={{staggerChildren: 0.2}}
    viewport={{once: true}} 
                id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-28 text-slate-700 dark:text-slate-100'>

                <Title title='Services built around outcomes' desc='A focused service model combining strategy, creative direction, and measurable growth execution.'/>    

                <div className='grid md:grid-cols-2 gap-2 max-w-6xl'>
        {servicesData.map((service, index)=>(
          <ServiceCard key={index} service={service} index={index}/>  
        ))}
    </div>

    </Motion.div>
  )
}

export default Services