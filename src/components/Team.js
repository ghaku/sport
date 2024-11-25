import React from 'react';
import '../App.css';

const Team = ({ teamName, score, onScoreChange }) => {
  return (
    <div className="team">
      <h2>{teamName}</h2>
      <p>Рахунок: {score}</p>
      <button onClick={() => onScoreChange(1)}>+1</button>
      <button onClick={() => onScoreChange(-1)}>-1</button>
    </div>
  );
};

export default Team;
