import './App.css';
import Navbar from './myComponent/Navbar';
// import { Footer } from "./myComponent/Footer";
import { Todos } from "./myComponent/Todos";
import { AddTodo } from "./myComponent/AddTodo";
import { useState } from 'react';
// import {Test} from "./myComponent/Test";

function App() {
  const [todoItems, setTodoItems] = useState([])
  const onDelete = (todo) => {
    console.log('onDelete', todo);

    setTodoItems(todoItems.filter((e) => {
      return e !== todo;
    }))
  }

  const addTodo =(todo)=>{
    console.log('addTodo', todo)
    const newTodo ={
      desc : todo
    }
    setTodoItems(prev => [...prev, newTodo])
  }
  console.log("todoItems",todoItems)




  return (
    <>
      
      <Navbar title='Todo List' />
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todoItems} onDelete={onDelete} />
      {/* <Footer /> */}
      {/* <Test/> */}
    </>
  );
}

export default App;
