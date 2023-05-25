import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/actions";
import { todos } from "../redux/state";

function TodoItem({ todo }) {
  const [editable, setEditable] = useState(false);
  const [name, setName] = useState(todo.name);
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  //   console.log("checked", checked);

  const handleChange = (event) => {
    // setChecked({ ...checked, [event.target.name]: event.target.checked });
    setChecked(!checked);
  };

  return (
    <div className="card w-100 h50">
      <input
        name="checkbox"
        value={checked.checkbox}
        onChange={handleChange}
        type="checkbox"
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
        <p className={checked ? "checked-item" : ""}>{todo.name}</p>
      )}

      <button
        onClick={() => {
          dispatch(
            updateTodo({
              ...todo,
              name: name,
            })
          );
          if (editable) {
            setName(todo.name);
          }
          setEditable(!editable);
        }}
        
        className="btn btn-primary">
        {editable ? "Update" : "Edit"}
      </button>
      <button className="btn btn-danger" onClick={() => dispatch(deleteTodo(todo.id))}>
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
