import Fruit from "./component/Fruit";
import {React,useReducer} from "react";
import reducer from "./utils/scoreReducer";
import Score from "./component/Score";
import { StateContext } from "./utils/stateContext";
import Time from "./component/Time";
import StartGame from "./component/StartGame";



const initialState ={
  score:0,
  time:0
}

function App() {

  const[store, dispatch] = useReducer(reducer, initialState)
  


  return (
    <div>
      
      <img id="tree" src="images/tree3.png" alt="tree" />
<StateContext.Provider value={{store,dispatch}}>
      <Fruit id="fruit1" />
      <Fruit id="fruit2" />
      <Fruit id="fruit3" />
      <Fruit id="fruit4" />
      <Fruit id="fruit5" />
      <Fruit id="fruit6" />
      <Fruit id="fruit7" />
      <Fruit id="fruit8" />
      <Fruit id="fruit9" />
      <Fruit id="fruit10" />
      <Score />
      <Time />
      <StartGame />
  </StateContext.Provider>
  
    </div>
  );
}

export default App;
