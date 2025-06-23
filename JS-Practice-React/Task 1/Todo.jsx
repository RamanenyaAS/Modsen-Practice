import { useState } from "react";
import "./Todo.css"

function Todo() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    if (inputValue.trim() === "") return;
    setTodos([...todos, inputValue]);
    setInputValue("");
  }

  const handleDeleteTodo = (indexToDelete) => {
    setTodos(todos.filter((_, index) => index !== indexToDelete));
  }

  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div className="container__title">Todo List</div>
          <div className="task-form">
            <input className="task-form__input"
              placeholder="Введите дело"
              type="text" value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if(e.key === "Enter") handleAddTodo();
              }}></input>
            <button className="task-form__button" onClick={handleAddTodo}>Добавить</button>
          </div>
          <div className="todo-list">
            {todos.map((todo, index) => (
              <div className="todo-card" key={index}>
                <span className="todo-card__text">{todo}</span>
                <button className="todo-card__delete" onClick={() => handleDeleteTodo(index)}>X</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Todo;