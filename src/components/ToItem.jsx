import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/actions";
import { todos } from "../redux/state";

function ToItem({ todo }) {
  const [editable, setEditable] = useState(false);
  const [name, setName] = useState(todo.name);
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);

    dispatch(
      updateTodo({
        ...todo,
        completed: !checked,
      })
    );
  };

  const handleEdit = () => {
    setEditable(!editable);
    setName(todo.name);
  };

  const handleUpdate = () => {
    dispatch(
      updateTodo({
        ...todo,
        name: name,
      })
    );
    setEditable(!editable);
  };

  return (
    <div className={`card w-100 h50 ${todo.completed ? "completed" : ""}`}>
      <input
        name="checkbox"
        type="checkbox"
        checked={todo.completed}
        onChange={handleChange}
      />
      {editable ? (
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="update-form"
        />
      ) : (
        <p className={checked ? "checked-item" : ""}> {todo.name} </p>
      )}
      {editable ? (
        <button className="btn btn-primary" onClick={handleUpdate}>
          Update{" "}
        </button>
      ) : (
        <button className="btn btn-primary" onClick={handleEdit}>
          Edit{" "}
        </button>
      )}
      <button
        className="btn btn-danger"
        onClick={() => dispatch(deleteTodo(todo.id))}
      >
        Delete{" "}
      </button>{" "}
    </div>
  );
}

export default ToItem;
