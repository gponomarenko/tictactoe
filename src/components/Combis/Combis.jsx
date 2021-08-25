import React from 'react';
import './combis.css';
import cn from 'classnames';
import PT from 'prop-types';

export const Combis = ({ winStyle }) => {

  return (
    <>
      <div className={cn({
        winline: winStyle && winStyle !== 'cs-0',
        winStyle,
      })}
      />
    </>
  );
};

Combis.propTypes = {
  winStyle: PT.string.isRequired,
};
