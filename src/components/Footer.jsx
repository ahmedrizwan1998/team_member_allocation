import React from 'react'

function Footer() {
  let today = new Date();
  return (
    <div className='container'>
      <h5>Team Member Allocation App - {today.getFullYear()}</h5>
    </div>
  )
}

export default Footer