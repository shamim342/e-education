import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import './slide.css';
import img1 from '../../images/img1.jpg';
import img2 from '../../images/img2.jpg';

const Slider = () => {
    return (
        <div>
            <Carousel className="custom-slide">
  <Carousel.Item>
    <img
      className="d-block w-100 custom-slide "
      src={img1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Our Running Courses</h3>
      <Button className="me-5 text-danger" variant="outline-success ">Go There</Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 custom-slide"
      src={img2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3> Our Upcoming Courses</h3>
      <p>we are trying hard for Upcoming courses.Because you are our best priority.</p>
      <Button className="me-5 text-danger" variant="outline-success ">Go There</Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 custom-slide"
      src={img1}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Slider;