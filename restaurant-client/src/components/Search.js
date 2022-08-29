import React, { useState } from 'react'


const Search = ({ get_booking, queryData, setIsSearched, setData }) => {
   return (
      <div className='search'>
            <h>
               Or...
            </h>
         <form onSubmit={(e) => get_booking(e, queryData, setIsSearched, setData)}>
            <div>
               <input type="text" placeholder='Enter booking reference' onChange={e => queryData.id = e.target.value} />
            </div>

            <div>
               <input type="text" placeholder='Enter Last Name' onChange={e => queryData.lName = e.target.value} />
            </div>
            <input type="submit" />
         </form>
      </div>
   )
}

export default Search