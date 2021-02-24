import React from "react";
import Square from "./Square";
import "../index.css";

const Board = ({squares,onclick}) =>{

    return (
        <div className="board">
            {squares.map((square , i) => (
                
                <Square  key={i} value={square} onclick={ () => onclick(i) } />
            ))}
        </div>
    )
    
}

export default Board;