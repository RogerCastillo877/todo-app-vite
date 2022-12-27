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

/**
 * 
 * @param { String } description 
 */
const addTodo = (description) => {
  throw new Error('Not implemented')
}

const toggleTodo = (todoId) => {
  throw new Error('Not implemented')
}

const deleteTodo = (todoId) => {
  throw new Error('Not implemented')
}

const deleteCompleted = (todoId) => {
  throw new Error('Not implemented')
}

const setFilter = (newFilter = Filters.All) => {
  throw new Error('Not implemented')
}

const getCurrentFilter = () => {
  throw new Error('Not implemented')
}

export default {
  addTodo,
  deleteCompleted,
  deleteTodo,
  getCurrentFilter,
  initialStore,
  loadStore,
  setFilter,
  toggleTodo,
}