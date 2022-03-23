import './ToDoList.css'
import { useState, useEffect } from 'react';
import ToDoListItem from './ToDoListItem.js';

function ToDoList(){
    const [todoList, setTodoList] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchToDoList = () => {
          fetch('https://jsonplaceholder.typicode.com/todos')
          .then(response => response.json())
          .then(json => {
              const filteredList = json.filter(item => item.userId === 1);
              setTodoList(filteredList);
              setLoading(false);
            })
      }
      fetchToDoList();
    }, []);
  
    if(loading){
    return (<h3>Loading...</h3>);
    }

    const deleteHandler = (todo) => {
        const filtered = todoList.filter(item => item.id !== todo.id);
        setTodoList(filtered);
    }

    function addToList(event){
        event.preventDefault();
        const list = [...todoList];
        list.unshift({comleted: false, id: new Date().getTime(), userId: 1, title: event.target.todoName.value});
        setTodoList(list);
        event.target.todoName.value = "";
    }

    const listItems = todoList.map(x => <ToDoListItem key={x.id} toDo={x} completedClickAction={deleteHandler}></ToDoListItem>);

    return(
    <div className='wrapper'>
        <form className='input-form' onSubmit={addToList}>
            <input className='input-text' type="text" name='todoName'/>
            <button className='button-submit'>Submit</button>
        </form>
        <div>{listItems}</div>
    </div>
    );
}

export default ToDoList;