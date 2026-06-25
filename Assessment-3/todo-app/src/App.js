import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");

  // ✅ Load todos from localStorage on first render
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  // 💾 Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // ➕ Add Task
  const addTask = () => {
    if (task.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    setTodos([...todos, newTask]);
    setTask("");
  };

  // 🗑️ Delete Task
  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // ✔️ Toggle Complete
  const toggleTask = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  // ✏️ Start Edit
  const startEdit = (todo) => {
    setEditId(todo.id);
    setEditText(todo.text);
  };

  // 💾 Save Edit
  const saveEdit = () => {
    setTodos(
      todos.map((todo) =>
        todo.id === editId
          ? { ...todo, text: editText }
          : todo
      )
    );
    setEditId(null);
    setEditText("");
  };

  // ❌ Cancel Edit
  const cancelEdit = () => {
    setEditId(null);
    setEditText("");
  };

  return (
    <div className="container">
      <div className="todo-box">
        <h1>📋 Todo App</h1>

        {/* Input */}
        <div className="input-section">
          <input
            type="text"
            placeholder="Enter your task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />

          <button onClick={addTask}>Add</button>
        </div>

        {/* List */}
        <div className="todo-list">
          {todos.map((todo) => (
            <div className="todo-item" key={todo.id}>
              <div className="left">
                <div
                  className={
                    todo.completed
                      ? "check completed-check"
                      : "check"
                  }
                  onClick={() => toggleTask(todo.id)}
                >
                  {todo.completed ? "✓" : ""}
                </div>

                {editId === todo.id ? (
                  <input
                    className="edit-input"
                    value={editText}
                    onChange={(e) =>
                      setEditText(e.target.value)
                    }
                  />
                ) : (
                  <p
                    className={
                      todo.completed ? "completed" : ""
                    }
                    onDoubleClick={() => startEdit(todo)}
                  >
                    {todo.text}
                  </p>
                )}
              </div>

               <div className="right">

                {editId === todo.id ? (
                  <>
                    <button
                      className="save-btn"
                      onClick={saveEdit}
                    >
                      Save
                    </button>

                    <button
                      className="cancel-btn"
                      onClick={cancelEdit}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <button
                    className="edit-btn"
                    onClick={() =>
                      startEdit(todo)
                    }
                  >
                    Edit
                  </button>
                )}

                <span
                  className="delete-icon"
                  onClick={() =>
                    deleteTask(todo.id)
                  }
                >
                  🗑️
                </span>

              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="footer">
          <p>Total Tasks: {todos.length}</p>
          <span>|</span>
          <p>
            Completed:{" "}
            {todos.filter((t) => t.completed).length}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;