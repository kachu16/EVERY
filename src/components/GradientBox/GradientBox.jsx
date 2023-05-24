import React from 'react';
import './gradient.css';
import dummy_data from './constants';
import Box from "../Box";

const GradientBox = () => {
  return (
    <>
    <Box heading="Friends who Enrolled(3)" style={{ 
       fontWeight: '400',
  fontSize: '20px',
  lineHeight: '30px',
  color:  '#800080'}}/>
          <div className='container'>
      {
        dummy_data.map((item)=>(
          <div className="content-box">
          <div className="header">
            <h2 className="name">{item.name}</h2>
            <p className="date">{item.date}</p>
          </div>
          <div className="section">
            <h3 className="heading">Courses Enrolled ({item.num})</h3>
            <ul className="course-list">
              {
                item.courses.map((it)=> <li className="course">{it}</li> )
              }
              
            </ul>
          </div>
          <div className="footer">
            <p className="referral-amount">Referral Amount <span className='amount'>{item.amount}</span></p>

          </div>
        </div>
        ))
      }
    </div>
    </>

  );
};

export default GradientBox;
