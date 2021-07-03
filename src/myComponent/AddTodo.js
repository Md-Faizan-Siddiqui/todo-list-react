import React, {useState} from 'react'
import '../App.css'
 

export const AddTodo = (props) => {
    const [todo, setTodo] = useState('');

    const submit = (e)=>{
        e.preventDefault();
        // if(!todo){
        //     alert('Peleas Enter Task..')
            
        // }else{
            
        // }
        props.addTodo(todo);
            setTodo('')
    }
    return (
        <div className='container'>
            <div className='main'>
            <form action="" onSubmit={submit}>
                <div className="add-todo-div">
                <h2>Add ATodo</h2>
                <input type="text" id='addTodo' value={todo} onChange={(e)=>setTodo(e.target.value)} placeholder='Enter Todo' required/>
                <div><button>Add Todo</button></div>
                </div>
            </form>
            </div>
        </div>
    )
}
