import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className='text-center grid place-items-center dark:text-gray-50 py-6 border-t'>
      <p>Powered by <span className='text-gray-600 dark:text-gray-900'>RapidAPI</span> & <span className='text-gray-600 dark:text-gray-900'>BING</span></p>
      <p>All rights reserved. &copy; {year}</p>
    </footer>
  )
}

export default Footer