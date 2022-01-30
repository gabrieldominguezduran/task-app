import React, { useState } from "react";
import "./App.css";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

import InputForm from "./components/InputForm";
import TaskList from "./components/TaskList";
import { Task } from "./models";

const App = () => {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [inProgressTask, setInProgressTask] = useState<Task[]>([]);
  const [completedTask, setCompletedTask] = useState<Task[]>([]);

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();

    if (task) {
      setTasks([...tasks, { id: Date.now(), task }]);
      setTask("");
    }
  };

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    let add,
      newTask = tasks,
      progress = inProgressTask,
      done = completedTask;

    if (source.droppableId === "newTasks") {
      add = newTask[source.index];
      newTask.splice(source.index, 1);
    } else if (source.droppableId === "progressTasks") {
      add = progress[source.index];
      progress.splice(source.index, 1);
    } else {
      add = done[source.index];
      done.splice(source.index, 1);
    }

    if (destination.droppableId === "newTasks") {
      newTask.splice(destination.index, 0, add);
    } else if (destination.droppableId === "progressTasks") {
      progress.splice(destination.index, 0, add);
    } else {
      done.splice(destination.index, 0, add);
    }
    setInProgressTask(progress);
    setCompletedTask(done);
    setTasks(newTask);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <span className="heading">Tasks</span>
        <InputForm
          task={task}
          setTask={setTask}
          handleAddTask={handleAddTask}
        />
        <TaskList
          tasks={tasks}
          setTasks={setTasks}
          inProgressTask={inProgressTask}
          setInProgressTask={setInProgressTask}
          completedTask={completedTask}
          setCompletedTask={setCompletedTask}
        />
      </div>
    </DragDropContext>
  );
};

export default App;
