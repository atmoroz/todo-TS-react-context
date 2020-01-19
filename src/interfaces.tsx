export interface ITodosInterface {
  title: string;
  id: number;
  isCompleated: boolean;
}

export interface IContextInterface {
  todos: ITodosInterface[];
  addHandler: (title: string) => void;
  throughHandler: (id: number) => void;
  removeTodo: (id: number) => void;
}
