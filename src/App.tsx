import React, { ChangeEvent, FC, useState } from 'react';
import './App.css';

const App: FC = () => {
  const [task, setTask] = useState<string>('');
  const [deadline, setDeadline] = useState<number>(0);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === 'task') {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  };
  return (
    <div className='App'>
      <div className='header'>
        <div className='inputContainer'>
          <input
            type='text'
            placeholder='Task..'
            name='task'
            value={task}
            onChange={handleChange}
          />
          <input
            type='number'
            placeholder='Deadline (in Days)...'
            name='deadline'
            value={deadline}
            onChange={handleChange}
          />
          <button onClick={addTask}>Add Task</button>
        </div>
      </div>
    </div>
  );
};

export default App;
