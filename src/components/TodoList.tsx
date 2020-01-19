import React, { useContext } from "react";
import { myContext } from "../contextReact";
import { ITodosInterface } from "../interfaces";

const TodoList: React.FC = () => {
  const { todos, throughHandler, removeTodo }: any = useContext(myContext);
  const toogleCompleated = (id: number) => {
    throughHandler(id);
  };
  const removeHandler = (event: React.MouseEvent, id: number) => {
    event.preventDefault();
    removeTodo(id);
  };
  return (
    <div className="todoList">
      <ul>
        {todos.map((todo: ITodosInterface) => {
          const classes = ["todo"];
          if (todo.isCompleated) {
            classes.push("compleated");
          }
          return (
            <li className={classes.join(" ")} key={`this key= ${todo.id}`}>
              <label>
                <input type="checkbox" defaultChecked={todo.isCompleated} />
                <span onClick={toogleCompleated.bind(null, todo.id)}>
                  {todo.title}
                </span>
                <i
                  className="material-icons red-text"
                  onClick={event => removeHandler(event, todo.id)}
                >
                  delete
                </i>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default TodoList;
