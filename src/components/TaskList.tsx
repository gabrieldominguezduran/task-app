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
    <div className="container">
      <div className="tasks new">
        <span className="tasks__heading">New</span>
        {tasks.map((task) => (
          <TaskCard
            task={task}
            key={task.id}
            tasks={tasks}
            setTasks={setTasks}
          />
        ))}
      </div>

      <div className="tasks progress">
        <span className="tasks__heading">In Progess</span>
        {tasks.map((task) => (
          <TaskCard
            task={task}
            key={task.id}
            tasks={tasks}
            setTasks={setTasks}
          />
        ))}
      </div>

      <div className="tasks done">
        <span className="tasks__heading">Done</span>
        {tasks.map((task) => (
          <TaskCard
            task={task}
            key={task.id}
            tasks={tasks}
            setTasks={setTasks}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
