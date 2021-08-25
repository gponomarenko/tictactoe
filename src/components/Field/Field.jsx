/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import './field.css';
import cn from 'classnames';
import PT from 'prop-types';

export const Field = ({ value, chooseField }) => {
  return (
    <div
      className={
        cn({
          field: true,
          'o-style': value === 'O',
          'x-style': value === 'X',
        })
      }
      onClick={chooseField}
    />
  );
};

Field.propTypes = {
  value: PT.string.isRequired,
  chooseField: PT.func.isRequired,
};
