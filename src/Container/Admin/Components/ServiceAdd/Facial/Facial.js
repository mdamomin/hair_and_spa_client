import React from 'react';

export default function Facial({ caseValue, setCaseValue }) {
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
        placeholder='FACIAL TEXT'
        required
        name='categoryName'
        onChange={handleInput}
      />
      <input
        className=' form-control mb-2'
        type='number'
        placeholder='FACIAL TIME'
        required
        name='categoryTime'
        onChange={handleInput}
      />
      <input
        className=' form-control mb-2'
        type='number'
        placeholder='FACIAL PRICE'
        required
        name='categoryValue'
        onChange={handleInput}
      />
    </div>
  );
}
