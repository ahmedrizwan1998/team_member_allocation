import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className='navbar navbar-expand-lg navbar-light bg-light'>
        <ul className='navbar-nav me-auto mb-2 mb-lg-0' >
            <li className='nav-item'>
                <Link className='nav-link' to="/">Home</Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to="/GroupedTeamMembers">Team</Link>
            </li>
        </ul>
    </div>
  )
}

export default Nav