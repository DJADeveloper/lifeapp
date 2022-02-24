import { AddCircle } from '@mui/icons-material';
import {
  Backdrop,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import React from 'react';

const Form = ({
  onClick,
  open,
  addExpenseItem,
  setCategory,
  setUserVendorItem,
  setUserExpenseItem,
  sectionName,
}) => {
  return (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={onClick}>
        <form
          className='  bg-light  bg-opacity-80 rounded p-3 '
          onSubmit={addExpenseItem}>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title'>Add {sectionName}</h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'></button>
            </div>
            <div className='modal-body'>
              <FormControl
                fullWidth
                color='secondary'
                className='p-5 container-fluid'>
                <TextField
                  fullWidth
                  label='Vendor'
                  color='secondary'
                  focused
                  className='container-fluid'
                  placeholder='Enter Vendor'
                  onChange={(e) => setUserVendorItem(e.target.value)}
                />
                <TextField
                  fullWidth
                  label='Expense'
                  color='secondary'
                  focused
                  placeholder='Enter Expense'
                  onChange={(e) => setUserExpenseItem(e.target.value)}
                />
                <InputLabel id='demo-simple-select-label'>Category</InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  label='Age'
                  onChange={(e) => setCategory(e.target.value)}
                  // onChange={handleChange}
                >
                  <MenuItem value='food'>Food</MenuItem>
                  <MenuItem value='gas'>Gas</MenuItem>
                  <MenuItem value='bills'>Bills</MenuItem>
                  <MenuItem value='debt'>Debt</MenuItem>
                  <MenuItem value='Misc'>Misc</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-secondary'
                data-bs-dismiss='modal'>
                Close
              </button>
              <button type='button' className='btn btn-primary'>
                Save changes
              </button>
            </div>
          </div>

          <div className='d-flex justify-content-end'>
            <button
              type='submit'
              className='AddBtn btn d-flex justify-content-end'>
              <AddCircle
                fontSize='large'
                color='secondary'
                onClick={addExpenseItem}
              />
            </button>
          </div>
        </form>
      </Backdrop>
    </div>
  );
};

export default Form;
