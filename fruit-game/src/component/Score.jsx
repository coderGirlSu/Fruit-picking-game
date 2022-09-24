import { useGlobalState } from "../utils/stateContext"

const Score =()=>{
    const {store, dispatch} =useGlobalState()
    const {score} = store
    
    return (
        <div>
        {score}
        </div>
    )
}

export default Score