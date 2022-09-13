import React from 'react'

function Header({selectedTeam, teamMemberCount}) {
  return (
    <div className='container'>
      <div className='row justify-content-center mt-3 mb-4'>
        <div className='col-8'>
          <h1>Team Member Allocations</h1>
          <h3>{selectedTeam} has {teamMemberCount} {teamMemberCount === 1?"Member":"Members"}</h3>
        </div>
      </div>
    </div>
  )
}

export default Header