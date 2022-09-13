import React from 'react';
import femaleProfile from "../images/femaleProfile.jpg";
import maleProfile from "../images/maleProfile.jpg";
import '../App.css';

function Employee({employees, handleTeamChange, changeSelectedTeam, selectedTeam}) {
    
  return (
    <div className="container">
        <div className="row justify-content-center mt-3 mb-3">
            <div className="col-8"> 
                <select className="form-select select-lg" value={selectedTeam} onChange={handleTeamChange}>
                    <option>Team A</option>
                    <option>Team B</option>
                    <option>Team C</option>
                    <option>Team D</option>
                </select>
            </div>
        </div>    
        <div className="row justify-content-center mt-3 mb-3">
            <div className="col-8 "> 
                <div className="card-collection">
                    {
                        employees.map((employee) => (
                            <div id={employee.id} className={employee.teamName === selectedTeam ? "card m-2 standout" : "card m-2" } style={{cursor: "pointer"}} onClick={changeSelectedTeam}>
                                {(employee.gender === "male")?<img src={maleProfile} className="card-img-top"/>
                                :<img src={femaleProfile} className="card-img-top"/>}
                                <div className="card-body">
                                    <h5 className="card-title">Full Name: {employee.fullName}</h5>
                                    <p className="card-text">Designation: {employee.designation}</p>
                                </div>
                            </div>  
                        ))
                    }
                </div> 
            </div> 
        </div>
    </div>
  )
}

export default Employee