import React, { useRef } from "react";
import "./styles.css";

interface Props {
  task: string;
  setTask: React.Dispatch<React.SetStateAction<string>>;
  handleAddTask: (e: React.FormEvent) => void;
}

const InputForm = ({ task, setTask, handleAddTask }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className="form"
      onSubmit={(e) => {
        handleAddTask(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        type="input"
        className="form__input"
        placeholder="Enter a task name"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button className="form__btn" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputForm;
