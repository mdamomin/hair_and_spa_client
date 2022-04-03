import React from 'react';

const BodyTreatment = ({ caseValue, setCaseValue }) => {
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
        placeholder='BODY TREATMENT TEXT'
        name='categoryName'
        onBlur={handleInput}
        required
      />
      <input
        className=' form-control mb-2'
        type='number'
        placeholder='BODY TREATMENT TIME'
        name='categoryTime'
        onChange={handleInput}
        required
      />
      <input
        className=' form-control mb-2'
        type='number'
        placeholder='BODY TREATMENT PRICE'
        name='categoryValue'
        onChange={handleInput}
        required
      />
    </div>
  );
};

export default BodyTreatment;
