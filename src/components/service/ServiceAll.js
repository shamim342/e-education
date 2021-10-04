import React from 'react';

const ServiceAll = (props) => {
    const {name , url , price,learn, runtime}=props.course;
    return (
        <div className="">
            <div className="card mb-3  bg-info container " >
  <div className="row g-0">
    <div className="col-md-4">
      <img src={url} className="img-fluid rounded-start" alt="google-img"/>
    </div>
    <div className="col-md-8 my-auto">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text"><span className='text-white fs-5'>{learn}</span></p>
        <p className="card-text"><small className="">Time duration of course {runtime} month</small></p>
        <h5>Price : <span className='text-danger fw-bold'>{price}k</span> BDT</h5>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default ServiceAll;