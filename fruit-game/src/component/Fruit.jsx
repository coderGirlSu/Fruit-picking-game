import {React,useState} from "react";

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
        let randomTime = Math.floor(Math.random() * (4000 - 500) + 500)
        setVisible(false)
        setTimeout(()=>{
            setVisible(true)
        },randomTime)
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