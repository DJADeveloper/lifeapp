import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {
  ButtonGroup,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height: 350,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({
  setCategory,
  setUserVendorItem,
  setUserExpenseItem,
  onClick,
  category,
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleAddClose = () => {};

  return (
    <div>
      <Button variant='contained' onClick={handleOpen} className='mx-1'>
        Add {category}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Enter Expense
          </Typography>
          <Divider />
          <FormControl fullWidth className=' '>
            <div className='d-flex mt-4'>
              <Select
                fullWidth
                color='secondary'
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                label='category'
                focused
                placeholder='Categories'
                onChange={(e) => setCategory(e.target.value)}
                // onChange={handleChange}
              >
                <MenuItem value='food'>Food</MenuItem>
                <MenuItem value='gas'>Gas</MenuItem>
                <MenuItem value='bills'>Bills</MenuItem>
                <MenuItem value='debt'>Debt</MenuItem>
                <MenuItem value='Misc'>Misc</MenuItem>
              </Select>

              <TextField
                fullWidth
                label='Expense'
                color='secondary'
                focused
                className='ms-3'
                placeholder='Enter Expense'
                onChange={(e) => setUserExpenseItem(e.target.value)}
              />
            </div>
          </FormControl>

          <TextField
            fullWidth
            label='Vendor'
            color='secondary'
            focused
            className='mt-3'
            placeholder='Enter Vendor'
            onChange={(e) => setUserVendorItem(e.target.value)}
          />
          <ButtonGroup
            disableElevation
            variant='contained'
            color='secondary'
            className='mt-5 d-flex justify-content-end'>
            <Button className='me-1' onClick={onClick}>
              Close
            </Button>
            <Button onClick={onClick}>Add {category}</Button>
          </ButtonGroup>
        </Box>
      </Modal>
    </div>
  );
}
