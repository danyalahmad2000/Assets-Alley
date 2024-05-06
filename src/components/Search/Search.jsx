import React from 'react'
import Location from './search-components/Location'
import Property from './search-components/Property'
import Price from "./search-components/Price"
import SearchIcon from './search-components/SearchIcon'

const Search = () => {
  return (
    <>
    <div className='flex w-full flex-col lg:flex-row md:absolute '>
        <Location/>
        <Property/>
        <Price/>
        <SearchIcon/>
    </div>
    </>
  )
}

export default Search
