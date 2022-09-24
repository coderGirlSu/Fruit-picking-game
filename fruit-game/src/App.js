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
<>
    <Fruit />
    <Fruit />
    <Fruit />
    <Fruit />
    <Fruit />
    <Fruit />
    <Fruit />
    <Fruit />
    <Fruit />
    <Fruit />
    <Score store={store}/>
  </>
  );
}

export default App;
