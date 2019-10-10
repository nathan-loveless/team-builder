import React, { useState } from "react";

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
        <form onSubmit={handleSubmit}>
            <label htmlFor='Name'>Name</label>
            <input
                id='name'
                value={teams.title}
                name='name'
                type='text'
                onChange={handleChange}
            />

            <label htmlFor='email'>Email</label>
            <input
                id='email'
                value={teams.email}
                name='email'
                type='text'
                onChange={handleChange}
            />

            <label htmlFor='role'>Role</label>
            <input
                id='role'
                value={teams.role}
                name='role'
                type='text'
                onChange={handleChange}
            />
            <button type='submit'>Add Team Member</button>
        </form>
    );
};

    export default TeamForm;