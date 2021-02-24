import React,{useState} from "react";
import {calculateWinner} from "../helper";
import Board from "./Board";
import "../index.css";

const Game = ()=>{
     const[history , setHistory] = useState([Array(9).fill(null)]);
     console.log('history', history);
     const[stepNumber,setStepNumber] = useState(0);
    const[xIsNext , setXisNext] = useState(true);

    const winner = calculateWinner(history[stepNumber]);

    const xo = xIsNext ? "X" : "O";

    const handleClick = (i) =>{
          const historyPoint = history.slice(0, stepNumber+1);
          const current = historyPoint[stepNumber];
          const squares = [...current];

    //     // return won or occupied

        if(winner || squares[i]);

    //     // select squares

        squares[i] = xo;
         setHistory([...historyPoint,squares]);
         setStepNumber(historyPoint.length);
        setXisNext(!xIsNext)
     };

    const jumpTo =  (step) =>{
        setStepNumber(step);
        setXisNext(step % 2 === 0);
    };

    const renderMoves = () =>{
        history.map((_step,move)=>{
            const destination = move ? `Go to Move #${move}` : "Go to Start ";
            return(
                <li key={move}>
                    <button className="game" onClick={ ()=> jumpTo(move)}> {destination} </button>
                </li>
            );
        });
    }
    
    return (
        <>
            <h2>React Tic tac toe</h2>
             <Board squares={history[stepNumber]} onclick={handleClick} />
            <div className="info-wrapper">
                <div>
                    <h3>History</h3>
                    {renderMoves()}
                </div>
                <h3>{winner ? "Winner :" + winner : "Next Player : " + xo }</h3>
            </div> 
        </>
    );
};

export default Game;