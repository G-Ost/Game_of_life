import './App.css';
import TileBoard from "./conteners/TileBoard"
import Button from "./components/Button"
import React, { useState, useReducer, useRef } from "react";


function boardGenerator(numberOfRows, numberOfColumns, spawnChancePercentage) {
  let board = [];
  for (let i = 0; i < numberOfRows; i++) {
    let row = [];
    for (let k = 0; k < numberOfColumns; k++) {
      let randomNumber = Math.random();
      if (spawnChancePercentage / 100 > randomNumber) {
        row.push("X")
      }
      else {
        row.push("0")
      }
    }
    board.push(row);
  }
  return board;
}



// const initialBoard = [
//   ["0", "0", "0", "0", "0", "0"],
//   ["0", "0", "0", "0", "0", "0"],
//   ["0", "0", "X", "X", "X", "0"],
//   ["0", "X", "X", "X", "0", "0"],
//   ["0", "0", "0", "0", "0", "0"],
//   ["0", "0", "0", "0", "0", "0"]
// ]

let initialBoard = boardGenerator(10, 10, 33);


const reducer = (state, action) => {
  switch (action.type) {
    case "newCycle":
      return action.callback(state);
    case "reset":
      return initialBoard;
    default:
      return state;
  }
}


function App() {
  console.log("rendered!")
  const [board, dispatch] = useReducer(reducer, initialBoard);
  const [buttonType, setButtonType] = useState("start")
  const intervalRef = useRef();


  const squareSize = window.innerHeight / (board.length * 1.3)

  const boardHorizontalPosition = window.innerWidth / 2 - board[0].length * squareSize / 2 + "px"
  const boardVerticalPosition = window.innerHeight / 2 - board.length * squareSize / 2 + "px";
  const buttonHorizontalPosition = board[0].length * squareSize / 2 - window.innerWidth / 10 + "px";
  const buttonVerticalPosition = window.innerHeight / 80 + "px";
  let boardWidth = board[0].length * squareSize + "px";
  let boardLength = board.length * squareSize + "px";

  function countNeighbours(chheckedRow, checkedColumn, givenBoard) {
    let numberOfNeighbours = 0;
    for (let i = -1; i < 2; i++) {
      if (givenBoard[chheckedRow + i] !== undefined) {
        for (let k = -1; k < 2; k++) {
          if (givenBoard[chheckedRow + i][checkedColumn + k] === "X") {
            numberOfNeighbours++;
          }
        }
      }
    }
    if (givenBoard[chheckedRow][checkedColumn] === "X") {
      numberOfNeighbours--;
    }
    return numberOfNeighbours;
  }


  function startNewCycle(givenBoard) {
    let newBoard = [];
    for (let i = 0; i < givenBoard.length; i++) {
      let newRow = [];
      for (let k = 0; k < givenBoard[0].length; k++) {
        let numberOfNeighbours = countNeighbours(i, k, givenBoard);
        if (
          (givenBoard[i][k] === "X" && (numberOfNeighbours === 2 || numberOfNeighbours === 3))
          ||
          (givenBoard[i][k] !== "X" && numberOfNeighbours === 3)) {
          newRow.push("X");
        }
        else {
          newRow.push("0");
        }

      }
      newBoard.push(newRow);
    }

    return newBoard;
  }

  function onClickFunction(actionType) {
    switch (actionType) {
      case "start":
        intervalRef.current = setInterval(() => { dispatch({ type: "newCycle", callback: startNewCycle }) }, 500)
        setButtonType("stop")
        return;
      case "stop":
        clearInterval(intervalRef.current);
        setButtonType("start")
        return;
      case "reset":
        clearInterval(intervalRef.current);
        initialBoard = boardGenerator(10, 10, 33);
        dispatch({ type: "reset" })
        setButtonType("start")
        return;
      default:
        return;
    }
  }


  return (
    <div className="app" style={{ left: boardHorizontalPosition, top: boardVerticalPosition }}>
      <TileBoard squareSize={squareSize} board={board} style={{ width: boardWidth, length: boardLength }}> </TileBoard>
      <Button buttonType={buttonType} left={buttonHorizontalPosition} top={buttonVerticalPosition} onClickFunction={onClickFunction} width={window.innerWidth / 10} height={window.innerHeight / 14} fontSize={window.innerHeight / 20}></Button>
      <Button buttonType={"reset"} left={buttonHorizontalPosition} top={buttonVerticalPosition} onClickFunction={onClickFunction} width={window.innerWidth / 10} height={window.innerHeight / 14} fontSize={window.innerHeight / 20}></Button>
    </div >
  );
}

export default App;
