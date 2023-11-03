import { useState } from "react";
import Todo from "./components/Todo";
import { useFetchData } from "./hooks/useFetchData";
import TodoForm from "./components/TodoForm";

function App() {
  const [show, setShow] = useState(10);
  const {data,error,isLoading} = useFetchData();
  const more = () => {
    setShow(show + 10);
  };
  const deleteTodo = (id: number) => {
    const newData = data.filter((todo) => todo.id !== id);
    setShow(10);
    return newData;
  }; 

  if(error) {
    return <div>{error.message}</div>
  }

  return (
    <section className="grid place-items-center w-full">
      <TodoForm />
      {isLoading ? (
        <div>Loading...</div>
      ): (
          <>
            <div className="">
              {data.slice(0, show).map((todo, index) => (
                <>
                  <Todo key={index} todo={todo} deleteTodo={deleteTodo} />
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

          </>
        )} 
    </section>
  );
}

export default App;
