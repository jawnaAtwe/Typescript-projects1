import './App.scss';
import React, { useState } from 'react';

function App() {
  const [rowPrev, setRowPrev] = useState(-1);
  const [colPrev, setColPrev] = useState(-1);
  const [array, setArray] = useState([
    [
      [1, false],
      [2, false],
      [3, false],
      [4, false]
    ],
    [
      [4, false],
      [5, false],
      [3, false],
      [2, false]
    ],
    [
      [1, false],
      [5, false],
      [6, false],
      [6, false]
    ],
    [
      [7, false],
      [8, false],
      [7, false],
      [8, false]
    ]
  ]);

  const handleClick = (row: number, col: number) => {
    const newArray: any[][] = new Array(array[0].length)
      .fill([0, false])
      .map(() => new Array(array[0].length).fill([0, false]));

    newArray.map((item1, row) =>
      item1.map((item, col) => {
        newArray[row][col] = array[row][col];
      })
    );
    newArray[row][col][1] = true;
    setArray(newArray);

    if (rowPrev === -1 && colPrev === -1) {
      newArray[row][col][1] = true;
      setArray(newArray);
      setRowPrev(row);
      setColPrev(col);
    } else {
      if (array[row][col][0] == array[rowPrev][colPrev][0]) {
        newArray[row][col][1] = true;
        setArray(newArray);
        setRowPrev(-1);
        setColPrev(-1);
      } else {
        setTimeout(() => {
          newArray[rowPrev][colPrev][1] = false;
          newArray[row][col][1] = false;
          setArray(newArray);
          setRowPrev(-1);
          setColPrev(-1);
        }, 500);
      }
    }
  };

  return (
    <div className="main">
      {array.map((item1, row) =>
        item1.map((item, col) => (
          <div
            key={`${row}-${col}`}
            className={`item ${array[row][col][1] ? 'open' : ''}`}
            onClick={() => handleClick(row, col)}>
            <div className={`cardValue ${array[row][col][1] ? 'open' : ''}`}>{item[0]}</div>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
