import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTodos } from "./services/actionTodos/actionTodos";

const Todos = () => {
  const { isLoading, todos, error } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTodos());
  }, []);

  return (
    <div>
      <h1>Todo App</h1>
      {isLoading && <p>Loading ...</p>}
      {error && <p>{error.message}</p>}
      <section>
        {todos &&
          todos.map((todo) => {
            const { id, title } = todo;
            return (
              <article key={id}>
                <h3>{id}</h3>;<h3>{title}</h3>;
              </article>
            );
          })}
      </section>
    </div>
  );
};

export default Todos;
