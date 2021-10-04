import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import img from '../../images/404-not-found.jpg';
import './notfound.css';

const NotFound = () => {
    const history = useHistory();
    const handleToHome=()=>{
        history.push('/home');
    }
    return (
        <div>
            <img src={img} className="h-75" alt="" />
            <Button onClick={handleToHome} variant="outline-primary">Back Home Page </Button>
            <div>
            <h1 className="mt-5"><span className="text-danger">Page Not Found </span></h1>
            </div>
        </div>
    );
};

export default NotFound;