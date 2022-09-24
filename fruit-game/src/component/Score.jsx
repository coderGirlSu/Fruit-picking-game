import { useGlobalState } from "../utils/stateContext"

const Score =()=>{
    const {store} =useGlobalState()
    const {score} = store
    
    return (
        <div>
        {score}
        </div>
    )
}

export default Score