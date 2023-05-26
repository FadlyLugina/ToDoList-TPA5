import React, { useState } from "react";
import ToItem from "./ToItem";
import { useSelector } from "react-redux";

function ToList() {
  const [filter, setFilter] = useState("All");
  const todos = useSelector((state) => state);

  let filteredTodos = todos;
  if (filter === "Active") {
    filteredTodos = todos.filter((todo) => !todo.completed);
  } else if (filter === "Completed") {
    filteredTodos = todos.filter((todo) => todo.completed);
  }

  return (
    <div>
      <div className="filter-btn">
        <button
          type="button"
          className={`btn ${
            filter === "All" ? "btn-primary" : "btn-outline-primary"
          }`}
          onClick={() => setFilter("All")}
        >
          All{" "}
        </button>{" "}
        <button
          type="button"
          className={`btn ${
            filter === "Active" ? "btn-primary" : "btn-outline-primary"
          }`}
          onClick={() => setFilter("Active")}
        >
          Active{" "}
        </button>{" "}
        <button
          type="button"
          className={`btn ${
            filter === "Completed" ? "btn-primary" : "btn-outline-primary"
          }`}
          onClick={() => setFilter("Completed")}
        >
          Completed{" "}
        </button>{" "}
      </div>{" "}
      <div className="card-list">
        {" "}
        {filteredTodos.map((todo) => {
          return (
            <ToItem
              key={todo.id}
              todo={todo}
              className={todo.completed ? "completed" : "active"} // Tambahkan kelas CSS sesuai dengan status tugas
            />
          );
        })}{" "}
      </div>{" "}
    </div>
  );
}

export default ToList;
