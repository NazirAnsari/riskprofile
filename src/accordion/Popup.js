import React from 'react'
import './accodion.css'
export default function Popup() {
  return (
    <>
    <div className='popup'>
        <div className='popupWidth'>
    <div>
      <label htmlFor="name">Name</label><br />
      <input type="text" id="name" />
      </div>
     
      <div>
      <label htmlFor="email">Email</label> <br />
      <input type="email" id='email' />
      </div>

      <div>
      <label htmlFor="Mobile">Mobile</label><br />
      <input type="tel" id='Mobile'/>
      </div>
      <button type='submit'>Submit</button> <br />

      </div>
      </div>
    </>
  )
}
