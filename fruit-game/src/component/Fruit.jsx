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
]






const Fruit = () =>{

    const[data,setData] = useState(InitialFruit)

    return (
        <div>
            {data.map((obj,index)=>{
                return (
                    <div key={index}> {obj.emoji}</div>
                )

            })}

        </div>

    )
}

export default Fruit