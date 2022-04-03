import React from 'react';

export default function Adult({ caseValue, setCaseValue }) {
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
        placeholder='ADULT TEXT'
        onChange={handleInput}
        required
      />
      <input
        className=' form-control mb-2'
        type='number'
        name='categoryValue'
        placeholder='ADULT VALUE'
        onChange={handleInput}
        required
      />
    </div>
  );
}
