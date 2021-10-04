import React from 'react';
import FormJoin from '../form/FormJoin';
import './joinus.css'

const JoinUs = () => {
    return (
        <div>
             <div className=" mx-auto custom-border h-25 p-3 my-3 rounded-3">
                <h4> <span className="fs-1 fw-bold text-danger">35% OFF - </span> only for Covid situtions.</h4>
             </div>
              <div className="custom-heding w-50 mx-auto mb-3">
                <h3 className="custom-text">Join With Us For Your Bright Future</h3>
             </div>
             <div className="container custom-bg w-50 mx-auto">
             <FormJoin></FormJoin>
             </div>
        </div>
    );
};

export default JoinUs;