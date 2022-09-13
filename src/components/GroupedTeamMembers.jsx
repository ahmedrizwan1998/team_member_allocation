import React from 'react'
import { useState } from 'react'

function GroupedTeamMembers({employees, selectedTeam, setTeam}) {

    const [groupedEmployees, setGroupData] = useState(groupTeamMembers());

    function groupTeamMembers () {
        const teams = [];
        console.log(teams)
        const teamAMembers = employees.filter((employee) => employee.teamName === "Team A");
        const teamA = {team: "Team A", members: teamAMembers, collapsed: selectedTeam === "Team A"?false:true}
        teams.push(teamA);

        const teamBMembers = employees.filter((employee) => employee.teamName === "Team B");
        const teamB = {team: "Team B", members: teamBMembers, collapsed: selectedTeam === "Team B"?false:true}
        teams.push(teamB);

        const teamCMembers = employees.filter((employee) => employee.teamName === "Team C");
        const teamC = {team: "Team C", members: teamCMembers, collapsed: selectedTeam === "Team C"?false:true}
        teams.push(teamC);

        const teamDMembers = employees.filter((employee) => employee.teamName === "Team D");
        const teamD = {team: "Team D", members: teamDMembers, collapsed: selectedTeam === "Team D"?false:true}
        teams.push(teamD);

        return teams;
    }
    function handleTeamClick (event) {
        let newGroupedData = groupedEmployees.map((groupData) => groupData.team === event.currentTarget.id 
                                                                ?{...groupData, collapsed:!groupData.collapsed}
                                                                :groupData);
        setGroupData(newGroupedData);
        // setTeam(event.currentTarget.id);
    }
  return (
    <div className='container'>
        <h1>Grouped Team Members</h1>
        {
            groupedEmployees.map((item) => {
                return (
                    <div key={item.team} className='card mt-2' style={{cursor: "pointer"}}>
                        <h4 id={item.team} className='card-header text-secondary bg-white' 
                        onClick={handleTeamClick}>
                            Team Name: {item.team}
                        </h4>
                        <div id={"collapse_" + item.team} className={item.collapsed === true?"collapse":""}>
                            <hr/>
                            {
                                item.members.map((member) => {
                                    return (
                                        <div className='mt-2'>
                                            <h5 className='card-title mt-2'>
                                                <span className='text-dark'>Full Name: {member.fullName}</span>
                                            </h5>
                                            <p>Designation: {member.designation}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default GroupedTeamMembers