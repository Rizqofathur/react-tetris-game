import React from 'react';
import './GameStats.css';

const GameStats = ({ gameStats }) => {
  const { level, points, linesCompleted, linesPerLevel } = gameStats;
  const linesToLevel = linesPerLevel - linesCompleted;

  return (
    <div className="GameStats GameStats__right">
      <ul>
        <li>level</li>
        <li className="value">{level}</li>
        <li>Lines to level</li>
        <li className="value">{linesToLevel}</li>
        <li>Points</li>
        <li className="value">{points}</li>
      </ul>
    </div>
  );
};

export default React.memo(GameStats);
