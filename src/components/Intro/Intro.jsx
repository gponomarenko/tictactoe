import React from 'react';
import './intro.css';
import PT from 'prop-types';

export const Intro = ({ submitPlayers, name1, name2, setName1, setName2 }) => {
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
          required
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
          required
        />

        <button
          className="players__submit"
          type="submit"
          name="submitPlayers"
        >
          Start game
        </button>
      </form>
    </>
  );
};

Intro.propTypes = {
  submitPlayers: PT.func.isRequired,
  name1: PT.string.isRequired,
  name2: PT.string.isRequired,
  setName1: PT.func.isRequired,
  setName2: PT.func.isRequired,
};
