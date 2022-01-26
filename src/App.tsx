import React, { useState } from 'react';
import './App.css';

import InputForm from './components/InputForm';

const App = () =>{
  const [task, setTask] = useState<string>("")
  
  return (
    <div className="App">
      <span className="heading">Tasks</span>
        <InputForm task={task} setTask={setTask}/>
    </div>
  );
}

export default App;
