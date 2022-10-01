export default function reducer(state,action){
    switch(action.type){
        case 'updateScore':{
            let newScore
            if (action.data === '🐛' || action.data === '🕷' ){
                newScore = state.score - 50
            }else{
                newScore = state.score + 10
            }
            return {
                ...state,
                score: newScore
            }
        }case 'setStartGame':{

            return{
                ...state,
                start:true,
                timer:30,
                score:0,
                interval:action.data
            }
        }case 'updateTimer':{
            let countdown = state.timer -1 
            if(state.timer < 1){
                clearInterval(state.interval)
                return{
                    ...state,
                    showTimeUp:true,
                    start: false,
                }
            }else{
                return{
                    ...state,
                    timer: countdown
                }

            }
            
          
        }
        
    
    default: return state
    }   
}


