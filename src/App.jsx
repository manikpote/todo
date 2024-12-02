import { Login } from "./components/todoList/login";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import TodoList from "./components/todoList/todoList";
import { Popup } from "./components/reuseableComponents/popup";
import { RangeSlider } from "./components/RangeSlider/rangeSlider";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/popup" element={<Popup />} />
          <Route path="/password" element={<RangeSlider />} />
          <Route path="/todo/:userId" element={<TodoList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
