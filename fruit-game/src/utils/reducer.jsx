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
            let newState = { // update store
                ...state,
                start:true,
                timer:30,
                score:0,
                interval:action.data, // show in the store when first time click on start game button
            }

            if( !state.birdSound){
                let birdSound = new Audio("music/birds.mp3")
                birdSound.play()
                birdSound.loop = true
                birdSound.volume = 0.1

                newState.birdSound = birdSound // show in the store when first time click on start game button
            } 

            if(state.bananaSounds.length === 0){
                let bananaSound = new Audio("music/banana.mp3")
                bananaSound.play()
                bananaSound.volume = 0.1

                newState.bananaSounds.push(bananaSound)
            }
            if(state.showTimeUp){
                newState.showTimeUp = false
            }
            return newState

        }case 'updateTimer':{
            let countdown = state.timer -1 
            if(state.timer < 1){
                clearInterval(state.interval)
                state.bananaSounds.forEach((e) => {
                    e.pause() // when timer stop, pause all banana sounds
                })
                state.bananaSounds = [] 
                
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


