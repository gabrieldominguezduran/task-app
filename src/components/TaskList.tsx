import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { Task } from "../models";
import "./styles.css";
import TaskCard from "./TaskCard";

interface Props {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  inProgressTask: Task[];
  setInProgressTask: React.Dispatch<React.SetStateAction<Task[]>>;
  completedTask: Task[];
  setCompletedTask: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskList = ({
  tasks,
  setTasks,
  inProgressTask,
  setInProgressTask,
  completedTask,
  setCompletedTask,
}: Props) => {
  return (
    <div className="container">
      <Droppable droppableId="newTasks">
        {(provider) => (
          <div
            className="tasks new"
            ref={provider.innerRef}
            {...provider.droppableProps}
          >
            <span className="tasks__heading">New</span>
            {tasks.map((task, index) => (
              <TaskCard
                index={index}
                task={task}
                key={task.id}
                tasks={tasks}
                setTasks={setTasks}
              />
            ))}
            {provider.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="progressTasks">
        {(provider) => (
          <div
            className="tasks progress"
            ref={provider.innerRef}
            {...provider.droppableProps}
          >
            <span className="tasks__heading">In progress</span>
            {inProgressTask.map((task, index) => (
              <TaskCard
                index={index}
                task={task}
                key={task.id}
                tasks={inProgressTask}
                setTasks={setInProgressTask}
              />
            ))}
            {provider.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="doneTasks">
        {(provider) => (
          <div
            className="tasks done"
            ref={provider.innerRef}
            {...provider.droppableProps}
          >
            <span className="tasks__heading">Done</span>
            {completedTask.map((task, index) => (
              <TaskCard
                index={index}
                task={task}
                key={task.id}
                tasks={completedTask}
                setTasks={setCompletedTask}
              />
            ))}
            {provider.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TaskList;
