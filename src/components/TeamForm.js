import React, { useState } from "react";
import '../App.css';

function TeamForm(props) {
    const [teams, setTeams] = useState({ name: "", email: "", role: "" })
    const handleChange = event => {
        setTeams({...teams, [event.target.name]: event.target.value });
    };

        const handleSubmit = event => {
            event.preventDefault();
            props.addTeam(teams);
            setTeams({ name: "", email: "", role: ""});
        }

    return (
        <div className='form-container'>
        <div className='form'>
        <form onSubmit={handleSubmit}>
            <div className='form-input'>
            <p><label htmlFor='name'>Name</label></p>
            <input
                id='name'
                value={teams.name}
                name='name'
                type='text'
                onChange={handleChange}
            />
            </div>
            <div className='form-input'>
            <p><label htmlFor='email'>Email</label></p>
            <input
                id='email'
                value={teams.email}
                name='email'
                type='text'
                onChange={handleChange}
            />
            </div>
            <div className='form-input'>
            <p><label htmlFor='role'>Role</label></p>
            <input
                id='role'
                value={teams.role}
                name='role'
                type='text'
                onChange={handleChange}
            />
            
            </div>
            <button className='submit-button' type='submit'>Add Team Member</button>
        </form>
        </div>
        </div>
    );
};

    export default TeamForm;