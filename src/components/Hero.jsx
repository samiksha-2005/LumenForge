import React from 'react'
import { motion as Motion } from "motion/react"

const heroImage = 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1800&q=80'

const Hero = () => {
  return (
    <section id='hero' className='px-4 sm:px-12 lg:px-24 xl:px-40 pt-14 sm:pt-20 pb-8'>
      <div className='grid lg:grid-cols-2 gap-10 lg:gap-14 items-center'>
        <div className='space-y-6'>
          <Motion.p
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5}}
          className='inline-flex rounded-full border border-slate-300 dark:border-slate-700 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-400'>
            Growth, Design, Performance
          </Motion.p>

          <Motion.h1
          initial={{opacity: 0, y: 30}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6, delay: 0.1}}
          className='text-4xl sm:text-5xl xl:text-6xl font-semibold leading-tight text-slate-900 dark:text-slate-100'>
            Professional digital experiences built for measurable business outcomes.
          </Motion.h1>

          <Motion.p
          initial={{opacity: 0, y: 24}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5, delay: 0.2}}
          className='text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl'>
            LumenForge partners with ambitious teams to craft clear brand systems, high-performing websites, and integrated campaigns that convert attention into revenue.
          </Motion.p>

          <Motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5, delay: 0.3}}
          className='flex flex-wrap gap-3'>
            <a href='#contact-us' className='rounded-xl bg-emerald-600 text-white px-6 py-3 text-sm font-semibold hover:bg-emerald-700 transition-colors'>Start a Project</a>
            <a href='#our-work' className='rounded-xl border border-slate-300 dark:border-slate-700 px-6 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'>See Case Studies</a>
          </Motion.div>

          <Motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.5, delay: 0.4}}
          className='grid grid-cols-3 gap-3 max-w-xl'>
            <div className='rounded-xl border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-900/60 p-4'>
              <p className='text-2xl font-bold text-slate-900 dark:text-slate-100'>120+</p>
              <p className='text-xs text-slate-500 dark:text-slate-400'>Brands Served</p>
            </div>
            <div className='rounded-xl border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-900/60 p-4'>
              <p className='text-2xl font-bold text-slate-900 dark:text-slate-100'>4.9/5</p>
              <p className='text-xs text-slate-500 dark:text-slate-400'>Client Rating</p>
            </div>
            <div className='rounded-xl border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-900/60 p-4'>
              <p className='text-2xl font-bold text-slate-900 dark:text-slate-100'>18d</p>
              <p className='text-xs text-slate-500 dark:text-slate-400'>Avg. Launch</p>
            </div>
          </Motion.div>
        </div>

        <Motion.div
        initial={{opacity: 0, scale: 0.96, y: 20}}
        animate={{opacity: 1, scale: 1, y: 0}}
        transition={{duration: 0.7, delay: 0.2}}
        className='relative'>
          <img src={heroImage} alt='Executive team meeting with strategy dashboard' className='w-full rounded-3xl object-cover h-[520px] shadow-2xl shadow-slate-900/20'/>
          <div className='absolute inset-0 rounded-3xl bg-gradient-to-tr from-slate-950/35 via-transparent to-emerald-900/20' />
        </Motion.div>
      </div>
    </section>
  )
}

export default Hero