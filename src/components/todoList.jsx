import { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Tooltip as ReactTooltip } from "react-tooltip";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const userId = localStorage.getItem("userId");
  const data = JSON.parse(localStorage.getItem("Data"));

  const userData = data.find((userData) => userData.id === Number(userId));

  useEffect(() => {
    if (userData) {
      setTasks([...userData.list]);
    } else {
      setTasks([]);
    }
  }, []);

  const handleAddTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { text: input }]);
      setInput("");
      const userIndex = data.findIndex(
        (userData) => userData.id === Number(userId)
      );
      data[userIndex].list = [...tasks, { text: input }];

      localStorage.setItem("Data", JSON.stringify(data));
    }
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
    const userIndex = data.findIndex((item) => item.id === userId);

    data[userIndex].list = tasks.filter((_, i) => i !== index);
    localStorage.setItem("Data", JSON.stringify(data));
  };

  return (
    <div>
      <div className=" mt-[100px] mx-auto mb-[20px] bg-[#FFE6C9] text-center w-[22em] text-[#525252]">
        <div className="border bg-white text-start p-6 rounded-lg shadow-[0px_0px_45px_0px_#E1C2A8]">
          <h1 className="text-2xl font-semibold tracking-wide mb-4 ">
            To-Do List
          </h1>
          <div className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Add a new task"
              className="border outline-none p-1 rounded-md w-full placeholder:text-[15px] mb-5"
            />
            <button
              onClick={handleAddTask}
              className="absolute right-2 top-1"
              data-tooltip-id="add"
            >
              <AddIcon />
            </button>
            <ReactTooltip id="add" place="right" content="Add" />
          </div>
          <ul className=" ">
            {tasks.map((task, index) => (
              <li
                key={index}
                className="mb-3 flex justify-between bg-gray-100 p-1 pb-[6px] rounded-lg shadow-[0px_0px_15px_-3px_rgba(0,0,0,0.1)]"
              >
                <span className="pl-2">{task.text}</span>
                <button
                  onClick={() => handleDeleteTask(index)}
                  className="pr-1 hover:text-red-400"
                  data-tooltip-id="delete"
                >
                  <DeleteOutlineIcon />
                </button>
                <ReactTooltip id="delete" content="Delete" place="bottom" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
