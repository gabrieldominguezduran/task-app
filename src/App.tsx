import React, { useState } from "react";
import "./App.css";

import InputForm from "./components/InputForm";
import TaskList from "./components/TaskList";
import { Task } from "./models";

const App = () => {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();

    if (task) {
      setTasks([...tasks, { id: Date.now(), task }]);
      setTask("");
    }
  };

  return (
    <div className="App">
      <span className="heading">Tasks</span>
      <InputForm task={task} setTask={setTask} handleAddTask={handleAddTask} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default App;
