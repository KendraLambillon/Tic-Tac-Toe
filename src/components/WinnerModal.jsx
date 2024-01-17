import { Square } from "./Square";

export function WinnerModal({ winner }) {
    if (winner === null) return null

    const winnerText = winner === false ? 'Tie' : 'Winner is: '

    return(
        <section className="winner">
            <div className="text">
                <h2>{winnerText}</h2>

                <header className="win">
                    {winner && <Square>{winner}</Square>}
                </header>

                <footer>
                    <button>Restart game</button>
                </footer>
            </div>
        </section>
    )
}