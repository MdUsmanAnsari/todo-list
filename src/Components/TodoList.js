import React from "react";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  return (
    <div className="list-container">
      {props.items.map((item) => {
        return (
          <TodoItem
            key={item.id}
            text={item.text}
            handlerDelete={() => props.handlerDelete(item.id)}
            handlerEdit={() => props.handlerEdit(item.id)}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
