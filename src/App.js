/* eslint-disable react/no-array-index-key */
import './App.css';
import React, { useState, useEffect, useCallback } from 'react';
import { Field } from './components/Field';
import { Modal } from './components/Modal';
import { Patterns } from './patterns';
import { Grid } from './components/Grid';
import { Combis } from './components/Combis';

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));

  const [symbol, setSymbol] = useState('O');
  const [result, setResult] = useState(null);
  const [combi, setCombi] = useState([]);
  const [winStyle, setWinStyle] = useState(null);

  const [modalActive, setModalActive] = useState(true);
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [player1, setPlayer1] = useState(null);
  const [player2, setPlayer2] = useState(null);

  const [win1, setWin1] = useState(0);
  const [win2, setWin2] = useState(0);
  const [games, setGames] = useState(0);
  const [isNewGame, setNewGame] = useState(false);

  const chooseField = (field) => {
    setBoard(board.map((value, index) => {
      if (index === field && !value) {
        return symbol;
      }

      return value;
    }));
  };

  const getCombiStyle = () => {
    const combyStyle = 'cs-'.concat(combi.join(''));

    return combi && setWinStyle(combyStyle);
  };

  const restartGame = () => {
    setBoard(Array(9).fill(null));
    setResult(null);
    setCombi([]);
    setWinStyle(null);
    setSymbol('X');
  };

  const checkWin = useCallback(() => {
    Patterns.forEach((currPattern) => {
      const firstPlayer = board[currPattern[0]];

      if (!firstPlayer) {
        return;
      }

      let foundWinningPattern = true;

      currPattern.forEach((index) => {
        if (board[index] !== firstPlayer) {
          foundWinningPattern = false;
        }
      });

      if (foundWinningPattern) {
        setCombi(currPattern);
        setResult(symbol);
        setGames(number => number + 1);
      }
    });
  }, [board, symbol]);

  const checkIfTie = () => {
    let filled = true;

    board.forEach((field) => {
      if (!field) {
        filled = false;
      }
    });

    if (filled) {
      setResult('Tie');
      setCombi([0]);
      setGames(number => number + 1);
    }
  };

  useEffect(() => {
    checkWin();
    checkIfTie();
  }, [board]);

  useEffect(() => {
    if (!result && !combi.length) {
      switch (symbol) {
        case 'X':
          setSymbol('O');
          break;

        case 'O':
          setSymbol('X');
          break;

        default:
      }
    }
  }, [board]);

  useEffect(() => {
    if (result && combi.length) {
      switch (result) {
        case 'X':
          setWin1(number => number + 1);
          break;

        case 'O':
          setWin2(number => number + 1);
          break;

        case 'Tie':
          setWin1(number => number + 0.5);
          setWin2(number => number + 0.5);
          break;

        default:
      }

      getCombiStyle();
    }
  }, [result, combi]);

  useEffect(() => {
    if (winStyle && result) {
      switch (result) {
        case 'Tie':
          alert('Draw! Winner was not defined');
          break;

        case 'X':
          alert(`Player ${player1} won!`);
          break;

        case 'O':
          alert(`Player ${player2} won!`);
          break;

        default:
      }

      setSymbol('O');
      setNewGame(true);
    }
  }, [winStyle]);

  useEffect(() => {
    if (isNewGame) {
      setTimeout(() => {
        restartGame();
      }, 2000);
    }

    return () => {
      setNewGame(false);
    };
  });

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
          {combi
            && <Combis winStyle={winStyle} />
          }
          <div className="board win">
            <Grid />
            {board.map((v, i) => (
              <Field
                key={i}
                value={v}
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
            <p className="frame__score">
              {`${player2 && player2}:
              ${win2 && win2}`}
            </p>
          ) : (<p className="frame__score">Player2: 0</p>)}
          {games > 0 && (
            <p className="frame__score">
              {`Games: ${games}`}
            </p>
          )}
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
    </div>
  );
}

export default App;
