import React from 'react';

export default function Kids({ caseValue, setCaseValue }) {
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
        placeholder='KIDS TEXT'
        name='categoryName'
        onChange={handleInput}
        required
      />
      <input
        className=' form-control mb-2'
        type='text'
        placeholder='KIDS AGE'
        name='ageLimit'
        pattern='[0-9\-]+'
        onChange={handleInput}
        required
      />
      <input
        className=' form-control mb-2'
        type='number'
        placeholder='KIDS PRICE'
        name='categoryValue'
        onChange={handleInput}
        required
      />
    </div>
  );
}
