import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoItem from "./components/Todoitem";
function App() {
  const [todo, setTodo] = useState("");
  const [todoArray, setTodoArray] = useState([]);

  const removeTodo = (id) => {
    setTodoArray(todoArray.filter((elem) => elem.id !== id));
  };
  return (
    <div>
      <form>
        <input
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          value={todo}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            setTodoArray([
              ...todoArray,
              {
                id: uuidv4(),
                task: todo,
              },
            ]);
            setTodo("");
          }}
        >
          ADD
        </button>
      </form>
      <ul>
        {todoArray.map((todoItem) => (
          <TodoItem
            key={todoItem.id}
            data={todoItem}
            todoFunction={removeTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
