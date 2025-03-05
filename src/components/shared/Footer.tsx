import {  Github, Linkedin, Send } from 'lucide-react'
import { Button } from '../ui/button'
import LogoIcon from './LogoIcon'

export default function Footer() {
  return (
    <footer className='w-full border-t border-gray-200 bg-background shadow-sm dark:border-gray-800'>
      <div className='max-w-[1800px] py-5 mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between gap-4'>
        
        {/* Logo Section */}
        <LogoIcon />


        <div className='text-center text-sm text-gray-500 dark:text-gray-400'>
          © 2025 JasX. All rights reserved.
        </div>
        {/* Social Links */}
        <div className='flex items-center gap-4'>
          <Button variant='ghost' size='icon' asChild>
            <a href='https://t.me/jasurkhaitov' target='_blank' rel='noopener noreferrer'>
              <Send className='w-5 h-5 text-gray-600 dark:text-gray-300 hover:text-blue-500' />
            </a>
          </Button>
          <Button variant='ghost' size='icon' asChild>
            <a href='https://github.com/jasurkhaitov' target='_blank' rel='noopener noreferrer'>
              <Github className='w-5 h-5 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white' />
            </a>
          </Button>
          <Button variant='ghost' size='icon' asChild>
            <a href='https://linkedin.com/in/jasurkhaitov' target='_blank' rel='noopener noreferrer'>
              <Linkedin className='w-5 h-5 text-gray-600 dark:text-gray-300 hover:text-blue-700' />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  )
}
