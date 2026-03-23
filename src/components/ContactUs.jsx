import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import toast from 'react-hot-toast'
import { motion as Motion } from "motion/react"

const ContactUs = () => {
    const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "ef7fac75-9233-4bf6-9241-937408c417a4";

    if (!accessKey) {
      toast.error('Contact form is not configured yet. Please add VITE_WEB3FORMS_ACCESS_KEY in your .env file.')
      return
    }

    formData.append("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      toast.success('Thank you for your submission!')
      event.target.reset();
    } else {
      toast.error(data.message)
    }
    } catch (error) {
        toast.error(error.message)
    }

    
    }
  return (
    <Motion.div 
    initial= "hidden"
    whileInView= "visible"
    transition={{staggerChildren: 0.2}}
    viewport={{once: true}}
    id='contact-us' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-28 text-slate-700 dark:text-slate-100'>

      <Title title='Start with a focused consultation' desc='Share your business priorities and we will send a clear plan with scope, timeline, and next steps.'/>

        <Motion.form 
        initial= {{opacity:0, y: 30}}
        whileInView={{opacity:1, y: 0}}
        transition={{duration: 0.5, delay: 0.4}}
        viewport={{once: true}}
      onSubmit={onSubmit} className='w-full max-w-4xl p-6 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm space-y-6'>
        <div className='grid sm:grid-cols-2 gap-4 sm:gap-5'>
          <div>
            <p className='mb-2 text-sm font-medium'>Full name</p>
            <input name='name' type="text" placeholder='Enter your full name' className='w-full p-3.5 text-sm outline-none rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-950 focus:border-emerald-500 dark:focus:border-emerald-400 transition-colors' required/>
          </div>
          <div>
            <p className='mb-2 text-sm font-medium'>Work email</p>
            <input name='email' type="email" placeholder='Enter your work email' className='w-full p-3.5 text-sm outline-none rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-950 focus:border-emerald-500 dark:focus:border-emerald-400 transition-colors' required/>
          </div>
          <div className='sm:col-span-2'>
            <p className='mb-2 text-sm font-medium'>Project brief</p>
            <textarea name='message' rows={7} placeholder='Tell us about objectives, timeline, and budget expectations' className='w-full p-3.5 text-sm outline-none rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-950 focus:border-emerald-500 dark:focus:border-emerald-400 transition-colors resize-none' required/>
          </div>
        </div>

        <div className='flex items-center justify-between max-sm:flex-col max-sm:items-start gap-4 pt-2 border-t border-slate-200 dark:border-slate-700'>
          <p className='text-xs text-slate-500 dark:text-slate-400'>Response time: within one business day.</p>
          <button type='submit' className='w-max flex gap-2 bg-emerald-600 text-white text-sm px-8 py-3 rounded-xl cursor-pointer hover:bg-emerald-700 transition-colors'>
            Send Inquiry <img src={assets.arrow_icon} alt="" className='w-4'/>
          </button>
        </div>

        </Motion.form>

    </Motion.div>
  )
}

export default ContactUs