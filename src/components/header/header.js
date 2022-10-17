import { useDispatch } from "react-redux";
import { useState, memo } from "react";
import { addTodo } from "../../store/reducers/todoSlice";

function Header() {
  const [job, setJob] = useState("");
  const dispatch = useDispatch();
  const handleAddJob = (e) => {
    if (e.code === "Enter" && e.target.value) {
      dispatch(addTodo(e.target.value));
      setJob("");
    }
  };
  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={job}
        onChange={(e) => setJob(e.target.value)}
        onKeyUp={(e) => handleAddJob(e)}
        autoFocus
      />
    </header>
  );
}

export default memo(Header);
