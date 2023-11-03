import { FormEvent, useEffect, useState } from "react";
import { Todo as TodoType } from "../types";
import Todo from "./Todo";

function TodoForm() {
  const [todos, setTodos] = useState<TodoType[]>(() => {
    const todos = localStorage.getItem("todos");
    if (todos) {
      return JSON.parse(todos);
    }
    return [];
  });
  const [input, setInput] = useState("");
  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const newTodo: TodoType = {
      userId: 1,
      id: todos.length + 1,
      title: input + " " + "(you)",
      completed: false,
    };

    setTodos((current) => [...current, newTodo]);
    setInput("");
  };
  const deleteTodo = (id: number) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };
  return (
    <article className="">
      <form onSubmit={handleSubmit} className="grid gap-4 w-[600px]">
        <label htmlFor="todo" className="text-2xl font-semibold text-center">
          Todo
        </label>
        <input
          type="text"
          name="todo"
          id="todo"
          className="border-2 border-black p-2 rounded-md"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder="Type your todo here"
        />
        <button
          type="submit"
          className="w-full bg-black p-2 rounded-md text-white"
        >
          Add
        </button>
      </form>
      <div>
        {todos.map((todo) => (
          <Todo todo={todo} deleteTodo={deleteTodo} />
        ))}
      </div>
    </article>
  );
}

export default TodoForm;
