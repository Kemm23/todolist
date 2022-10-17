import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Active from "./active";
import TodoList from "./todoList";
import Completed from "./completed";
import { markAllCompleted } from "../../store/reducers/todoSlice";

function Main() {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  return (
    <section className="main">
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        onChange={() => dispatch(markAllCompleted())}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <Routes>
        <Route path="/active" element={<Active />} />
        <Route path="/completed" element={<Completed />} />
        <Route path="/" element={<TodoList />} />
      </Routes>
    </section>
  );
}

export default Main;
