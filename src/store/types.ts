export interface RootState {
  version: string;
}

export interface TodoState {
  todos: Todo[];
}

export interface Todo {
  // 一意になるかんじのID
  id: string;
  // チェックボックスON/OFF
  done: boolean;
  // やること
  text: string;
}
