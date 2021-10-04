import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import './slide.css';
import img1 from '../../images/slid3.jpg';
import img2 from '../../images/slid1.jpg';
import img3 from '../../images/img2.jpg';
import img4 from '../../images/slide4.jpg';
import { useHistory } from 'react-router';

const Slider = () => {
  const history =useHistory();
  const handleRunning=()=>{
    history.push('/services');
  }
  const handleToAbout=()=>{
    history.push('/about')
  }
  const handleToUpcomingCourses=()=>{
    history.push('/upcomingCourses')
  }
    return (
        <div>
            <Carousel className="custom-slide">
  <Carousel.Item>
    <img
      className="d-block w-100 custom-slide "
      src={img3}
      alt="First slide"
    />
    <Carousel.Caption className=" bg-secondary">
      <h3>Our Running Courses</h3>
      <Button onClick={handleRunning} className="" variant="danger">Go There</Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 custom-slide"
      src={img4}
      alt="Second slide"
    />

    <Carousel.Caption className=" bg-secondary">
      <h3> Our Upcoming Courses</h3>
      {/* <p>we are trying hard for Upcoming courses.Because you are our best priority.</p> */}
      <Button onClick={handleToUpcomingCourses} className="" variant="danger">Go There</Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 custom-slide"
      src={img1}
      alt="Third slide"
    />

    <Carousel.Caption className="bg-secondary">
      <h3>Our teaching procrss</h3>
      {/* <p className='px-3'>illusions of learning, memory techniques, dealing with procrastination</p> */}
      <Button onClick={handleToAbout} className="" variant="danger">About us</Button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Slider;