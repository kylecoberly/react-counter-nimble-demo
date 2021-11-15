import './App.css';
import { useState } from "react"
import CountDisplay from "./CountDisplay"
import ButtonAction from "./ButtonAction"

function App() {
  const [ count, setCount ] = useState(0)

  const handleClick = event => {
    setCount(count + 1)
  }

  return (
    <div className="App">
      <h1>Hello, Nimble!</h1>
      <CountDisplay count={count} />
      <ButtonAction label="Increment" actionHandler={handleClick} />
    </div>
  );
}

export default App;
