import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {  Row } from 'react-bootstrap';
import HomeService from '../homeService/HomeService';

const ProvideService = () => {
    const [courses,setCourse] = useState([]);
    useEffect(()=>{
        fetch('./fakedb.json')
        .then(res => res.json())
        .then(data => setCourse(data.slice(4,8)))
    },[])
    return (
        <div>
            <Row xs={1} md={4} className="g-4">
                {
                    courses.map(course=><HomeService key={course.no} course={course}></HomeService>)
                }
 
</Row>
        </div>
    );
};

export default ProvideService;