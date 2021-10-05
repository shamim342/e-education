import Button from 'react-bootstrap/Button';
import React from 'react';
import img1 from '../../images/img1.jpg';
// import img2 from '../../images/img2.jpg';
import './home.css';
import Slider from '../slider/Slider';
import ProvideService from '../provideService/ProvideService';
import { useHistory } from 'react-router';

const Home = () => {
    const history = useHistory();
    const handleToCourses=()=>{
        history.push('/services');
    }
    const handleToUpcomingCourses=()=>{
        history.push('/upcomingCourses');
    }
    return (
        <div className="container">
           <div className="row mt-3 ">
               <div className="col-12 col-md-6">
                    <img src={img1} className='img-fluid' alt="" />
               </div>
               <div className="col-12 col-md-6 text-center my-auto ">
                    <h3 className="text-info">
                    Education is both the act of teaching knowledge to others and the act of receiving knowledge from someone else.
                    </h3>
                    <div>
                    <Button className="me-5" onClick={handleToCourses} variant="outline-success">Running Courses</Button>
                    <Button onClick={handleToUpcomingCourses} variant="danger">Upcoming Courses</Button> 
                    </div>

               </div>
           </div>
           <h4 className="text-center fw-bold text-success w-25 mx-auto  py-3">Our Some Courses</h4>
           <ProvideService></ProvideService>
           <div className="w-75 mx-auto mt-2 ">
           <Slider></Slider>
           </div>
        </div>
    );
};

export default Home;