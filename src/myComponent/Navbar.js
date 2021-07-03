import React from 'react'
import '../App.css'


export default function Navbar(props) {
    return (
      <div>
        <nav className='navbar'>
        <div className='main'>
          <div className='logo'>
            <h2>{props.title}</h2>
          </div>
          {/* <div className='list-items'>
            <ul>
              <li>Profile</li>
              <li>Home</li>
              <li>About
              </li>
            </ul>
          </div> */}
        </div>
      </nav>
      </div>
    )
}
