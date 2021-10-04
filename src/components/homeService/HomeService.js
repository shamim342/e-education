import React from 'react';
import { Card, Col } from 'react-bootstrap';

const HomeService = (props) => {
    console.log(props.course);
    const {url,name,runtime,price}=props.course;
    return (
        <div>
     
     <Col>
       <Card>
         <Card.Img variant="top" width="294px" height="194px" src={url}/>
         <Card.Body>
           <Card.Title>{name}</Card.Title>
           <Card.Text>
            Course Duration : <span className="text-danger">{runtime}</span> month
           </Card.Text>
           <h4>Price : <span className="text-danger fw-bold">{price}k </span> BDT</h4>
         </Card.Body>
       </Card>
     </Col>
   
        </div>
    );
};

export default HomeService;