import React from 'react';

const Massage = ({ caseValue, setCaseValue }) => {
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
        placeholder='MASSAGE TEXT'
        name='categoryName'
        onChange={handleInput}
        required
      />
      <input
        className=' form-control mb-2'
        type='number'
        placeholder='MASSAGE TIME'
        name='categoryTime'
        onChange={handleInput}
        required
      />
      <input
        className=' form-control mb-2'
        type='number'
        placeholder='MASSAGE PRICE'
        name='categoryValue'
        onChange={handleInput}
        required
      />
    </div>
  );
};

export default Massage;
