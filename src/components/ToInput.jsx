import React, { useState } from "react";
import { addTodo } from "../redux/actions";
import { useDispatch } from "react-redux";

function ToInput() {
  const [name, setName] = useState();
  const [id, setId] = useState();
  // const [isActive, setIsActive] = useState();
  const dispatch = useDispatch();
  return (
    <div>
      <h1 className="title">What's the plan for today?</h1>
      <div className="form-input">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="input-todo"
          placeholder=" Add your activity here..."
        />
        <button
          onClick={() => {
            dispatch(
              addTodo({
                id: id,
                name: name,
                // isActive: false
              })
            );
            setId();
            setName("");
            // setIsActive()
          }}
          className="btn btn-secondary"
        >
          Add
        </button>
        <div className="filter-btn">
          <button type="button" class="btn btn-outline-primary">
            All
          </button>
          <button type="button" class="btn btn-outline-primary">
            Active
          </button>
          <button type="button" class="btn btn-outline-primary">
            Completed
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToInput;
