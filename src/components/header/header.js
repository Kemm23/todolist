import { useDispatch } from "react-redux";
import { useState, memo, useRef } from "react";
import { addTodo } from "../../store/reducers/todoSlice";

function Header() {
  const [job, setJob] = useState("");
  const dispatch = useDispatch();
  const input = useRef();
  const handleAddJob = (e) => {
    if (e.code === "Enter" && input.current.value) {
      console.log("asd");
      dispatch(addTodo(input.current.value));
      setJob("");
    }
  };
  return (
    <header className="header">
      <h1>todos</h1>
      <input
        ref={input}
        className="new-todo"
        placeholder="What needs to be done?"
        value={job}
        onChange={(e) => setJob(e.target.value)}
        onKeyUp={(e) => handleAddJob(e)}
        autoFocus
      />
      <button
        className="addJob"
        onClick={() => handleAddJob({ code: "Enter" })}
      >
        ADD
      </button>
    </header>
  );
}

export default memo(Header);
