import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import TodosPages from "./pages/Todospages";
import Aboutpage from "./pages/AboutPage";
import { AppContextProvider } from "./contextReact";
import { ITodosInterface, IContextInterface } from "./interfaces";

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodosInterface[]>([]);

  useEffect(() => {
    let saved = JSON.parse(
      localStorage.getItem("todoList") || "[]"
    ) as ITodosInterface[];
    setTodos(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todos));
  }, [todos]);

  const store: IContextInterface = {
    todos,
    addHandler: (title: string) => addHandler(title),
    throughHandler: (id: number) => throughHandler(id),
    removeTodo: (id: number) => removeTodo(id)
  };

  const addHandler = (title: string) => {
    if (title === "") return;
    const newTodo: ITodosInterface = {
      title: title,
      id: Date.now(),
      isCompleated: false
    };
    setTodos(prev => [newTodo, ...prev.reverse()].reverse());
  };

  const throughHandler = (id: number) => {
    setTodos(prev =>
      prev.map(todo => {
        if (todo.id === id) {
          todo.isCompleated = !todo.isCompleated;
        }
        return todo;
      })
    );
  };

  const removeTodo = (id: number) => {
    const isDelete = window.confirm("Вы точно хотите удалить задачу?");
    if (isDelete) {
      setTodos(prev => prev.filter(todo => todo.id !== id));
    }
  };
  return (
    <AppContextProvider value={store}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/" component={TodosPages} />
              <Route path="/about" component={Aboutpage} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </AppContextProvider>
  );
};

export default App;
