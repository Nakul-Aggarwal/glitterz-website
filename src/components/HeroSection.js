import React from 'react'
import heroImg from '../img/hero-img.svg'


const HeroSection = () => {
    return(
        <>
            <section id="hero" className="d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1">
                            <h1>Bettter digital experience with Ninestars</h1>
                            <h2>We are team of talanted designers making websites with Bootstrap</h2>
                            <a href="#about" className="btn-get-started scrollto">Get Started</a>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 hero-img">
                            <img src={heroImg} className="img-fluid animated" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HeroSection;