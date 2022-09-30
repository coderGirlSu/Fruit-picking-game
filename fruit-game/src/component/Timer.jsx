import { useGlobalState } from "../utils/stateContext"

const Timer =()=>{
    const {store} =useGlobalState()
    const {timer} = store


    
    
    return (
        <div className="timer">
            <div className="timeLogo">⏳</div>
            <div className="timeBackground">
                <div className="timeNumber">{timer}</div>
            </div>
        </div>
        
    )
}

export default Timer