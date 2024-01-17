import { Square } from "./Square"

export function Board({board, updateBoard}) {
    return(
        <section className="game">
        {
            board.map((_, index)=> { //renderise the array, starting with the first position
                return(
                    <Square
                        key={index}
                        index={index}
                        updateBoard={updateBoard}
                    >
                        {board[index]}
                    </Square>
                )
            })
        }
        </section>
    )
}