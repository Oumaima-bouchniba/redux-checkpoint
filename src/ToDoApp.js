import React from "react";
import AddTodo from "./components/AddTodo";
import ListToDos from "./components/ListToDos";
import DoneFilter from "./components/DoneFilter";
import "./App.css";

export default function ToDoApp ()
{
    return(
        <div className="todo-app">
        <h1 style={{textDecoration: "underline"}}>ToDo App</h1>
        <AddTodo />
        <ListToDos />
        <DoneFilter />
      </div>
    );
}