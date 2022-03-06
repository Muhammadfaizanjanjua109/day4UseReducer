import React, { useReducer, useState } from 'react'

function TodoApp() {
    const reducer=(todos,action)=>{
        if (action.type==='ADD')
        {
                return[...todos,functodo(action.payload.name)]
        }
        return todos
    }
    const functodo=(namea)=>{
      return{  id:Date.now(),
        name:namea}
    }
    const [name,setname]=useState('')
     const [todos,dispatch]=useReducer(reducer,[]);
    const handleSubmit =(e)=>{
e.preventDefault();
dispatch({type:'ADD',payload:{name:name}})
    }
    return (
       <>
        <form onSubmit={(e)=>{handleSubmit(e)}}>
            <input type='text' value={name} name='name' onChange={(e)=>{setname(e.target.value)}}/>
        </form>


        <div>
            <ol>
                <li>
                    {todos.map((todo)=>{
                        return<>{todo.name}</>
                    })}
                </li>
            </ol>
        </div>
       </>
        
    )
}

export default TodoApp