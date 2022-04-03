import React, { useState } from 'react';
import Adult from './Adult';
import Kids from './Kids';
import FinishingOnly from './FinishingOnly';

const HairShaping = ({ caseValue, setCaseValue }) => {
  const [state, setState] = useState('');

  const handleOption = (e) => {
    setState(e.target.value);
    const category = e.target.name;
    const value = e.target.value;
    const newData = { ...caseValue };
    newData[category] = value;
    setCaseValue(newData);
  };
  return (
    <div>
      <select
        onChange={handleOption}
        name='category'
        className=' form-control mb-2 form-select'
      >
        <option defaultValue>Choose...</option>
        <option value='ADULT'>ADULT</option>
        <option value='KIDS'>KIDS</option>
        <option value='FINISHING ONLY'>FINISHING ONLY</option>
      </select>
      {(() => {
        switch (state) {
          case 'KIDS':
            return (
              <Kids caseValue={caseValue} setCaseValue={setCaseValue}></Kids>
            );
          case 'FINISHING ONLY':
            return (
              <FinishingOnly
                caseValue={caseValue}
                setCaseValue={setCaseValue}
              ></FinishingOnly>
            );
          default:
            return (
              <Adult caseValue={caseValue} setCaseValue={setCaseValue}></Adult>
            );
        }
      })()}
    </div>
  );
};

export default HairShaping;
