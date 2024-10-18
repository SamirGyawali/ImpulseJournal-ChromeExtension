import React from "react";
import { useState } from "react";
import './toogle.scss';

const Toggle = () => {
    const [isChecked, setIsChecked] = useState(false);
    const handleToggle = ()=>{
        setIsChecked(!isChecked);
    };
  return (
      <div className="toogle">
        <input type="checkbox" className="checkbox" id='toogle' checked={isChecked} onChange={handleToggle}/>
        <label htmlFor="toogle" className="label"></label>
      </div>
  );
};

export default Toggle;
