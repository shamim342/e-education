import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import FutureCou from '../future-c/FutureCou';

const FutureCourses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(()=>{
        fetch('./upcomingdb.json')
        .then(res => res.json())
        .then(data =>setCourses(data))
    },[])
    return (
        <div className="container">
           <Row xs={1} md={2} className="g-4">
                {
                    courses.map(course=><FutureCou key={course.no} course={course}></FutureCou>)
                }
 
</Row>
        </div>
    );
};

export default FutureCourses;