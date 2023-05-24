import React from 'react';
import './withdraw.css';
import dummy_data from './constants';
const Withdraw = () => {
  return (
    <div className="withdraw-box">
      <div className="row">

        {
          dummy_data.map( (item) => (
            <div className={`column ${item.cl && 'item'}`}>
            <p className="label">{item.title}</p>
            <p className="value">{item.amount}</p>
          </div>
          ))
        }

      </div>
      <div className="row withdrawbtn">
        <button className="withdraw-button">Withdraw Application</button>
      </div>
    </div>
  );
};

export default Withdraw;
