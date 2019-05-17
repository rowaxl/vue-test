import { GetterTree } from 'vuex';
import { TodoState, RootState} from '@/store/types';

export const getters: GetterTree<TodoState, RootState> = {
  size: (state: TodoState) => {
    return state.todos.length;
  },
};
