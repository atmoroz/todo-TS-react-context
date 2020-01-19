import React, { useState, useContext } from "react";
import { myContext } from "../contextReact";

const TodoForms: React.FC = () => {
  const { addHandler }: any = useContext(myContext);

  const [title, setTitle] = useState<string>("");

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      event.preventDefault();
      addHandler(title);
      setTitle("");
    }
  };
  return (
    <div className="todoForm">
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12 mt20">
              <input
                value={title}
                type="text"
                id="title"
                placeholder="Add a new task"
                onChange={changeHandler}
                onKeyPress={keyPressHandler}
              />
              <label htmlFor="disabled">Add a new task</label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default TodoForms;
