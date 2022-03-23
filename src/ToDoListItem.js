import './ToDoListItem.css'

function ToDoListItem({toDo, completedClickAction }) {
    return (<div className="todo-list-item">
  <h2>{toDo.title}</h2>
  <button className='button-complete' onClick={() => {completedClickAction(toDo)}}>Complete</button>
  </div> );
}

export default ToDoListItem;