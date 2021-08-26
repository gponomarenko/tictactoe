import React from 'react';
import './combis.css';
import cn from 'classnames';
import PT from 'prop-types';

export const Combis = ({ winStyle }) => {

  return (
    <>
      <div className={cn({
        winline: true,
      }, winStyle)}
      />
    </>
  );
};

Combis.propTypes = {
  winStyle: PT.string.isRequired,
};
