import React from 'react'

const Inputtype = ({labelText,lableFor,inputType,value,onChange,name}) => {
  return (
    <>
        <div className="mb-1">
    <label htmlFor={lableFor} className="form-label">{labelText}</label>
    <input type={inputType} 
    className="form-control"
    name={name}
    value={value}
    onChange={onChange} />
  </div>
    </>
  );
};

export default Inputtype