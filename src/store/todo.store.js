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

export default {
  initialStore,
}