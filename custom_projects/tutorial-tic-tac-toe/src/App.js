import { useState } from "react"

function Square({ value, onSequareClick }) {
  return <button
    className="square"
    onClick={onSequareClick}
  >
    {value}
  </button>;
}

// 定义了一个名为 Square 的函数。JavaScript 的 export 关键字使此函数可以在此文件之外访问。
// default 关键字表明它是文件中的主要函数。
export default function Board() {
  const [sequares, setSequares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(i) {
    if (sequares[i] || calculateWinner(sequares)) {
      return;
    }

    const nextSequares = sequares.slice();
    if (xIsNext) {
      nextSequares[i] = "X"
    } else {
      nextSequares[i] = "O"
    }
    setSequares(nextSequares);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(sequares);
  let status;
  if (winner) {
    status = 'Winter:' + winner
  } else {
    status = 'Next player:' + (xIsNext ? 'X' : 'O');
  }


  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={sequares[0]} onSequareClick={() => handleClick(0)} />
        <Square value={sequares[1]} onSequareClick={() => handleClick(1)} />
        <Square value={sequares[2]} onSequareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={sequares[3]} onSequareClick={() => handleClick(3)} />
        <Square value={sequares[4]} onSequareClick={() => handleClick(4)} />
        <Square value={sequares[5]} onSequareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={sequares[6]} onSequareClick={() => handleClick(6)} />
        <Square value={sequares[7]} onSequareClick={() => handleClick(7)} />
        <Square value={sequares[8]} onSequareClick={() => handleClick(8)} />
      </div>
    </>
  )
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}