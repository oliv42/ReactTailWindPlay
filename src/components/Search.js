import React from 'react'

export default function Search({searchStr, searchHandler}) {
  return (
    <React.Fragment>
    <input 
    type="text"
    placeholder='Chercher..'
    value={searchStr}
    onChange={searchHandler}  />
    </React.Fragment>

  )
}
