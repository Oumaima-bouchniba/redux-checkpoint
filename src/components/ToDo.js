import React from "react";
import { connect } from "react-redux";
import cx from "classnames";
import { CheckTodo } from "../redux/Actions";



const ToDo = ({ todo, checkTodo }) => (
    <ul className="todo-item" onClick={() => checkTodo(todo.id)}>
      {todo && todo.completed ? "done:" : "to do:"}{" "}
      <span
        className={cx(
          "todo-item__text",
          todo && todo.completed && "todo-item__text--completed"
        )}
      >
        {todo.content}
      </span>
    </ul>
  );
  
  export default connect(
    null,
    { CheckTodo }
  )(ToDo);