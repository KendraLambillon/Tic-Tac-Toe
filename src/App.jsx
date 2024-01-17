import { useState } from 'react'
import { Board } from './components/Board'
import { Turns } from './constants'
import { Square } from './components/Square'
import { checkWinner } from './logic/board'
import { WinnerModal } from './components/WinnerModal'

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(Turns.X) // initial value is X
  const [winner, setWinner] = useState(null)

  const updateBoard = (index) => {
    if (board[index] || winner) return

    const newTurn = turn === Turns.X ? Turns.O : Turns.X
    setTurn(newTurn)

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner)
    }
  }


  return (
    <main className="board">
      <h1>Tres en raya</h1>

      <Board board={board} updateBoard={updateBoard} />

    <section className="turn">
      <Square isSelected={turn === Turns.X}>{Turns.X}</Square>
      <Square isSelected={turn === Turns.O}>{Turns.O}</Square>
    </section>

    <WinnerModal winner={winner}/>
    </main>
  )
}

export default App
