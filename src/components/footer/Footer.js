import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <div className=" row text-white bg-dark mt-3 p-5">
            
                <div className="col-6">
                    <p className="fs-3 mb-3"><span className="text-danger fw-bold">LEARN-</span> more</p>
                    <p> We’ll learn about how the brain uses two very different learning modes and how it encapsulates information. We’ll also cover illusions of learning, memory techniques, dealing with procrastination, and best practices shown by research to be most effective in helping you master tough subjects.  

                      </p>
                    <div>
                    <i className="fab fa-facebook-square fa-2x  "></i>
                    <i className="fab fa-linkedin fa-2x mx-3"></i>
                    <i className="fab fa-instagram-square fa-2x"></i>
                    <i className="fab fa-twitter fa-2x mx-3"></i>
                    </div>
                </div>
                <div className="col-6 text-left">
                    <p className="fs-4 mb-3"> Our Services help you</p>
                    <p className="">
                    <i className="fas fa-medal me-2"></i>  
                        Increase Your Knowledge</p>
                    <p className="">
                    <i className="fas fa-medal me-2"></i>
                        Make you srtonger for job </p>
                    <p className="">
                    <i className="fas fa-medal me-2"></i>
                        prepared you for job Exam</p>
                    
                </div>
                 <div>
                    <p>Copy rights@2021 - Learn-more</p>
            </div>
           
               
        </div>
    );
};

export default Footer;