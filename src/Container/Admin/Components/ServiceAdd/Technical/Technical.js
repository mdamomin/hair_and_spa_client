import React from 'react';

const Technical = ({ caseValue, setCaseValue }) => {
  const handleInput = (e) => {
    const categoryName = e.target.name;
    const categoryValue = e.target.value;
    const newData = { ...caseValue };
    newData[categoryName] = categoryValue;
    setCaseValue(newData);
  };
  return (
    <div>
      <input
        className=' form-control mb-2'
        type='text'
        placeholder='TECHNICAL Category'
        name='category'
        onChange={handleInput}
      />
      <input
        className=' form-control mb-2'
        type='text'
        name='categoryName'
        placeholder='TECHNICAL Category Name'
        onChange={handleInput}
        required
      />
      <input
        className=' form-control mb-2'
        type='text'
        name='categoryValue'
        pattern='[0-9\-]+'
        placeholder='TECHNICAL VALUE'
        onChange={handleInput}
        required
      />
    </div>
  );
};

export default Technical;
