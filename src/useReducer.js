import React, { useReducer, useState } from "react";

// const test=[
//     {
//     name:'faizan',
//     },
//     {
//     name:'adnan',
//     }

// ]
function Usereducertut() {
  const [name, setname] = useState("");

  const reducer = (todos, action) => {
    if (action.type === "ADD") {
      return [...todos, addfun(action.payload.name)];
    }
    return todos;
  };

  const addfun = (namea) => {
    return {
      id: Date.now(),
      name: namea,
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD",
      payload: {
        name: name,
      }
    });
  };

  const [todos, dispatch] = useReducer(reducer, []);
  return (
    <div className="maindiv">
      <div className="divborder">
        <h1> To Do App </h1>
        <div>
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <input type="text" name='name' value={name} onChange={e=>{setname(e.target.value)}} />
          </form>
          <button className="buttona"> Delete </button>
          <button className="buttona"> Update </button>
        </div>
        <ol> <li>{(todos.map((todo)=>{
            return(<h1>{todo.name}</h1>)
        }))}</li>  </ol>
      </div>
    </div>
  );
}

export default Usereducertut;
