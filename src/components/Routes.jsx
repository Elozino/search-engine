import React from 'react'
import SearchResults from './SearchResults'
import { Routes, Route } from 'react-router-dom'
import SearchField from './SearchField'

const RouteApp = () => {
  return (
    <div className='p-8'>
      <Routes>
        <Route index path="/" element={<SearchField />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
    </div>
  )
}

export default RouteApp