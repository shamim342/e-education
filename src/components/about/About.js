import React from 'react';
import img from '../../images/logo-img.jpg';
import Contact from '../contact/Contact';
import Target from '../target/Target';

const About = () => {
    return (
        <div>
            <img src={img} className="mt-5" alt="" />
            <div>
                <h2 className="fw-bold mb-4">We are 
                    Trying for your successfull future</h2>
            </div>
            <p className="fs-5 w-75 mx-auto">IN covid situation lot of people are getting jobless.
                we are just try , those people can get jobs . Our course are  much related to our real life . It's will help you to getting job and promotion . Those courses will make you <span className="fw-bold">next corporate king</span>.
            </p>
            <h3 className="text-center text-warning">Our Targets</h3>
            <Target></Target>
            <div className="container">
            <Contact></Contact>
            </div>
        </div>
    );
};

export default About;