import React, { useState } from "react";
import ToDos from "./toDos";

function toDoInput() {
  const [input, setInput] = useState("");
  const [value, setvalue] = useState([]);
  const[update,setUpdate]=useState(-1)

  function addTask(e) {
    if (!input) return 0;
    setInput(e);
    setvalue([...value, input]);
    setInput("");
  }

  function removeTask(doneTasks) {
    setvalue(value.filter((task) => task !== doneTasks));
  }

  return (
    <div className="flex justify-center w-full pt-8">
      <div className="bg-white  w-[60%] shadow-lg flex flex-col items-center rounded-[10px]">
        <h1 className="font-bold text-center text-xl mt-3 ">To Do List</h1>
        <input
          value={input}
          className="shadow-md outline-none mt-3 block text-center w-[80%] p-2  border rounded-md"
          type="text"
          placeholder="Add a task here..."
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="ttext-center p-2 bg-slate-300 mt-3 rounded font-bold-900 w-[20%]"
          onClick={addTask}
        onKeyDown={addTask}
        >
          Add
        </button>
        {value.map((eachValue, index) => (
          <ToDos key={index} toDoData={eachValue} delFn={removeTask} />
        ))}
        {/* <ToDos/> */}
      </div>
    </div>
  );
}
export default toDoInput;
