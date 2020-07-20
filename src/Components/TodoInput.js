import React from "react";

const TodoInput = (props) => {
  const { change, click, edit, value , enterPress } = props;

  return (
    <div className="input-container">
      <label>Add Todo Item</label>
      <div className="input-flex">
        <input
          type="text"
          placeholder="Add Todo Item"
          onChange={change}
          value={value}
          onKeyDown = {enterPress}
        />
        <button
          onClick={props.isUpdate ? edit : click}
        >
          {props.isUpdate ? "Edit" : "Add"}
        </button>
      </div>
    </div>
  );
};

export default TodoInput;
