import React, { useState } from "react";

function Team(props) {

    return (
        <div className='team-container'>
            {props.teamList.map(team => {
                return (
                    <>
                    <div className='team-card' key={team.id}>                
                        <div className='name'>{team.name}</div>
                        <div className='email'><p>{team.email}</p></div>
                        <div className='role'>{team.role}</div>
                    </div>                       
                    </>        
                );
            })}
        </div>
    );
};

export default Team;