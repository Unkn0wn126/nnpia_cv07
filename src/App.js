import './App.css';
import ToDoListMain from './ToDoListMain';
import { useEffect, useState } from 'react';

function App() {
  const [toDo, setToDo] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    function fetchToDoList(){
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => {setToDo(json); setLoading(false);})
        console.log(toDo);
    }
    fetchToDoList();
}, []);

if(loading){
  return "<h3>Loading</h3>";
}
  return (
    <div className="App">
      <ToDoListMain initialTodoList={toDo}></ToDoListMain>
    </div>
  );
}

export default App;
