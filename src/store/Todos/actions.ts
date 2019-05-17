import { ActionTree } from 'vuex';
import { TodoState, RootState, Todo } from '@/store/types';

export const actions: ActionTree<TodoState, RootState> = {
  add: ({ commit }, todo: Todo) => {
    commit('add', todo);
    return true;
  },
  remove: ({ commit }, todo: Todo) => {
    commit('remove', todo);
    return true;
  },
};
