import axios from "axios";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/App.css'

type TodoTypes = {
  id: string;
  todo: string;
};


function Test() {
  const [todos, setTodos] = useState<TodoTypes[]>([]);

  useEffect(() => {
    axios.get("http://localhost:3000").then((response) => {
      console.log(response.data.todos);
      const { todos } = response.data;
      setTodos(todos);
    });
  }, []);

  return (
    <>
      {todos.map((todo) => (
        <p className="text-primary" key={todo.id}>{todo.todo}</p>
      ))}
      <p>test</p>
    </>
  );
}

export default Test;