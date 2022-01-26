import React, { useState } from 'react';
import './App.css';

import InputForm from './components/InputForm';
import { Task } from './model';


const App = () =>{
  const [task, setTask] = useState<string>("")
  const [tasks, setTasks] = useState<Task[]>([])

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault()

    if (task) {
      setTasks([...tasks, {id: Date.now(), task, isDone: false}])
      setTask("")
    }
  }
  console.log(tasks);
  
  return (
    <div className="App">
      <span className="heading">Tasks</span>
        <InputForm task={task} setTask={setTask} handleAddTask={handleAddTask}  />
    </div>
  );
}

export default App;
