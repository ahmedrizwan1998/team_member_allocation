import React from 'react'

function Teams({selectedTeam, handleTeamOnChange}) {
  return (
    <select className="form-select select-lg" value={selectedTeam} onChange={handleTeamOnChange}>
        <option>Team A</option>
        <option>Team B</option>
        <option>Team C</option>
        <option>Team D</option>
    </select>
  )
}

export default Teams
