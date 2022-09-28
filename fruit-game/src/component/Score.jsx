import { useGlobalState } from "../utils/stateContext"

const Score =()=>{
    const {store} =useGlobalState()
    const {score} = store
    
    return (
        <div className="score">
            <div className="scoreLogo">🍊</div>
            <div className="scoreBackground">  
                <div className="scoreNumber">{score}</div>
            </div>
        </div>
    )
}

export default Score