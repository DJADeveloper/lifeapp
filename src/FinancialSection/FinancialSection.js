import React, { useState, useEffect } from 'react';
import Transaction from './components/Transaction';
import './Finance.css';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {
  AddCircle,
  CreditCard,
  Money,
  MoneyOff,
  Paid,
  ShowChart,
} from '@mui/icons-material';
import {
  Button,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import Modal from './components/Modal';
import InputModal from './components/Modal';
import Form from './components/Form';

const FinancialSection = () => {
  const [expenseItem, setExpenseItem] = useState([
    {
      id: 0,
      category: 'food',
      vendor: 'Dominos',
      expense: '400',
    },
    {
      id: 0,
      category: 'food',
      vendor: 'Dominos',
      expense: '400',
    },
    {
      id: 0,
      category: 'food',
      vendor: 'Dominos',
      expense: '400',
    },
  ]);
  const [totalExpense, setTotalExpense] = useState(0);
  const sumOfExpenses = expenseItem
    .map((item) => Number(item.expense))
    .reduce((prev, curr) => prev + curr, totalExpense);

  const [income, setIncome] = useState(Number('100000'));

  const [totalBalance, setTotalBalance] = useState(income - sumOfExpenses);
  const [sumOfTotalExpenses, setSumOfTotalExpenses] = useState();
  const [userExpenseItem, setUserExpenseItem] = useState(0);
  const [userVendorItem, setUserVendorItem] = useState(0);
  const [category, setCategory] = useState('');
  const [open, setOpen] = React.useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  console.log(category);
  console.log(userExpenseItem);
  console.log(userVendorItem);

  const sumOfTotalBalance = income - sumOfExpenses;

  const addExpenseItem = (e) => {
    e.preventDefault();
    setExpenseItem([
      ...expenseItem,
      { category: category, vendor: userVendorItem, expense: userExpenseItem },
    ]);
    setTotalExpense(sumOfExpenses);
    setTotalBalance(income - sumOfExpenses);
    userExpenseItem.value = '';
  };

  useEffect(() => {
    setTotalExpense(sumOfExpenses);
    setTotalBalance(income - sumOfExpenses);
  }, []);

  return (
    <div className='p-3'>
      <div
        className='p-3 rounded shadow-lg
         Finance  '
        style={{ height: 'auto' }}>
        <div className='navSection d-flex justify-content-between'>
          <div className='d-flex'>
            <AccountCircleIcon color='primary' />
            <div className='d-flex mx-1 align-items-center '>
              <p className='text-secondary fw-lighter me-1'>Welcome </p>
              <p className=''>Dj</p>
            </div>
          </div>
          <MenuIcon />
        </div>
        <div
          className={`p-3 ${
            totalBalance < 0 ? 'Color' : 'Color2'
          }  rounded-3 text-light`}>
          <p>Total Balance</p>
          <h1 className=''>${totalBalance}</h1>
          <div className='d-flex justify-content-between mx-2 my-5'>
            <div>
              <span>
                <Paid />
              </span>
              <p>Income</p>
              <p className=' fs-4'>${income}.00</p>
            </div>
            <div>
              <span>
                <MoneyOff />
              </span>
              <p>Expenses</p>
              <p className=' fs-4'>${totalExpense}.00</p>
            </div>
            <div>
              <span>
                <ShowChart />
              </span>
              <p>Investments</p>
              <p className=' fs-4'>$100,000.00</p>
            </div>
            <div>
              <span>
                <CreditCard />
              </span>
              <p>Debt</p>
              <p className=' fs-4'>$20,000.00</p>
            </div>
          </div>
        </div>

        <div className='l p-1 Sections'>
          <Transaction
            expenseItem={expenseItem}
            expense={userExpenseItem}
            vendor={userVendorItem}
            category='Transaction'
            sectionName='Transactions'
            color={totalBalance < 0 ? 'Color' : 'Color2'}
            onClick={handleToggle}
            setUserExpenseItem={setUserExpenseItem}
            setCategory={setCategory}
            setUserVendorItem={setUserVendorItem}
            newOnClick={addExpenseItem}
          />
          <Form
            onClick={handleClose}
            open={open}
            addExpenseItem={addExpenseItem}
            setCategory={setCategory}
            setUserVendorItem={setUserVendorItem}
            setUserExpenseItem={setUserExpenseItem}
          />
          <div className='d-flex justify-content-between g-4'>
            <Transaction
              expenseItem={expenseItem}
              expense={userExpenseItem}
              vendor={userVendorItem}
              category='Investments'
              sectionName='Investments'
              color={totalBalance < 0 ? 'Color' : 'Color2'}
              margin='me-1'
            />
            <Transaction
              expenseItem={expenseItem}
              expense={userExpenseItem}
              vendor={userVendorItem}
              category='Debt'
              sectionName='Debt'
              color={totalBalance < 0 ? 'Color' : 'Color2'}
              margin='ms-1'
            />
          </div>
        </div>
        <form
          className='d-flex justify-content-between container-fluid Form mt-3'
          onSubmit={addExpenseItem}>
          <FormControl style={{ width: '75%' }} color='secondary'>
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
          <TextField
            fullWidth
            label='Vendor'
            color='secondary'
            focused
            className='mx-2'
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

        {/* <InputModal /> */}
      </div>
    </div>
  );
};

export default FinancialSection;
