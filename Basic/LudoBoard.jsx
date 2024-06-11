import { useState } from "react";

export default function LudoBoard(){
    let[moves, setMoves]=useState({blue:0,yellow:0,green:0,red:0})
    let updatedBlue = () =>{
        console.log(`moves.blue = ${moves.blue}`);
        setMoves({ ...moves, blue:moves.blue + 1})

    }
    let updatedYellow = () =>{
        console.log(`moves.yellow = ${moves.yellow}`);
        setMoves({ ...moves, yellow:moves.yellow + 1})

    }
    let updatedGreen = () =>{
        console.log(`moves.green = ${moves.green}`);
        setMoves({ ...moves, green:moves.green + 1})

    }
    let updatedRed = () =>{
        console.log(`moves.red = ${moves.red}`);
        setMoves({ ...moves, red:moves.red + 1})

    }
    return(
        <div>
        <p>Game Begins</p>
        <div className="board">
        <p>Blue moves={moves.blue}</p>
        <button style={{backgroundColor:"blue"}} onClick={updatedBlue}>+1</button>
        <p>Yellow moves={moves.yellow} </p>
        <button style={{backgroundColor:"yellow",color:"black"}} onClick={updatedYellow}>+1</button>
        <p>Green moves={moves.green}</p>
        <button style={{backgroundColor:"green"}} onClick={updatedGreen}>+1</button>
        <p>Red moves={moves.red} </p>
        <button style={{backgroundColor:"red"}} onClick={updatedRed}>+1</button>
        </div>
        </div>
    )
}