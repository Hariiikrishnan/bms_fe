import React, { useState } from "react";

function App() {
  // Counter demo
  const [count, setCount] = useState(0);

  // Welcome printer demo
  const [name, setName] = useState("");

  // Toggler demo
  const [show, setShow] = useState(true);

  // Todo list demo
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
   
      setTodos([...todos, todo]);
      setTodo("");
    
  };

  return (
  
<>
      <h2>Counter Program</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>

   


      <h2>Welcome Printer Program</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h3>Welcome {name}</h3>

    

     
      <h2>Toggler Program</h2>
      <button onClick={() => setShow(!show)}>
       Toggle 
      </button>
      {show && <p>Hellooooo Tigerr</p>}

  

  
      <h2>Todo List Program</h2>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>

      <ul>
        {todos.map((t) => (
          <li>{t}</li>
        ))}
      </ul>
  </>
  );
}

export default App;
