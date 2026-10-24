import React, { useState } from 'react';
import './App.css';

function App() {  
  const [team1Score, setTeam1Score] = useState(0);
  const [team2Score, setTeam2Score] = useState(0);

  function team1Update(val: number) {
    setTeam1Score(t => t + val);
  }

  function team2Update(val: number) {
    setTeam2Score(t => t + val);
  }

  function resetScores() {
    setTeam1Score(0);
    setTeam2Score(0);
  }

  return (
    <div className='scoreboard'>
      <div className='scores'>
        <button 
          className='scorebutton team1' 
          onClick={() => team1Update(1)}>
          {team1Score}
        </button>
        <button 
          className='scorebutton team2'
          onClick={() => team2Update(1)}>
          {team2Score}
        </button>
      </div>

      <div className='config'>
        <div className='teamconfigs'>
          <button
            className='increment'
            onClick={() => team1Update(1)}>
            ▲
          </button>
          <button
            className='decrement'
            onClick={() => team1Update(-1)}>
            ▼
          </button>
        </div>
        
        <button
          className='reset'
          onClick={() => resetScores()}>
          ↻
        </button>

        <div className='teamconfigs'>
          <button
            className='increment'
            onClick={() => team2Update(1)}>
            ▲
          </button>
          <button
            className='decrement'
            onClick={() => team2Update(-1)}>
            ▼
          </button>
        </div>
      </div>
    </div>
  )
}

export default App