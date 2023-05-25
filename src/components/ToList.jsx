import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

function ToList() {
  let todos = useSelector((state) => state);

  return (
    <div className="card-list">
      {todos.map((todo) => {
        return <TodoItem key={todos.id} todo={todo} />;
      })}
    </div>
  );
}

export default ToList;
