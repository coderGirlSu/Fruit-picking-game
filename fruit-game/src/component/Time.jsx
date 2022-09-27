import { useGlobalState } from "../utils/stateContext"

const Time =()=>{
    const {store} =useGlobalState()
    const {time} = store
    
    return (
        <div className="time">
        {time}
        </div>
    )
}

export default Time