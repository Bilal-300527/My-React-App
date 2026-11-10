import Swal from "sweetalert2";
import { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([]);
  const [id, setId] = useState(null);
  const addTodo = () => {
    if (id === null) {
      setList([...list, todo]);
      setTodo("");

      Swal.fire({
        title: "Good job!",
        text: "Todo Has Added",

        icon: "success",
      });
    } else {
      const updatedList = list.map((item, index) =>
        index === id ? todo : item,
      );
      setList(updatedList);
      setId(null);
      setTodo("");
      Swal.fire({
        title: "Good job!",
        text: "Todo Has Edited",
        icon: "success",
      });
    }
  };

  const deleteTodo = (id) => {
    const allTodos = list;
    const updatedTodos = allTodos.filter((_, ind) => ind !== id);
    setList(updatedTodos);
    Swal.fire({
      title: "Good job!",
      text: "Todo Has Deleted",
      icon: "error",
    });
  };

  const editTodo = (index, data) => {
    setTodo(data);
    setId(index);
  };

  return (
    <div>
      <input
        type="text"
        value={todo}
        placeholder="Enter you task?"
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button onClick={addTodo}>{id === null ? "Add" : "Update"} Todo</button>

      <ul>
        {list.map((item, index) => {
          return (
            <div key={index}>
              <li>{item}</li>
              <button
                onClick={() => {
                  editTodo(index, item);
                }}
              >
                Edit
              </button>
              <button
                onClick={() => {
                  deleteTodo(index);
                }}
              >
                Del
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Todo;
