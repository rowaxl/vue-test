export interface RootState {
  version: string;
}

export interface TodoState {
  todos: Todo[];
}

export interface Todo {
  id: string;
  done: boolean;
  text: string;
}
