import React, { useState } from "react";

const TodoApp = () => {
    const users = [
        {
            "email": "tashif@gmail.com",
            "password": "123"
        }
    ]
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAddTask = () => {
    if (task.trim() === "") return; // Prevent adding empty tasks
    if (users){
    setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
    setTask(""); // Clear the input field
    }
  };

  const handleToggleComplete = (id) => {
    setTodos(todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className=" max-w-sm mx-auto p-6 rounded-lg shadow-lg bg-white text-black">
      <h1 className="text-2xl font-bold mb-4 text-center">Todo App</h1>

      {/* Task Input */}
      <div className="flex mb-4">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="border-2 border-black placeholder:text-black flex-1 p-2 border border-gray-300 rounded-l-md"
          placeholder="Add a new task"
        />
        <button
          onClick={handleAddTask}
          className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600"
        >
          Add
        </button>
      </div>

      {/* Task List */}
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`flex justify-between items-center p-2 border-b ${
              todo.completed ? "bg-gray-200 line-through text-gray-400" : "bg-white"
            }`}
          >
            <span
              className="flex-1 cursor-pointer"
              onClick={() => handleToggleComplete(todo.id)}
            >
              {todo.text}
            </span>
            <button
              onClick={() => handleDelete(todo.id)}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      
    </div>
  );
};

export default TodoApp;
