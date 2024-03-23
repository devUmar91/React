import React, { useState } from "react";
import CrossIcon from "../assets/cross.png";
import CircleIcon from "../assets/circle.png";

import "./ticTacToe.css";

function ticTacToe() {
  let data = [Array(9).fill(null)];
  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);

  const toggle = (e, num) => {
    if (lock) {
      return 0;
    }

    if (count % 2 === 0) {
      e.target.innerHTML = `<img src="${CrossIcon}" style="scale:0.6 " >`;
      data[num]="x";

      // console.log(num);
      // console.log(data[num]);
      // console.log("working");


      setCount((prev)=>prev+1);
      // checkWin()
    } else {
      e.target.innerHTML = `<img src="${CircleIcon}" style="scale:0.6 " >`;
      data[num] = "o";
      setCount(++count);
    }
      checkWin();
  }  
// console.log(data);
const checkWin = () => {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let combination of winningCombinations) {
    const [a, b, c] = combination;
    if (data[a] && data[a] === data[b] && data[a] === data[c]) {
      console.log("won");
      won(data[a]);
      return;
    }
  }

  if (count === 9) {
    console.log("draw");
    setLock(true);
  }
};

    // checkWin()

    const won = (winner) => {
      console.log("winn");
      setLock(true);
      console.log(winner);
    };

    return (
      <div className="container">
        <h1 className="title">Tic Tac Toe</h1>
        <div className="board">
          <div className="row1">
            <div className="boxes" onClick={(e) => toggle(e, 0)}></div>
            <div className="boxes" onClick={(e) => toggle(e, 1)}></div>
            <div className="boxes" onClick={(e) => toggle(e, 2)}></div>
          </div>
          <div className="row2">
            <div className="boxes" onClick={(e) => toggle(e, 3)}></div>
            <div className="boxes" onClick={(e) => toggle(e, 4)}></div>
            <div className="boxes" onClick={(e) => toggle(e, 5)}></div>
          </div>
          <div className="row3">
            <div className="boxes" onClick={(e) => toggle(e, 6)}></div>
            <div className="boxes" onClick={(e) => toggle(e, 7)}></div>
            <div className="boxes" onClick={(e) => toggle(e, 8)}></div>
          </div>
        </div>
        <button className="reset">Reset</button>
      </div>
    );
  };

export default ticTacToe;
