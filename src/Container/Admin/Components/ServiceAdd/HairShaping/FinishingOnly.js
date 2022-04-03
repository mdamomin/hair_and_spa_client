import React from 'react';

export default function FinishingOnly({ caseValue, setCaseValue }) {
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
        placeholder='FINISHING ONLY TEXT'
        onChange={handleInput}
        required
      />
      <input
        className=' form-control mb-2'
        type='number'
        name='categoryValue'
        placeholder='FINISHING ONLY PRICE'
        onChange={handleInput}
        required
      />
    </div>
  );
}
