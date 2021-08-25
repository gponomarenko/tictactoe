/* eslint-disable react/no-array-index-key */
import './App.css';
import React, { useState, useEffect, useCallback } from 'react';
import Field from './components/Field/Field';
import Modal from './components/Modal/Modal';
import Patterns from './patterns/Patterns';

function App() {
  const [board, setBoard] = useState(Array(9).fill(''));
  const [symbol, setSymbol] = useState('O');
  const [result, setResult] = useState({ winner: 'none', state: 'none' });
  const [modalActive, setModalActive] = useState(true);
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [player1, setPlayer1] = useState(null);
  const [player2, setPlayer2] = useState(null);
  const [win1, setWin1] = useState(0);
  const [win2, setWin2] = useState(0);
  const [games, setGames] = useState(0);

  const gamesIncrease = useCallback(() => {
    setGames(games + 1);
  }, [result]);

  const chooseField = (field) => {
    setBoard(board.map((value, index) => {
      if (index === field && value === '') {
        return (symbol);
      }

      return value;
    }));
  };

  const restartGame = () => {
    setBoard(Array(9).fill(''));
    setResult(prevState => ({
      ...prevState,
      'winner': 'none',
      'state': 'none'
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
        setResult(prevState => ({
          ...prevState,
          winner: symbol,
          state: 'won',
        }));
        console.log(`${symbol} won!`);
        console.log(result.symbol, result.state);
        gamesIncrease();

        if (symbol === 'X') {
          setWin1(win1 + 1);
        } else {
          setWin2(win2 + 1);
        }
        restartGame();
        console.log(`symbol after restart ${symbol}`);
        if (games % 2 === 0) {
          setSymbol('X');
          console.log('set x');
        } else {
          setSymbol('O');
          console.log('set o');
        }
        restartGame();
        console.log(`symbol after settings ${symbol}`);
      }
    });
  }, [board]);

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
      setWin1(win1 + 0.5);
      setWin2(win2 + 0.5);
      restartGame();
    }
  }, [board]);

  useEffect(() => {
    checkWin();
    checkIfTie();
    if (result.state === 'none') {
      switch (symbol) {
        case 'X':
          setSymbol('O');
          break;

        case 'O':
          setSymbol('X');
          break;

        default:
          setSymbol('X');
          break;
      }
    }
  }, [board, result]);

  useEffect(() => {
    if (result.state !== 'none') {
      alert(`Game Finished! Winning player: ${result.winner}`);
    }
  }, [result]);

  const submitPlayers = (event) => {
    event.preventDefault();
    setPlayer1(name1);
    setPlayer2(name2);
    setName1('');
    setName2('');
    setModalActive(false);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="frame left">
          <div className="board win">
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

        <div className="frame right">
          <p className="frame__score">
            Score
          </p>
          {player1 ? (
            <p className="frame__score">
              {`${player1 && player1}:
              ${win1 && win1}`}
            </p>
          ) : (<p className="frame__score">Player: 0</p>)}
          {player2 ? (
            <p>
              {`${player2 && player2}:
              ${win2 && win2}`}
            </p>
          ) : (<p className="frame__score">Player2: 0</p>)}

        </div>
        {/* <Modal
          active={modalActive}
          setActive={setModalActive}
          submitPlayers={submitPlayers}
          name1={name1}
          name2={name2}
          setName1={setName1}
          setName2={setName2}
        /> */}
      </div>
    </div>
  );
}

export default App;
