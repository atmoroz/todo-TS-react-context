import React from "react";

import TodoForms from "../components/TodoForms";
import TodoList from "../components/TodoList";

const TodosPages: React.FC = () => {
  return (
    <>
      <TodoForms />
      <TodoList />
    </>
  );
};

export default TodosPages;
