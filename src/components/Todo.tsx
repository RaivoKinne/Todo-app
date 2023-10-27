import { useEffect, useState } from "react";
import { DeleteTodo, Todo as TodoType } from "../types";
import toast from "react-hot-toast";

function Todo({
  todo,
  deleteTodo,
}: {
  todo: TodoType;
  deleteTodo: DeleteTodo;
}) {
  const [check, setCheck] = useState(todo.completed);
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);

  useEffect(() => {
    if (check) {
      toast.success("Todo completed", { position: "bottom-right" });
    }
  }, [check]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <>
      <article className="grid place-items-start w-[600px]">
        <div className="flex justify-center items-center gap-2 mx-2 ml-5">
          <i className="fa-solid fa-user fa-2xs"></i>
          <p>{todo.id}</p>
        </div>
        <label htmlFor="check" className="flex gap-4 mx-2">
          <input
            type="checkbox"
            value="completed"
            checked={check}
            id="check"
            className="appearance-none h-4 w-4 ring-2 ring-black rounded-full checked:bg-black transition-all ease-in duration-75"
            onChange={(e) => setCheck(e.target.checked)}
          />
          {isEditing ? (
            <>
              <input
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
              />
              <button onClick={handleSave}>Save</button>
            </>
          ) : (
            <p
              onClick={() => setCheck(!check)}
              className={check ? "line-through" : ""}
              style={{ textDecoration: check ? "line-through" : "" }}
            >
              {newTitle}
            </p>
          )}
        </label>
        <div className="flex gap-4">
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          {!isEditing && <button onClick={handleEdit}>Edit</button>}
        </div>
      </article>
    </>
  );
}

export default Todo;
