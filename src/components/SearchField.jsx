import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ContextApp } from '../context/ContextAPI'

const SearchField = () => {
  const { query, setQuery, searchApi } = useContext(ContextApp)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    searchApi(query)
    navigate("/search")
  }

  return (
    <>
      <div className='flex flex-col justify-center items-center gap-6'>
        <label className='text-3xl dark:text-gray-200'>Zino Search</label>
        <form
          className='relative w-full md:w-2/3 lg:w-1/2'>
          <input
            onChange={(e) => setQuery(e.target.value)}
            name="query"
            type="text"
            placeholder='Search...'
            required
            className='border p-2 rounded-lg w-full outline-none bg-gray-300' />
          <button
            onClick={handleSubmit}
            className='absolute top-2 right-2 cursor-pointer'>🔍</button>
        </form>
      </div>
    </>
  )
}

export default SearchField