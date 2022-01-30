import React, { useEffect, useRef, useState } from "react";
import { Task } from "../models";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

import "./styles.css";
import { Draggable } from "react-beautiful-dnd";

interface Props {
  index: number;
  task: Task;
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskCard = ({ index, task, tasks, setTasks }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTask, setEditTask] = useState<string>(task.task);

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, task: editTask } : task))
    );
    setEdit(false);
  };
  const handleDelete = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);
  return (
    <Draggable draggableId={task.id.toString()} index={index}>
      {(provider) => (
        <form
          className="tasks__card"
          onSubmit={(e) => handleEdit(e, task.id)}
          {...provider.draggableProps}
          {...provider.dragHandleProps}
          ref={provider.innerRef}
        >
          {edit ? (
            <input
              ref={inputRef}
              className="tasks__card-input"
              type="text"
              value={editTask}
              onChange={(e) => setEditTask(e.target.value)}
            />
          ) : (
            <span className="tasks__card-text">{task.task}</span>
          )}

          <div>
            <span className="icon">
              <AiFillEdit
                onClick={() => {
                  if (!edit) {
                    setEdit(!edit);
                  }
                }}
              />
            </span>
            <span className="icon" onClick={() => handleDelete(task.id)}>
              <AiFillDelete />
            </span>
          </div>
        </form>
      )}
    </Draggable>
  );
};

export default TaskCard;
