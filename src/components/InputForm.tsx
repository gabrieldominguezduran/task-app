import React from 'react';
import './styles.css'

interface Props{
  task: string;
  setTask: React.Dispatch<React.SetStateAction<string>>
}

const InputForm = ({task, setTask}: Props) => {
  return <form className='form'>
    <input type="input" className='form__input'  placeholder='Enter a task name' value={task} onChange={(e) => setTask(e.target.value) }/>
    <button className='form__btn' type='submit'>Go</button>
  </form>
};

export default InputForm;
