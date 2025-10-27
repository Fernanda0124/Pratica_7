
import { useState } from 'react'; 
import Square from './Square';

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6]           
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: [a, b, c] }; 
    }
  }
  return null; 
}

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true); 
  const [squares, setSquares] = useState(Array(9).fill(null)); 

  const result = calculateWinner(squares); 
  const winner = result ? result.winner : null; 
  const winningSquares = result ? result.line : []; 
  const isDraw = squares.every(Boolean) && !winner;
  
  function handleClick(i) {
    if (squares[i] || winner || isDraw) {
      return;
    }

    const nextSquares = squares.slice(); 

    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }

    setSquares(nextSquares);
    setXIsNext(!xIsNext); 
  }

  function handleReset() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }

  
  let status;
  if (winner) {
    status = `Vencedor: ${winner}`;
  } else if (isDraw) {
    status = `Empate!`; 
  } else {
    status = `Próximo jogador: ${xIsNext ? 'X' : 'O'}`;
  }


  const renderSquare = (i) => (
    <Square 
      key={i} 
      value={squares[i]} 
      onSquareClick={() => handleClick(i)}
      isWinning={winningSquares.includes(i)} 
    />
  );
  
  const renderRow = (startIndex) => (
    <div className="board-row" key={startIndex}>
      {renderSquare(startIndex)}
      {renderSquare(startIndex + 1)}
      {renderSquare(startIndex + 2)}
    </div>
  );

  return (
    <div className="game">
      <div className="status">{status}</div>

      {renderRow(0)}
      {renderRow(3)}
      {renderRow(6)}

      <button className="reset-button" onClick={handleReset}>
        Reiniciar Jogo
      </button>
    </div>
  );
}