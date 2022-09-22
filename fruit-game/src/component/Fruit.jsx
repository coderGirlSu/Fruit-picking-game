import React from "react";

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
]




const Fruit = () =>{

    // const[data,setData] = useState(InitialFruit)

    let fruit = InitialFruit[Math.floor(Math.random() * InitialFruit.length)].emoji
    
    return (
        <div>{fruit} </div>

    )
}

export default Fruit