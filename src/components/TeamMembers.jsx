import React from 'react'
import TeamMemberCard from './TeamMemberCard'

function TeamMembers({employees, changeSelectedTeam, selectedTeam}) {
  return (
    employees.map((employee) => (
             <TeamMemberCard employee={employee} changeSelectedTeam={changeSelectedTeam} 
                            selectedTeam={selectedTeam}/>                
        ))
  )
}

export default TeamMembers