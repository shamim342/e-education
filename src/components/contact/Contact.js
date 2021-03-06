import React from 'react';
import img from '../../images/contact.jpg'

const Contact = () => {
    return (
        <div className="row">
            <div className="col-12 col-md-6">
                <img src={img} className="img-fluid" alt="" />
            </div>
            <div className="col-12 col-md-6">
                <h2>Contact us</h2>
                <div>
                <i className="fas fa-envelope-open-text fa-2x "></i>
                <p> Email : learn-more@email.com</p>
                </div>
                <div>
                <i className="fab fa-twitter fa-2x"></i>
                <p> Twitter : @learn-more</p>
                </div>
                <div>
                <i className="fab fa-linkedin fa-2x"></i>
                <p> Linkedin: learn-more</p>
                </div>
                <div>
                <i className="fas fa-phone-volume fa-2x"></i>
                <p> Phone : 90000000</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;