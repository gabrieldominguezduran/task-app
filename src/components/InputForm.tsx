import React from 'react';
import './styles.css'

interface Props{
  task: string;
  setTask: React.Dispatch<React.SetStateAction<string>>;
  handleAddTask: (e: React.FormEvent) => void;
}

const InputForm = ({task, setTask, handleAddTask}: Props) => {
  return <form className='form' onSubmit={handleAddTask}>
    <input type="input" className='form__input'  placeholder='Enter a task name' value={task} onChange={(e) => setTask(e.target.value) }/>
    <button className='form__btn' type='submit'>Go</button>
  </form>
};

export default InputForm;
