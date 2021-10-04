import React from 'react';
import { Accordion } from 'react-bootstrap';

const Target = () => {
    return (
        <div className="w-75 mx-auto">
            <Accordion defaultActiveKey="0" flush>
  <Accordion.Item eventKey="0">
    <Accordion.Header>Increase Your Knowledge Ares</Accordion.Header>
    <Accordion.Body>
        We make our all courese specially . Our courses definitely improve and increase your Knowledge area . 
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Make You stronger for all situation</Accordion.Header>
    <Accordion.Body>
     
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>Prepared for Jobs Exam</Accordion.Header>
    <Accordion.Body>
     
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
        </div>
    );
};

export default Target;