import { useState } from "react";
import Todo from "./components/Todo";
import { useFetchData } from "./hooks";
import TodoForm from "./components/TodoForm";

function App() {
  const [show, setShow] = useState(10);
  const data = useFetchData();
  const more = () => {
    setShow(show + 10);
  };
  return (
    <section className="grid place-items-center w-full">
      <TodoForm />
      <div className="">
        {data.slice(0, show).map((todo, index) => (
          <>
            <Todo key={index} todo={todo} />
          </>
        ))}
      </div>
      <button onClick={more} className="grid gap-2 m-2 w-full justify-center">
        <p className="text-sm">
          {show}/{data.length}
        </p>
        <p>
          <i className="fa-solid fa-chevron-down"></i>
        </p>
      </button>
    </section>
  );
}

export default App;