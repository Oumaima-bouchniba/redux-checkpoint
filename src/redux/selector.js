import {Done_Filter} from "../filter";


export const getTodoState = store => store.todos;

export const getTodoList = store => getTodoState(store) ? getTodoState(store).allIds : [];

export const getTodoById = (store, id) => getTodoState(store) ? { ...getTodoState(store).byIds[id], id } : {};

export const getAllTodos = store => getTodoList(store).map(id => getTodoById(store, id));

export const getTodosByDoneFilter = (store, Filter) => {
  const allTodos = getAllTodos(store);
  switch (Filter) {
    case Done_Filter.Done:
      return allTodos.filter(todo => todo.done);
    case Done_Filter.Undone:
      return allTodos.filter(todo => !todo.done);
    case Done_Filter.All:
    default:
      return allTodos;
  }
};