
import { useGlobalState } from "../utils/stateContext"
const StartGame =()=>{
    const {store} =useGlobalState()
    const {time} = store
    
function handleClick(){
    
}
    
    return (
        <div className="StartGame">
        <div onClick={handleClick}>START GAME</div>
        </div>
    )
}

export default StartGame