import React from 'react';

const Cell = ({ value, onChange, readonly }) => (
  <input
    type="number"
    min="1"
    max="9"
    value={value}
    onChange={onChange}
    readOnly={readonly}
    className="cell"
  />
);

export default Cell;
