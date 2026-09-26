import { useState } from "react";
import { Link } from "react-router-dom";
import "./Todo.css";

function Todo({
  mode,
  todos = [],
  completedCount = 0,
  completeTodo,
  deleteTodo,
  addTodo
}) {

  const [task, setTask] = useState("");

  // ADD TODO PAGE
  if (mode === "add") {

    const handleSubmit = (e) => {
      e.preventDefault();

      if (task.trim() === "") {
        return;
      }

      addTodo(task);
      setTask("");
    };

    return (
      <div className="add-container">

        <div className="add-card">

          <h1>Add New Todo</h1>

          <p className="subtitle">
            Create a new task for your todo list.
          </p>

          <form onSubmit={handleSubmit}>

            <label>Task</label>

            <input
              type="text"
              placeholder="Enter your task..."
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />

            <button type="submit">
              Add Todo
            </button>

          </form>

        </div>

      </div>
    );
  }

  // HOME PAGE
  return (
    <div className="todo-container">

      <div className="todo-header">

        <div>
          <h1>My Todos</h1>

          <p>
            Manage your daily tasks easily.
          </p>
        </div>

        <div className="count">
          {completedCount} / {todos.length} completed
        </div>

      </div>

      <div className="todo-list">

        {todos.length === 0 ? (

          <div className="empty">
            No tasks available.
          </div>

        ) : (

          todos.map((todo) => (

            <div
              className={`todo-item ${
                todo.completed ? "completed" : ""
              }`}
              key={todo.id}
            >

              <span className="task-name">
                {todo.task}
              </span>

              <div className="actions">

                <button
                  className="complete-btn"
                  onClick={() => completeTodo(todo.id)}
                >
                  {todo.completed ? "Undo" : "Complete"}
                </button>

                <button
                  className="delete-btn"
                  onClick={() => deleteTodo(todo.id)}
                >
                  Delete
                </button>

              </div>

            </div>

          ))

        )}

      </div>

      <Link to="/add" className="bottom-add">
        + Add New Todo
      </Link>

    </div>
  );
}

export default Todo;