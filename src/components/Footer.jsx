import React from 'react';
import logo from '../img/logo.svg';

function Footer() {
    return(
    <footer className="footer pt-6 pb-5 bg-primary text-white">
                <div className="container">
                    <div className="row">
                        <div className="col mb-md-0">
                            <a href="#" target="_blank" className="d-flex justify-content-center mb-3">
                                <img src={logo} alt="Promptbook logo" />
                                <p className="text-white fw-bold footer-logo-text m-0">Promptbook</p>
                            </a>
                            <div className="d-flex text-center justify-content-center align-items-center" role="contentinfo">
                                <p className="fw-normal font-small mb-0">
                                    © Promptbook - your prompts API marketplace.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
     </footer>
    )
        
    }

export default Footer;
