import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoField from './components/TodoField'
import Todos from './components/Todos'

function App() {

  const [todos, setTodods] = useState([
    {
      id: 1,
      title: 'Book reading',
      status:false
    },
    {
      id: 2,
      title: 'Coding',
      status:true
    },
  ]);
  function addTodo(title){
    var newList=[...todos,{
      id:Math.floor(Math.random()*10000),
      title:title,
      status:false
    }];
    setTodods(newList);
  }
 function setStatusTrue(id){
  console.log(id+"sadas")
   var newList=todos.filter((todo,index)=>{
      if(todo.id==id){
        todo.status=true
      }
      return todo;
    });
    setTodods(newList);
  }
  function deleteTodo(id){
    let newList=todos.filter(todo=>{
      if(todo.id!==id){
        return todo;
      }
    });
    setTodods(newList);
  }
  return (
    <>
      <div className="div">
        <h1>todos</h1>
        <TodoField addTodo={addTodo}></TodoField>
        <Todos setStatusTrue={setStatusTrue} deleteTodo={deleteTodo} todos={todos}></Todos>
      </div>
    </>
  )
}

export default App
