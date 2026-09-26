import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Todo from "./Todo";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      task: "Studying",
      completed: false
    },
    {
      id: 2,
      task: "Exercise",
      completed: false
    },
    {
      id: 3,
      task: "Reading",
      completed: false
    }
  ]);

  const addTodo = (task) => {
    if (task.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      task: task,
      completed: false
    };

    setTodos([...todos, newTodo]);
  };

  const completeTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const completedCount = todos.filter(
    (todo) => todo.completed
  ).length;

  return (
    <BrowserRouter>
      <div className="app">

        {/* Navigation Bar */}
        <nav className="navbar">

          <Link to="/" className="logo">
            Todo App
          </Link>

          <div className="nav-links">
            <Link to="/" className="nav-link">
              Home
            </Link>

            <Link to="/add" className="nav-link add-link">
              Add Todo
            </Link>

            <Link to="/about" className="nav-link">
              About
            </Link>
          </div>

        </nav>

        {/* Pages */}
        <Routes>

          <Route
            path="/"
            element={
              <Todo
                mode="home"
                todos={todos}
                completedCount={completedCount}
                completeTodo={completeTodo}
                deleteTodo={deleteTodo}
              />
            }
          />

          <Route
            path="/add"
            element={
              <Todo
                mode="add"
                addTodo={addTodo}
              />
            }
          />

          <Route
            path="/about"
            element={
              <div className="about-page">
                <h1>About Todo App</h1>

                <p>
                  This is a simple Todo application created
                  using React and React Router.
                </p>

                <p>
                  You can add, complete and delete your daily
                  tasks.
                </p>
              </div>
            }
          />

        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;