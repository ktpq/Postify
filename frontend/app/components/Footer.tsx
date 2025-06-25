import React from 'react'

import WebLogo from './WebLogo'

export default function Footer() {
    

  const today:Date = new Date();
  const currentYear:number = today.getFullYear();


  return (
    <footer className="bg-gray-900 text-white py-6 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <WebLogo/>
          </div>
          <span className="text-lg font-medium">ThaiBlogs</span>
        </div>
        
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-400">© {currentYear} Postify All Rights Reserved</span>
          <a 
            href="https://github.com/ktpq/Postify" 
            className="text-gray-400 hover:text-white transition-colors w-8"
            aria-label="GitHub"
            target='_blank'
          >
            <img src="./github.png" alt="" />
          </a>
        </div>
      </div>
    </footer>
  )
}
