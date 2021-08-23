import React from 'react';
import cn from 'classnames';
import Intro from '../Intro/Intro';
import './modal.css';

function Modal({ active, submitPlayers, name1, name2, setName1, setName2 }) {
  return (
    <div
      className={cn({
        modal: true,
        active: active === true,
        'non-active': !active,
      })}
    >
      <div
        className={cn({
          modal__content: true,
          active: active === true,
          'non-active': !active,
        })}
      >
        <Intro
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

export default Modal;
