import React from "react"
export default function Header({score,highscore}){
    return(
        <>
        <div className="parent-header">
            <h2 className="memory-title">Memory Game 🚀</h2>
            <div className="score-board">
                    <h6>Current Score : {score}</h6>
                    <h6>Highest Score : {highscore}</h6>

            </div>
        
        </div>
        </>
    )
}