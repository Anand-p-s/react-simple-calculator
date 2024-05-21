import { useRef, useState } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(null);

  const add = (e) => {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  };

  const sub = (e) => {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  };

  const mul = (e) => {
    e.preventDefault();
    setResult((result) => result == null? Number(inputRef.current.value) : result * Number(inputRef.current.value));
  };

  const div = (e) => {
    e.preventDefault();
    setResult((result) => result == null? Number(inputRef.current.value) : result / Number(inputRef.current.value));
  };

  const resetInput = (e) => {
    e.preventDefault();
    inputRef.current.value = null;
  }

  const resetResult = (e) => {
    e.preventDefault();
    setResult(null);
  }

  return (
    <div>
      <h1>Simplest Working Calculator</h1>

      <form>
        <p ref={resultRef}>{result}</p>

        <input ref={inputRef} type="number" />
        <br />
        <button onClick={add}>Add</button>
        <button onClick={sub}>Subtract</button>
        <button onClick={mul}>Multiply</button>
        <button onClick={div}>Divide</button>
        <button className="reset" onClick={resetInput}>reset input</button>
        <button className="reset" onClick={resetResult}>reset result</button>
      </form>
    </div>
  );
}

export default App;
