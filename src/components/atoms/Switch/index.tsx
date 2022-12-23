import React from 'react'
import './Switch.css'

export const Switch = ({onChange, value= true}:any) => {
  return (
    <>
      <label className='switch'>
        <input type='checkbox' checked={value} onChange={onChange} />
        <span className='slider round'></span>
      </label>
    </>
  )
}
