import { useEffect } from "react";
import {React,useState} from "react";
import { useGlobalState } from "../utils/stateContext";

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
        name: 'banana',
        emoji: '🍊'
    },
    {
        name: 'banana',
        emoji: '🍋'
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
        name: 'caterpillar',
        emoji: '🐛'
    },
    {
        name: 'caterpillar',
        emoji: '🐛'
    },
    {
        name: 'caterpillar',
        emoji: '🐛'
    },
    {
        name: 'spider',
        emoji: '🕷'
    },
    {
        name: 'spider',
        emoji: '🕷'
    },
    {
        name: 'spider',
        emoji: '🕷'
    },
    {
        name: 'poop',
        emoji: '🍐'
    },
    {
        name: 'poop',
        emoji: '🥭'
    },
    
]

const Fruit = (props) => {
    const { id } = props
    const {dispatch} = useGlobalState()

    const[isVisible,setVisible] = useState(true)
    const[randomFruit, setRandomFruit] = useState("")
    
    function handleClick(event){
        let randomTime = Math.floor(Math.random() * (3000 - 100) + 100)
        setVisible(false)
        setTimeout(()=>{
            setVisible(true)
        },randomTime)
 
        if (event) {
            if(event.target.innerText === '🕷'){
                let sound = new Audio("sounds/spider.wav")
                sound.play()
            }if (event.target.innerText === '🐛') {
                let sound = new Audio("sounds/mao.wav")
                sound.play()   
            } else{
            let sound = new Audio("sounds/pick2.mp3")
            sound.play()
            }
            

            dispatch({
                type:"updateScore",
                data: event.target.innerText
            })
        }
    }

  useEffect(()=>{
    setRandomFruit(InitialFruit[Math.floor(Math.random() * InitialFruit.length)].emoji)
    let randomTime = Math.floor(Math.random() * (24000 - 8000) + 8000)
    setInterval(()=>{
        handleClick()
        setRandomFruit(InitialFruit[Math.floor(Math.random() * InitialFruit.length)].emoji)
    },randomTime)
    console.log("hhh")
    // eslint-disable-next-line 
},[])  

    
   
    return (
        <div className="fruit" onClick={handleClick} id={id}> 
            {isVisible 
            && randomFruit}
            
        </div>
    )
}

export default Fruit