export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export type Data = {
  data: Todo[],
  error: Error | null,
  isLoading: boolean
}

export type DeleteTodo = (id: number) => void;
