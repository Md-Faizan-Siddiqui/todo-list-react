import React from 'react'
import { TodoList } from './TodoList'
import '../App.css'


export const Todos = (props) => {
    console.log(props)
    return (
        <div className='container'>
            <div>
            <h2>Todos</h2>
            {props.todos.length === 0 ? 'No items to display' :
                props.todos.map((todo,index) => {   
                    return (
                        <div key={`index = ${index}`}>
                        <TodoList todo={todo} onDelete={props.onDelete} />
                        </div>
                        )          
                    })
                }
            </div>
        </div>
    )
}

