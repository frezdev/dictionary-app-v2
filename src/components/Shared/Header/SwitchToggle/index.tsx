'use client'
import React, { useEffect, useState } from 'react'
import { MoonIcon, MoonFillIcon } from '@/components/Shared/Icons'

export const SwitchToggle = () => {
  const [darkMode, setDarkMode] = useState(false)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    document.querySelector('html')?.classList.toggle('dark')
    setDarkMode(e.target.checked)
  }

  const hasDarkMode = () => {
    const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches
    isDarkMode
      ? document.querySelector('html')?.classList.add('dark')
      : document.querySelector('html')?.classList.remove('dark')

    setDarkMode(isDarkMode)
  }

  useEffect(() => {
    hasDarkMode()
  }, [])

  return (
    <label className="inline-flex items-center cursor-pointer">
      <input onChange={handleChange} checked={darkMode} type="checkbox" className="sr-only peer" />
      <div className="relative w-9 h-5 bg-gray-500 rounded-full dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-purple-500" />
      <span className="ms-2 text-sm font-medium text-gray-500 dark:text-gray-300">
        {!darkMode ? <MoonIcon /> : <MoonFillIcon />}
      </span>
    </label>
  )
}