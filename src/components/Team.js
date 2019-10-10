import React, { useState } from "react";
import { notEqual } from "assert";

function Team(props) {

    return (
        <div className='team-list'>
            {props.teamList.map(team => {
                return (
                    <div className='team' key={team.id}>
                        <h2>{team.name}</h2>
                        <p>{team.email}</p>
                        <p>{team.role}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default Team;