import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

const FormJoin = () => {
    return (
        <div>
            <Form>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder=" Dhaka , Bangladesh" />
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

  

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Row>
  <h4 className="text-center text-danger">Our Courses</h4>
  <Form.Select className="w-75 mx-auto">
    <option>Basic Computer</option>
    <option>Basic Mathemetics</option>
    <option>Freelancing</option>
    <option>lang maping</option>
  </Form.Select>
  <br />

  <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button className="mb-3" variant="danger" type="submit">
    Submit
  </Button>
</Form>
        </div>
    );
};

export default FormJoin;