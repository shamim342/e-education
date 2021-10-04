import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import ServiceAll from '../service/ServiceAll';

const Services = () => {
    const [courses,setCourse] = useState([]);
    useEffect(()=>{
        fetch('./fakedb.json')
        .then(res => res.json())
        .then(data => setCourse(data))
    },[])
    return (
        <div>
             <Row xs={1} md={1} className="g-4 mt-3 ">
                {
                    courses.map(course=>
                    <ServiceAll  key={course.no} course={course}></ServiceAll>)
                }
 
</Row>
        </div>
    );
};

export default Services;