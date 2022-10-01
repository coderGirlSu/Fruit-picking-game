import Fruit from "./component/Fruit";
import {React,useReducer} from "react";
import reducer from "./utils/reducer";
import Score from "./component/Score";
import { StateContext } from "./utils/stateContext";
import Timer from "./component/Timer";
import StartGame from "./component/StartGame";
import TimeUp from "./component/TimeUp";
import WaterMark from "./component/WaterMark";



const initialState ={
  score:0,
  timer:5,
  start: false,
  showTimeUp:false
}

function App() {

  const[store, dispatch] = useReducer(reducer, initialState)
  


  return (
    <div id="app">
      <img id="tree" src="images/tree3.png" alt="tree" />
<StateContext.Provider value={{store,dispatch}}>
  { store.start && <><Fruit id="fruit1" />
      <Fruit id="fruit2" />
      <Fruit id="fruit3" />
      <Fruit id="fruit4" />
      <Fruit id="fruit5" />
      <Fruit id="fruit6" />
      <Fruit id="fruit7" />
      <Fruit id="fruit8" />
      <Fruit id="fruit9" />
      <Fruit id="fruit10" />
      <Fruit id="fruit11" />
      <Fruit id="fruit12" />
      <Fruit id="fruit13" />
      <Fruit id="fruit14" />
      <Fruit id="fruit15" />
      <Score />
      <Timer /> </>}
      { !store.start && <StartGame />}
      {store.showTimeUp && <TimeUp />}
  </StateContext.Provider>
    <WaterMark />
  
    </div>
  );
}

export default App;
