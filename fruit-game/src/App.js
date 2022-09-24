import Fruit from "./component/Fruit";
import {React,useReducer} from "react";
import reducer from "./utils/scoreReducer";
import Score from "./component/Score";



const initialState ={
  score:0
}

function App() {
  const[store, dispatch] = useReducer(reducer, initialState)
  


  return (
    <div>
      <img id="tree" src="images/tree.png" alt="tree" />

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
      <Score store={store}/>
    </div>
  );
}

export default App;
