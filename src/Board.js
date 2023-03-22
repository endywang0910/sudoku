import React from 'react';
import Cell from './Cell';

const Board = ({ board, onChange, readonly }) => {
  const handleChange = (row, col) => (e) => {
    onChange(row, col, parseInt(e.target.value));
  };

  return (
    <div className="board">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((value, colIndex) => (
            <Cell
              key={colIndex}
              value={value || ''}
              onChange={handleChange(rowIndex, colIndex)}
              readonly={readonly[rowIndex][colIndex]}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
