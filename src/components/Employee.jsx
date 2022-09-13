import React from 'react';
import '../App.css';
import TeamMembers from './TeamMembers';
import Teams from './Teams';

function Employee({employees, handleTeamChange, changeSelectedTeam, selectedTeam}) {
    
  return (
    <div className="container">
        <div className="row justify-content-center mt-3 mb-3">
            <div className="col-8"> 
                <Teams selectedTeam={selectedTeam} handleTeamChange={handleTeamChange}/>
            </div>
        </div>    
        <div className="row justify-content-center mt-3 mb-3">
            <div className="col-8 "> 
                <div className="card-collection">
                    <TeamMembers employees={employees} 
                                changeSelectedTeam={changeSelectedTeam} 
                                selectedTeam={selectedTeam}/>
                </div> 
            </div> 
        </div>
    </div>
  )
}

export default Employee