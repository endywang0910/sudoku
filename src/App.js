import React, { useState } from 'react';
import Board from './Board';
import Controls from './Controls';
import './App.css';

const startingBoard = [
  [null, null, null, 2, 6, null, 7, null, 1],
  [6, 8, null, null, 7, null, null, 9, null],
  [1, 9, null, null, null, 4, 5, null, null],
  [8, 2, null, 1, null, null, null, 4, null],
  [null, null, 4, 6, null, 2, 9, null, null],
  [null, 5, null, null, null, 3, null, 2, 8],
  [null, null, 9, 3, null, null, null, 7, 4],
  [null, 4, null, null, 5, null, null, 3, 6],
  [7, null, 3, null, 1, 8, null, null, null],
];

const answerBoard = [
  [4, 3, 5, 2, 6, 9, 7, 8, 1],
  [6, 8, 2, 5, 7, 1, 4, 9, 3],
  [1, 9, 7, 8, 3, 4, 5, 6, 2],
  [8, 2, 6, 1, 9, 5, 3, 4, 7],
  [3, 7, 4, 6, 8, 2, 9, 1, 5],
  [9, 5, 1, 7, 4, 3, 6, 2, 8],
  [5, 1, 9, 3, 2, 6, 8, 7, 4],
  [2, 4, 8, 9, 5, 7, 1, 3, 6],
  [7, 6, 3, 4, 1, 8, 2, 5, 9],
];

const hasDuplicates = (arr) => {
  const values = arr.filter((val) => val !== null);
  return new Set(values).size !== values.length;
};

const App = () => {
  const [board, setBoard] = useState(startingBoard);
  const [message, setMessage] = useState('');

  const isBoardComplete = () => {
    for (let row of board) {
      if (row.includes(null)) {
        return false;
      }
    }
    return true;
  };

  const hasErrors = () => {
    // Check rows
    for (let row of board) {
      if (hasDuplicates(row)) {
        return true;
      }
    }

    // Check columns
    for (let col = 0; col < 9; col++) {
      const column = board.map((row) => row[col]);
      if (hasDuplicates(column)) {
        return true;
      }
    }

    // Check subgrids
    for (let row = 0; row < 9; row += 3) {
      for (let col = 0; col < 9; col += 3) {
        const subgrid = [];
        for (let r = row; r < row + 3; r++) {
          for (let c = col; c < col + 3; c++) {
            subgrid.push(board[r][c]);
          }
        }
        if (hasDuplicates(subgrid)) {
          return true;
        }
      }
    }

    return false;
  };

  const checkAnswers = () => {
    if (isBoardComplete()) {
      if (hasErrors()) {
        setMessage('There are errors on the board.');
      } else {
        setMessage('Completed!');
      }
    } else {
      if (hasErrors()) {
        setMessage('There are errors on the board.');
      } else {
        setMessage('');
      }
    }
  };

  return (
    <div className="app">
      <Board board={board} setBoard={setBoard} />
      <Controls checkAnswers={checkAnswers} />
      <div className="message">{message}</div>
    </div>
  );
};

export default App;
