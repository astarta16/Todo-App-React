import { useState } from 'react';
import './App.css';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
    };
    setTodoList([...todoList, task]);
    setNewTask('');
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange} value={newTask} />
        <button onClick={addTask}>ADD Task</button>
      </div>
      <div className="list">
        {todoList.map((task) => (
          <div key={task.id}>
            <h1>{task.taskName}</h1>
            <button onClick={() => deleteTask(task.id)}>X</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
