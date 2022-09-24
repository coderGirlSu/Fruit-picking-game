import React,{useState} from "react";

const InitialFruit = [
    {
        name: 'apple',
        emoji: '🍎'
    },
    {
        name: 'cherry',
        emoji: '🍒'
    },
    {
        name: 'grapes',
        emoji: '🍇'
    },
    {
        name: 'peach',
        emoji: '🍑'
    },
    {
        name: 'blueberry',
        emoji: '🫐'
    },
    {
        name: 'avocado',
        emoji: '🥑'
    },
    {
        name: 'banana',
        emoji: '🍌'
    },
    {
        name: 'banana',
        emoji: '🍍'
    },
    {
        name: 'banana',
        emoji: '🥥'
    },
    {
        name: 'banana',
        emoji: '🥝'
    },
    {
        name: 'banana',
        emoji: '🍋'
    },
    {
        name: 'banana',
        emoji: '🍉'
    },
    {
        name: 'banana',
        emoji: '🍏'
    },
    {
        name: 'banana',
        emoji: '🍓'
    },
    {
        name: 'poop',
        emoji: '🕷'
    },
    
]

const Fruit = () =>{

    const[isVisible,setVisible] = useState(true)
    

    function handleClick(){
        setVisible(false)
        setTimeout(()=>{
            setVisible(true)
        },1000)
    }


    let randomFruit = InitialFruit[Math.floor(Math.random() * InitialFruit.length)].emoji
    
    return (
       
        <div>
        {
        isVisible && 
        <div onClick={handleClick}> 
        {randomFruit}
        </div>
        }

    </div>
        
      
    )
}

export default Fruit