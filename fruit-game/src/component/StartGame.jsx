import { useGlobalState } from "../utils/stateContext"

const StartGame =()=>{
    const {dispatch} = useGlobalState()
    
    

    function updateTimer(){
        dispatch({
            type:"updateTimer",
        })
    }

    function handleClick(){
        let myInterval = setInterval(updateTimer,1000)
      
        dispatch({ 
            type:'setStartGame',
            data: myInterval
        })
       
    }
    
    return (
        <div className="StartGame">
        <div onClick={handleClick}>START GAME</div>
        </div>
    )
}

export default StartGame