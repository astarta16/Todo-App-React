import { useState } from 'react';
import './App.css';
import Task from "./Task"; // Make sure to provide the correct path to your Task component

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
          <Task key={task.id} taskName={task.taskName} id={task.id} deleteTask={deleteTask} />
        ))}
      </div>
    </div>
  );
}

export default App;
