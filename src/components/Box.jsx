import React from 'react';
import './box.css';

const Box = ({heading, myclass}) => {
  return (
    <div className="box">
      <p className={`box-content ${myclass === true && 'color'}`}>
        {heading}
      </p>
    </div>
  );
};

export default Box;
