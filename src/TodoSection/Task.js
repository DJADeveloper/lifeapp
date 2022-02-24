import React, { useState } from 'react';

const Task = ({ singleTask, onClick, taskItem }) => {
  const [starClicked, setStarClicked] = useState(false);
  const [favList, setFavList] = useState([]);

  const favorited = () => {
    setStarClicked(!starClicked);
    setFavList([...favList, taskItem]);
  };

  console.log(favList);
  return (
    <div className='d-flex Color2 container-fluid  rounded justify-content-between align-items-center mb-1 '>
      <div className='d-flex align-items-center'>
        <input className='form-check-input' type='radio' />
        <div className='d-flex flex-column'>
          <p className='pt-3 text-light ms-3 fw-bolder'>{singleTask}</p>
        </div>
      </div>
      <div>
        <i
          className={`bi ${
            starClicked === true ? 'bi-star-fill' : 'bi-star'
          } text-light mx-2`}
          onClick={favorited}></i>
        <i className='bi bi-trash text-light' onClick={onClick}></i>
      </div>
    </div>
  );
};

export default Task;
