import React from "react";
import { Task } from "../models";
import "./styles.css";
import TaskCard from "./TaskCard";

interface Props {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskList = ({ tasks, setTasks }: Props) => {
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id} tasks={tasks} setTasks={setTasks} />
      ))}
    </div>
  );
};

export default TaskList;
