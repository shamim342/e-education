import React from 'react';
import img from '../../images/contact.jpg'

const Contact = () => {
    return (
        <div className="row">
            <div className="col-6">
                <img src={img} className="img-fluid" alt="" />
            </div>
            <div className="col-6">
                <h2>Contact us</h2>
                <div>
                <i className="fas fa-envelope-open-text "></i>
                <p> Email : leran-more@email.com</p>
                </div>
                <div>
                <i className="fab fa-twitter"></i>
                <p> Twitter : leran-more@email.com</p>
                </div>
                <div>
                <i className="fab fa-linkedin"></i>
                <p> Linkedin: leran-more@email.com</p>
                </div>
                <div>
                <i className="fas fa-phone-volume"></i>
                <p> Phone : 90000000</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;