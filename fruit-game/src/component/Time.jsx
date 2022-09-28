import { useGlobalState } from "../utils/stateContext"

const Time =()=>{
    const {store} =useGlobalState()
    const {time} = store
    
    return (
        <div className="time">
            <div className="timeLogo">⏳</div>
            <div className="timeBackground">
                <div className="timeNumber">{time}</div>
            </div>
        </div>
        
    )
}

export default Time