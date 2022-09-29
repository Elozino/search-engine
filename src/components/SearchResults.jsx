import React, { useContext } from 'react'
import { useLocation } from "react-router-dom"
import { ContextApp } from '../context/ContextAPI'
import Loading from './Loading'

const SearchResults = () => {
  const { isLoading, results, query, searchApi } = useContext(ContextApp)
  const { pathname } = useLocation()
  if (isLoading) return <Loading />

  const handleSubmit = async (e) => {
    e.preventDefault()
    searchApi(query)
  }

  // switch (pathname) {
  //   case "/search":
  //     return (

  //     );
  //   case "/images":
  //     return "IMAGES";
  //   case "/videos":
  //     return "IMAGES";
  //   default:
  //     return "ERROR";
  // }

  return (<>
    <form
      className='relative w-full md:w-2/3 lg:w-1/2 mb-5'>
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
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
      {results?.map((item, i) => (
        <div key={i} className="dark:text-gray-200">
          <a href={item?.url} target="_blank" rel="noreferrer" >
            <p className='hover:underline text-blue-400'>{`${item?.url}`.substring(0, 25)}...</p>
            <p className='font-bold break-words'>{`${item?.name}`}...</p>
          </a>
        </div>
      ))}
    </div>
  </>
  )
}

export default SearchResults