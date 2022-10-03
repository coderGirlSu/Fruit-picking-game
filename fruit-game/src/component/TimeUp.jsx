import { useGlobalState } from "../utils/stateContext"

const TimeUp = ()=>{
    const {store} =useGlobalState()
    const {score} = store
    return(
        <div className="timeUp-container">
            <img src="images/score1.png" alt="scoreboard" />
            <div className="timeUp">Time Up!</div>
            <div className="score">Score: </div>
            <div className="number">{score}</div>
        </div>
    )
}

export default TimeUp