import React from 'react';
import './description.css';
import dummy_data from './constants';

const DescriptioNbox = () => {
  return (
    <>
    <div className='desc'>

        {
            dummy_data.map((item)=> (
                <div className="icon-with-heading">
                <div className="icon-container">
                  <div className="icon">{item.icon}</div>
                </div>
                <div className="content">
                  <h3 className="heading">{item.title}</h3>
                  <p className="description">{item.para}</p>
                </div>
              </div>
            ))
        }


    </div>

    </>
  );
};

export default DescriptioNbox;
