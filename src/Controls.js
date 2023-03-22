import React from 'react';

const Controls = ({ onCheck }) => (
  <div className="controls">
    <button onClick={onCheck}>Check answers</button>
  </div>
);

export default Controls;
