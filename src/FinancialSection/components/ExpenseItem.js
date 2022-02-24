import { Category } from '@mui/icons-material';
import React from 'react';

const ExpenseItem = ({ vendor, expense, category }) => {
  return (
    <div className='border container-fluid rounded-3  ExpenseItem my-1 shadow-sm'>
      <div className=' d-flex container justify-content-between align-items-center'>
        <div className='d-flex justify-content-between  align-items-center '>
          <i className='bi bi-alarm-fill fs-4 me-2 '></i>
          <div>
            <p className='mt-4 fw-bold'>{vendor}</p>
          </div>
        </div>
        <div className='d-flex justify-content-center align-items-end mt-3 '>
          <p className='fs-5 '>-${expense}</p>
        </div>
      </div>
    </div>
  );
};

export default ExpenseItem;
