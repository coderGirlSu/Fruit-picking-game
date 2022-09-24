import Fruit from "./component/Fruit";


function App() {



  return (
    <div>
      <img id="tree" src="images/tree.png" alt="tree" />

      <Fruit top={150} left={150} />
      <Fruit />
      <Fruit />
      <Fruit />
      <Fruit />
      <Fruit />
      <Fruit />
      <Fruit />
      <Fruit />
      <Fruit />
    </div>
  );
}

export default App;
