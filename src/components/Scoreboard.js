import React, { useState } from 'react';
import Team from './Team';
import '../App.css';

const Scoreboard = () => {
  const [team1Name, setTeam1Name] = useState('Команда 1');
  const [team2Name, setTeam2Name] = useState('Команда 2');
  const [team1Score, setTeam1Score] = useState(0);
  const [team2Score, setTeam2Score] = useState(0);

  const updateScore = (setter, currentScore, points) => {
    const newScore = currentScore + points;
    if (newScore >= 0) setter(newScore);
  };

  return (
    <div className="App">
      <h1>Табло для спортивних змагань</h1>

      <div>
        <input 
          type="text" 
          value={team1Name} 
          onChange={(e) => setTeam1Name(e.target.value)} 
          placeholder="Назва команди 1" 
          className="team-input" 
        />
        <input 
          type="text" 
          value={team2Name} 
          onChange={(e) => setTeam2Name(e.target.value)} 
          placeholder="Назва команди 2" 
          className="team-input" 
        />
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Team 
          teamName={team1Name} 
          score={team1Score} 
          onScoreChange={(points) => updateScore(setTeam1Score, team1Score, points)} 
        />
        <Team 
          teamName={team2Name} 
          score={team2Score} 
          onScoreChange={(points) => updateScore(setTeam2Score, team2Score, points)} 
        />
      </div>

      <h2>Поточний рахунок: {team1Score} - {team2Score}</h2>
    </div>
  );
};

export default Scoreboard;
