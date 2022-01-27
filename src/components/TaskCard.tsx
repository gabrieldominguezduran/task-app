import React from "react";
import { Task } from "../models";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

import "./styles.css";

interface Props {
  task: Task;
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskCard = ({ task, tasks, setTasks }: Props) => {
  return (
    <form className="tasks__card">
      <span className="tasks__card-text">{task.task}</span>
      <div>
        <span className="icon">
          <AiFillEdit />
        </span>
        <span className="icon">
          <AiFillDelete />
        </span>
      </div>
    </form>
  );
};

export default TaskCard;
