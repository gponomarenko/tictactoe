import React, { useState } from 'react';
import './intro.css';

function Intro({ submitPlayers, name1, name2, setName1, setName2 }) {

  const handleChange1 = (e) => {
    setName1(e.target.value);
  };

  const handleChange2 = (e) => {
    setName2(e.target.value);
  };

  return (
    <>
      <form className="players" onSubmit={submitPlayers}>
        <label htmlFor="id-1st">
          <h3 className="players__title">Input 1st player&apos;s name:</h3>
        </label>
        <input
          className="players__input"
          type="text"
          name="name1"
          placeholder="1st player name"
          id="id-1st"
          value={name1}
          onChange={handleChange1}
        />
        <label htmlFor="id-2d">
          <h3 className="players__title">
            Input 2d player&apos;s name:
          </h3>
        </label>
        <input
          className="players__input"
          type="text"
          name="name2"
          id="id-2d"
          placeholder="2d player name"
          value={name2}
          onChange={handleChange2}
        />

        <button
          className="players__submit"
          type="submit"
          // name="submitPlayers"

        >
          Start game
        </button>
      </form>
    </>
  );
}

export default Intro;
