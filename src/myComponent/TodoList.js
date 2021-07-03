import React from 'react'
import '../App.css'


export const TodoList = (props) => {
    console.log(props)
    return (

        <div className='container'>
            <div className='card'>
          <p>{props.todo.desc}</p>
          <br />
          <button onClick={()=>{props.onDelete(props.todo)}} className='dlt-btn'>Delete</button>
            </div>
        </div>
    )
}
