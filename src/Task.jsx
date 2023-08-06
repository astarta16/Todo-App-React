function Task({ taskName, id, deleteTask }) {
  return (
    <div className="task">
      <h1>{taskName}</h1>
      <button onClick={() => deleteTask(id)}>X</button>
    </div>
  );
}

export default Task;
