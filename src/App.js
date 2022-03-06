import React, { useState } from 'react'
import './App.css';
import TodoApp from './todoapp';
import Usereducertut from './useReducer';
function App() {
const [model,handleModel]=useState(true);


const modelh=()=>{
  handleModel(!model);
}

  return (
 <>
 <button onClick={()=>{modelh()}}>Show To Do list</button>
{model?<TodoApp/>:<h1>No Model Shown</h1>}
 </>
  );
}

export default App;
