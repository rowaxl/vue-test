import { MutationTree } from 'vuex';
import { TodoState, Todo } from '@/store/types';

export const mutations: MutationTree<TodoState> = {
  add: (state, todo: Todo) => {
    state.todos.push(todo);
  },
  remove: (state, id: string) => {
    state.todos = state.todos.filter((e: Todo) => e.id !== id);
  },
};
