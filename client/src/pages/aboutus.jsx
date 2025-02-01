import React from "react";
import "./page-css/AboutUs.css"

function AboutUs(){
    return(
        <section className="about-us">
            <h2 data-aos="fade-up">About Us</h2>
            <p data-aos="fade-up">
                Lorem Ipsum donor sie sind 
            </p>
            <div className="about-image" data-aos="zoom-in">
                {/*<img src="path-to-your-image.jpg" alt="TEDxVIT Event" /> */}
            </div>
    </section>
    )
}

export default AboutUs;