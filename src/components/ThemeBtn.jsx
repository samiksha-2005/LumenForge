import React, { useEffect } from 'react'
import assets from '../assets/assets'

const ThemeBtn = ({theme, setTheme}) => {

    useEffect(()=>{
        if(theme === 'dark'){
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
        localStorage.setItem('theme', theme)
    },[theme])

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

  return (
    <div>
        <button
          type='button'
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
            {theme === 'dark' ? (
                <img src={assets.sun_icon} className='size-9 p-2 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900' alt='Light mode' />
            ) : (
                <img src={assets.moon_icon} className='size-9 p-2 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900' alt='Dark mode' />
            )}
        </button>
    </div>
  )
}

export default ThemeBtn