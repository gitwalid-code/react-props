const TodoItem = (props) => {
  return (
    <li>
      {props.data.task}
      <button onClick={() => props.todoFunction(props.data.id)}>X</button>
    </li>
  );
};
export default TodoItem;
