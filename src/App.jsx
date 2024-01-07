import { useState } from "react";
import "./App.css";
import Calculator from "./page/Calculator";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Calculator />
    </>
  );
}

export default App;
