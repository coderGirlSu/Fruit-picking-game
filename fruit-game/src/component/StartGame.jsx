import { useGlobalState } from "../utils/stateContext"

const StartGame =()=>{
    const {store,dispatch} = useGlobalState()
    const {start} = store
    
function handleClick(){
    dispatch({
        type:'setStartGame', 
    })
}
    
    return (
        <div className="StartGame">
        <div onClick={handleClick}>START GAME</div>
        </div>
    )
}

export default StartGame