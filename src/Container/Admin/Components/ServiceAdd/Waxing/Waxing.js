import React from 'react';

const Waxing = ({ caseValue, setCaseValue }) => {
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
        name='categoryName'
        placeholder='WAXING TEXT'
        onChange={handleInput}
        required
      />
      <input
        className=' form-control mb-2'
        type='text'
        pattern='[0-9\-]+'
        name='categoryValue'
        placeholder='WAXING VALUE'
        onChange={handleInput}
        required
      />
    </div>
  );
};

export default Waxing;
