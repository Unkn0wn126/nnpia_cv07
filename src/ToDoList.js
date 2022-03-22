import { useState } from 'react';
import ToDoListItem from './ToDoListItem.js';

function ToDoList({toDoList}){
    const [todoListItems, setTodoListItems] = useState(toDoList);
    const deleteHandler = (todo) => {
        const filtered = toDoList.filter(item => item.id !== todo.id);
        console.log(todoListItems.length);
        setTodoListItems(filtered);
    }
    const listItems = todoListItems.map(x => <ToDoListItem key={x.id} toDo={x} deleteClickAction={deleteHandler} completedClickAction={deleteHandler}></ToDoListItem>);
    return (<div>{listItems}</div>);
}

export default ToDoList;