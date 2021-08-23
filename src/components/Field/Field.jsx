import React from 'react';
import '../../App.css';

function Field({ value, chooseField }) {
  return (
    <div className="field" onClick={chooseField}>
      {value}
    </div>
  );
}

export default Field;
