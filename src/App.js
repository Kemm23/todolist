import Header from "./components/header";
import Main from "./components/main";
import { useDispatch, useSelector } from "react-redux";
import Footer from "./components/footer";
import { useEffect } from "react";
import { getTodos } from "./store/reducers/todoSlice";
import axios from "axios";

function App() {
  const todos = useSelector((state) => state.todos.todos);
  //Call API
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getTodos());
  // }, []);
  //Call API 2
  // useEffect(() => {
  //   axios("https://jsonplaceholder.typicode.com/todos?_limit=5")
  //     .then((response) => {
  //       dispatch(getTodos(response.data));
  //     })
  //     .catch(() => console.log("error"));
  // }, []);
  return (
    <section className="todoapp">
      <Header />
      {todos.length > 0 && <Main />}
      {todos.length > 0 && <Footer />}
    </section>
  );
}

export default App;
