/* eslint-disable react/no-array-index-key */
import './App.css';
import React, { useState, useEffect } from 'react';
import Square from './components/Square/Square';
import Modal from './components/Modal/Modal';
import Patterns from './patterns/Patterns';
import { PlayersContext } from './components/PlayersContext/PlayersContext';

function App() {
  const [board, setBoard] = useState(Array(9).fill(''));
  const [player, setPlayer] = useState('O');
  const [result, setResult] = useState({ winner: 'none', state: 'none' });
  const [modalActive, setModalActive] = useState(true);
  const [players, setPlayers] = useState(['', '']);

  useEffect(() => {
    checkWin();
    checkIfTie();
    if (player === 'X') {
      setPlayer('O');
    } else {
      setPlayer('X');
    }
  }, [board]);

  useEffect(() => {
    if (result.state !== 'none') {
      alert(`Game Finished! Winning player: ${result.winner}`);
    }
  }, [result]);

  const chooseSquare = (square) => {
    setBoard(board.map((value, index) => {
      if (index === square && value === '') {
        return player;
      }

      return value;
    }));
  };

  const checkWin = () => {
    Patterns.forEach((currPattern) => {
      const firstPlayer = board[currPattern[0]];

      if (firstPlayer === '') return;
      let foundWinningPattern = true;

      currPattern.forEach((index) => {
        if (board[index] !== firstPlayer) {
          foundWinningPattern = false;
          console.log(`pattern is not found`);
        }
      });
      if (foundWinningPattern) {
        setResult({ winner: player, state: 'won' });
        console.log(`${player} won!`);
      }
    });
  };

  const checkIfTie = () => {
    let filled = true;

    board.forEach((square) => {
      if (square === '') {
        filled = false;
      }
    });
    if (filled) {
      setResult({ winner: 'No One', state: 'Tie' });
      console.log('Tie!');
    }
  };

  const restartGame = () => {
    setBoard(Array(9).fill(''));
  };

  return (
    <PlayersContext.Provider
      value={players}
      setPlayers={setPlayers}
    >
    <div className="App">
      <div className="frame">
        <div className="board">
          {board.map((v, i, ar) => (
            <Square
              key={i}
              value={board[i]}
              chooseSquare={() => {
                chooseSquare(i);
              }}
            />
          ))
          }
        </div>
      </div>

      <div className="frame">
        <button
          className="button"
          type="button"
          onClick={restartGame}
        >
          Clear board
        </button>
        <button
          className="button"
          type="button"
          onClick={() => setModalActive(true)}
        >
          Input new players
        </button>
      </div>
      <Modal active={modalActive} setActive={setModalActive} />
    </div>
    </PlayersContext.Provider>
  );
}

export default App;
