import React from 'react'

const Navbar = ({ darkTheme, setDarkTheme }) => {
  return (
    <header className='px-8 flex justify-between h-12 items-center border-b'>
      <h2 className='dark:text-gray-200'>Zino Search</h2>
      <button onClick={() => setDarkTheme(!darkTheme)}>
        {darkTheme ? "💡" : "🌙"}
      </button>
    </header>
  )
}

export default Navbar