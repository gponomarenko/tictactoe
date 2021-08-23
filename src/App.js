/* eslint-disable react/no-array-index-key */
import './App.css';
import React, { useState, useEffect, useCallback } from 'react';
import Field from './components/Field/Field'
import Modal from './components/Modal/Modal';
import Patterns from './patterns/Patterns';

function App() {
  const [board, setBoard] = useState(Array(9).fill(''));
  const [player, setPlayer] = useState('O');
  const [result, setResult] = useState({ winner: 'none', state: 'none' });
  const [modalActive, setModalActive] = useState(true);
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [players, setPlayers] = useState([]);
  const [games, setGames] = useState(0);

  const gamesIncrease = useCallback(() => {
    setGames(games + 1);
  }, [result]);

  // const changeScore = () => {
  //   if (games % 2 === 0) {
  //     setPlayers();
  //   }

  //   setPlayers([...players, players[1].wins + 1]);
  // }

  const chooseField = (field) => {
    setBoard(board.map((value, index) => {
      if (index === field && value === '') {
        return player;
      }

      return value;
    }));
  };

  const checkWin = useCallback(() => {
    Patterns.forEach((currPattern) => {
      const firstPlayer = board[currPattern[0]];

      if (firstPlayer === '') {
        return;
      }

      let foundWinningPattern = true;

      currPattern.forEach((index) => {
        if (board[index] !== firstPlayer) {
          foundWinningPattern = false;
        }
      });
      if (foundWinningPattern) {
        setResult({ winner: player, state: 'won' });
        console.log(`${player} won!`);
        gamesIncrease();
        // changeScore();
      }
    });
  }, [board, player]);

  const checkIfTie = useCallback(() => {
    let filled = true;

    board.forEach((field) => {
      if (field === '') {
        filled = false;
      }
    });
    if (filled) {
      setResult({ winner: 'No One', state: 'Tie' });
      gamesIncrease();
    }
  }, [board]);

  const restartGame = () => {
    setBoard(Array(9).fill(''));
  };

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

  const submitPlayers = (event) => {
    event.preventDefault();
    const player1 = {
      name: name1,
      wins: 0,
    };

    const player2 = {
      name: name2,
      wins: 0,
    };

    setPlayers(() => [player1, player2]);
    setName1('');
    setName2('');
    setModalActive(false);
    console.log('non-active');
  };

  return (
    <div className="App">
      <div className="frame">
        <div className="board">
          {board.map((v, i, ar) => (
            <Field
              key={i}
              value={board[i]}
              chooseField={() => {
                chooseField(i);
              }}
            />
          ))
          }
        </div>
      </div>

      <div className="frame">
        <p>
          Score
        </p>
        <p>
          {`${players.length && players[0].name}:
          ${players.length && players[0].wins}`}
        </p>
        <p>
          {`${players.length && players[1].name}:
          ${players.length && players[1].wins}`}
        </p>
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
          Set new players
        </button>
      </div>
      <Modal
        active={modalActive}
        setActive={setModalActive}
        submitPlayers={submitPlayers}
        name1={name1}
        name2={name2}
        setName1={setName1}
        setName2={setName2}
      />
    </div>
  );
}

export default App;
