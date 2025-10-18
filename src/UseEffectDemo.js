import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  // 1️ : Run once (on mount)
  useEffect(() => {
    console.log("App mounted");
  }, []);

  // 2️ : Run when dependency changes
  useEffect(() => {
    console.log("Count changed", count);
  }, [count]);

  // 3️ : Run on every render
  useEffect(() => {
    console.log("Component re-rendered");
  });

  return (
    <>
   
   
      <h2>useEffect Program</h2>

      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>


      <input
        type="text"
        placeholder="Type something"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>You typed: {text}</p>
  
     </>
  );
}

export default App;
