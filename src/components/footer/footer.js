import clsx from "clsx";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearCompleted } from "../../store/reducers/todoSlice";

function Footer() {
  const todos = useSelector((state) => state.todos.todos);
  const [selected, setSelected] = useState(() => {
    switch (window.location.href.split("/").pop()) {
      case "":
        return 1;
      case "completed":
        return 3;
      case "active":
        return 2;
      default:
        return 1;
    }
  });
  const dispatch = useDispatch();
  const handClearCompleted = () => {
    dispatch(clearCompleted());
  };
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>
          {selected === 1
            ? todos.length
            : selected === 2
            ? todos.filter((todo) => todo.completed === false).length
            : todos.filter((todo) => todo.completed === true).length}
        </strong>{" "}
        item left
      </span>
      <ul className="filters">
        <li>
          <Link
            className={clsx(selected === 1 && "selected")}
            onClick={() => setSelected(1)}
            to="/"
          >
            All
          </Link>
        </li>
        <li>
          <Link
            className={clsx(selected === 2 && "selected")}
            onClick={() => setSelected(2)}
            to="/active"
          >
            Active
          </Link>
        </li>
        <li>
          <Link
            className={clsx(selected === 3 && "selected")}
            onClick={() => setSelected(3)}
            to="/completed"
          >
            Completed
          </Link>
        </li>
      </ul>
      <button className="clear-completed" onClick={handClearCompleted}>
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
