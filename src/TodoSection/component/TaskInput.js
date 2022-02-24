import React from 'react';
import '../Todo.css';

const TaskInput = ({ setUserInput, addTask, userInput }) => {
  return (
    <div className='userInput d-flex bg-secondary px-2 rounded container-fluid  '>
      <i
        className={`bi bi-plus fs-3 text-light $`}
        type='button'
        onClick={addTask}></i>
      <input
        type='text'
        className='form-control border-0 bg-secondary text-light  '
        placeholder='Add a Task'
        onChange={(e) => setUserInput(e.target.value)}
      />
    </div>
  );
};

export default TaskInput;
