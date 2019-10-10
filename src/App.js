import React from 'react';
import { useState } from 'react';
import './App.css';
import TeamForm from './components/TeamForm';
import Team from './components/Team';

function App() {

  const [teams, setTeams] = useState([
  {    
    id: Date.now(),
    name: 'Nathan Loveless',
    email: 'nathansl2003@yahoo.com',
    role: 'Front End'
  }
  ]);

  const addTeamMember = team => {
    const newTeam = {
      id: Date.now(),
      name: team.name,
      email: team.email,
      role: team.role
    };

    setTeams([...teams, newTeam]);
  };

  return (
    <div className="App">
      <h1>Team Members</h1>
      <TeamForm addTeam={addTeamMember} />
      <Team teamList={teams} />
    </div>
  );
}

export default App;
