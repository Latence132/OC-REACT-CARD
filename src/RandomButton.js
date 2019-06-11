import React from "react";
var seconds = new Date().getSeconds()
var won = seconds % 2 === 0
const className = won ? "green ui button" : "red ui button";
function play(seconds, won) {
    seconds = new Date().getSeconds()
    won = seconds % 2 === 0
    console.log(won, seconds)
}
const RandomButton = () => (

    < button className={className} onClick={play(seconds, won)}> {won ? <p>GAGNÉ !</p> : <p>PERDU !</p>}</button >
)
export default RandomButton