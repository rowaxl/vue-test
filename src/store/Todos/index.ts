import { Module } from 'vuex';
import { TodoState, RootState } from '@/store/types';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';

const state: TodoState = {
  todos: [],
};

export const todos: Module < TodoState, RootState > = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
