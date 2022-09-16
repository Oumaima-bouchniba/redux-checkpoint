import React from "react";
import { connect } from "react-redux";
import ToDo from "./ToDo";
import { getTodosByDoneFilter } from "../redux/selector";

const ListToDos = ({ todos }) => (
  <p className="todo-list">
    {todos && todos.length
      ? todos.map((todo, index) => {
          return <ToDo key={`todo-${todo.id}`} todo={todo} />;
        })
      : "No todos!"}
  </p>
);



const mapStateToProps = state => {
  const { Filter } = state;
  const todos = getTodosByDoneFilter(state, Filter);
  return { todos };
  
};
export default connect(mapStateToProps)(ListToDos);