
function ToDoListItem({toDo, deleteClickAction, completedClickAction }) {
    return (<div>
  <h2>{toDo.title}</h2>
  <button onClick={() => {completedClickAction(toDo)}}>Complete</button>
  <button onClick={() => {deleteClickAction(toDo)}}>Delete</button>
  </div> );
}

export default ToDoListItem;