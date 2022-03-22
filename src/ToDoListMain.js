import { useState, useEffect } from "react";
import ToDoList from "./ToDoList";

function ToDoListMain({initialTodoList}){
    const[todoList, setTodoList] = useState(initialTodoList);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      function fetchToDoList(){
          fetch('https://jsonplaceholder.typicode.com/todos')
          .then(response => response.json())
          .then(json => {setTodoList(json); setLoading(false);})
          console.log(todoList);
      }
      fetchToDoList();
  }, []);
  
  if(loading){
    return "<h3>Loading</h3>";
  }

    return (<ToDoList toDoList={todoList}></ToDoList>);
}



export default ToDoListMain;