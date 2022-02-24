import React from 'react';
import ExpenseItem from './ExpenseItem';
import '../Finance.css';
import { Button, Modal } from '@mui/material';
import { AddCircle } from '@mui/icons-material';
import NewModal from './Modal';
import { height } from '@mui/system';

const Transaction = ({
  expenseItem,
  category,
  sectionName,
  color,
  onClick,
  margin,
  height,
  setUserExpenseItem,
  setUserVendorItem,
  setCategory,
  newOnClick,
}) => {
  return (
    <div
      className={`mt-2  Transaction  border-0 container-fluid ${margin}  ${height} p-4 rounded-3 ${color} `}>
      <div className='d-flex justify-content-between justify-content-center align-item-center position-fixed-top'>
        <h4 className='text-start fw-bold text-light'>{sectionName}</h4>
        <p className='text-dark fw-light'>View All</p>
      </div>
      <div className='overflow-scroll'>
        {expenseItem.map((item) => (
          <ExpenseItem
            vendor={item.vendor}
            expense={item.expense}
            category={item.category}
          />
        ))}
      </div>

      <div className='d-flex justify-content-end align-items-center mt-2'>
        {/* <button
          type='button'
          size='large'
          onClick={onClick}
          className='AddBtn btn'
          data-bs-toggle='modal'
          data-bs-target='#exampleModal'>
          <AddCircle outlined fontSize='large' color='white' />
        </button> */}
        <NewModal
          setUserExpenseItem={setUserExpenseItem}
          setCategory={setCategory}
          setUserVendorItem={setUserVendorItem}
          onClick={newOnClick}
          category={category}
        />
      </div>
    </div>
  );
};

export default Transaction;
