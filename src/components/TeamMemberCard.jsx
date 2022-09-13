import React from 'react'
import femaleProfile from "../images/femaleProfile.jpg";
import maleProfile from "../images/maleProfile.jpg";

function TeamMemberCard({employee, selectedTeam, changeSelectedTeam}) {
  return (
    <div id={employee.id} className={employee.teamName === selectedTeam?"card m-2 standout":"card m-2"} style={{cursor: "pointer"}} onClick={changeSelectedTeam}>
        {(employee.gender === "male")?<img src={maleProfile} className="card-img-top"/>
                                :<img src={femaleProfile} className="card-img-top"/>}
        <div className="card-body">
            <h5 className="card-title">Full Name: {employee.fullName}</h5>
            <p className="card-text">Designation: {employee.designation}</p>
        </div>
    </div> 
  )
}

export default TeamMemberCard
