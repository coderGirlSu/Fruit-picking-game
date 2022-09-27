export default function reducer(state,action){
    switch(action.type){
        case 'updateScore':{
            let newScore
            if (action.data === '🐛'){
                newScore = state.score - 50
            }else{
                newScore = state.score + 10
            }
            return {
                ...state,
                score: newScore
            }
        }
        
    
    default: return state
    }   
}