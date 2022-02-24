import { AddOutlined } from '@mui/icons-material';
import { Button, Input } from '@mui/material';
import { isDisabled } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react';
import TaskInput from './component/TaskInput';
import Task from './Task';
import './Todo.css';

const TodoHome = () => {
  // States -------------
  const [taskList, setTaskList] = useState([
    { id: '0', todo: 'Take out Trash' },
    { id: '1', todo: 'Clean Car' },
    { id: '2', todo: 'Valentines Day' },
  ]);
  const [userInput, setUserInput] = useState('');

  const [favoriteList, setFavoriteList] = useState([]);

  // FUNCTIONS ------------
  // Add Task Function
  const addTask = (e) => {
    e.preventDefault();
    setTaskList([...taskList, { todo: userInput }]);
    setUserInput('');
  };

  const addToFavs = () => {};

  // Delete Task Function
  const deleteTask = (id) => {
    const newTaskList = taskList.filter((task) => task.id !== id);
    setTaskList(newTaskList);
  };

  // const favoriteTask = (id) => {
  //   const favoriteTaskList = taskList.filter((task) => task.id !== id);
  //   setTaskList(newTaskList);
  // };

  // Current Day Function
  var today = new Date();
  var day = today.getDay();
  var month = today.getMonth();
  var date = today.getDate();
  console.log(today.getMonth());

  console.log(date);

  var monthList = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  var dayList = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday ',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  var currentDay = dayList[day];
  var currentMonth = monthList[month];

  return (
    <div
      className='d-flex flex-column align-items-center container-fluid p-3m  rounded-3 Todo justify-content-center 
    '>
      <h1 className='text-secondary text-center'>Tasks</h1>
      <p>
        {currentDay}, {currentMonth} {date}
      </p>
      {/* {taskList.map((task) => (
        <Task singleTask={task.todo} />
      ))} */}

      <ul className='list-unstyled container-fluid TodoContainer rounded-3 shadow-lg p-4'>
        {taskList.map((task) => (
          <li className='list-item'>
            <Task
              key={task.id}
              singleTask={task.todo}
              onClick={() => deleteTask(task.id)}
              // taskItem='#'
            />
          </li>
        ))}
      </ul>
      <form onSubmit={addTask} className='d-flex'>
        {/* <TaskInput
          setUserInput={setUserInput}
          addTask={addTask}
          deleteTask={deleteTask}
          userInput={userInput}
        /> */}
        <div className='d-flex mb-3 container-fluid input mt-3'>
          <div className='container  d-flex'>
            <Input
              fullWidth
              className='userInput  d-flex align-items-end justify-content-end input container-fluid mx-1'
              onChange={(e) => setUserInput(e.target.value)}
              value={userInput}
              placeholder='Enter Todo...'
            />
            <Button
              className='mb-3'
              variant='outlined'
              color={userInput ? 'secondary' : 'inherit'}
              onClick={userInput ? addTask : isDisabled}>
              Add
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TodoHome;
