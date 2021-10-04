import React from 'react';
import { Card, Col } from 'react-bootstrap';

const FutureCou = (props) => {
    console.log(props.course);
    const {category,url} = props.course;
    return (
        <div>
             <Col>
       <Card>
         <Card.Img variant="top" width="294px" height="194px" src={url}/>
         <Card.Body>
           <Card.Title>{category}</Card.Title>
           <Card.Text>
            Course Details : <span className="text-danger">Coming soon...</span> 
           </Card.Text>
         </Card.Body>
       </Card>
     </Col>
        </div>
    );
};

export default FutureCou;