/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import '../../App.css';
import './field.css';
import cn from 'classnames';

function Field({ value, chooseField }) {
  return (
    <div
      className={
        cn({
          field: true,
          grid: true,
          x: value === 'X',
          o: value === 'O',
        })
      }
      onClick={chooseField}
    />
  );
}

export default Field;
