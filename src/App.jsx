import TodoList from "./components/todoList";
import { Login } from "./components/login";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/todo/:userId" element={<TodoList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
