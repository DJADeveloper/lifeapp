import React, { useState } from 'react';
import { connect } from 'react-redux';

const TodoForm = () => {
  const [inputValue, setInputValue] = useState('');
  return (
    <div className='d-flex'>
      <input type='text' className='form-control' />
      <button className='btn btn-primary'>Add</button>
    </div>
  );
};

export default TodoForm;
