import {React} from 'react';

function Header () {
    return(
    <header className="header-global">
            <nav id="navbar-main" aria-label="Primary navigation" className="navbar navbar-main navbar-expand-lg navbar-theme-primary headroom navbar-dark navbar-transparent navbar-theme-secondary headroom--not-top headroom--not-bottom headroom--unpinned">
                <div className="container position-relative">
                    <a className="navbar-brand me-lg-5" href="/">
                        <img src="../static/img/logo.svg" alt="Promptbook logo" />
                    </a>
                    <div className="navbar-collapse collapse me-auto" id="navbar_global">
                        <div className="navbar-collapse-header">
                            <div className="row">
                                <div className="col-6 collapse-brand">
                                    <a href="#">
                                       
                                        <img src="../static/img/logo.svg" alt="Promptbook logo" /> 
                                    </a>
                                </div>
                                <div className="col-6 collapse-close">
                                    <a href="#navbar_global" className="fas fa-times" data-bs-toggle="collapse" data-bs-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" title="close" aria-label="Toggle navigation"></a>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="d-flex align-items-center">
                        
                    </div>
                </div>
            </nav>
            
        </header>
    )
        
    }

export default Header;