import { Todo } from "../todo/models/todo.model";

const Filters = {
  All: 'all',
  Completed: 'Completed',
  Pending: 'Pending'
}

const state = {
  todos: [
    new Todo('Piedra'),
    new Todo('Piedra tiempo'),
    new Todo('mar'),
  ],
  filter: Filters.All,
}

const initialStore = () => {
  console.log(state);
  console.log('Initial Store');
}

const loadStore = () => {
  throw new Error('Not implemented')
}

const getTodos = (filter = Filters.All) => {
  switch (filter) {
    case Filters.All:
      return [...state.todos];
    case Filters.Completed:
      return state.todos.filter(todo => todo.done)
    case Filters.Pending:
      return state.todos.filter(todo => !todo.done)
    default:
      throw new Error(`Option ${filter} is not valid`)
  }
}

/**
 * 
 * @param { String } description 
 */
const addTodo = (description) => {
  if (!description) throw new Error('Description is required');
  state.todos.push(new Todo(description))
}

const toggleTodo = (todoId) => {
  state.todos = state.todos.map(todo => {
    if (todo.id === todoId) {
      todo.done = !todo.done
    }
    return todo;
  });
}

const deleteTodo = (todoId) => {
  state.todos = state.todos.filter(todo => todo.id !== todoId);
}

const deleteCompleted = () => {
  state.todos = state.todos.filter(todo => todo.done);
}

/**
 * 
 * @param { Filters } newFilter 
 */
const setFilter = (newFilter = Filters.All) => {
  state.filter = newFilter;
}

const getCurrentFilter = () => {
  return state.filter;
}

export default {
  addTodo,
  deleteCompleted,
  deleteTodo,
  getCurrentFilter,
  getTodos,
  initialStore,
  loadStore,
  setFilter,
  toggleTodo,
}