import React from "react";
import Typed from 'react-typed';

export default function AboutMe() {
    return (
        <section className="main-section parallax" id="about">
            <div className="about-me-div content">
                <div className="col1">
                    <h1>Hi There, <br />I am Mohammed <span className="colored">Taherali</span></h1>
                    <h3 className="into-part">
                        I am into <span className="colored"><Typed
                            strings={["Web Development", 'Frontend Development', 'Backend Development']}
                            typeSpeed={40}
                            backSpeed={40}
                            loop
                        /></span>
                    </h3>
                    <ul>
                        <li className="about-points"><span className="colored">MERN stack developer</span> based in Pune</li>
                        <li className="about-points"><span className="colored">Sophomore</span> at Vishwakarma College of Arts, Commerce and Science</li>
                        <li className="about-points">Love to <span className="colored">code</span> and build stuff</li>
                        <li className="about-points"><span className="colored">Blockchain and Web 3.0</span> enthusiast</li>
                        <li className="about-points">Socials</li>
                    </ul>
                    <div id="socials">
                        <img />
                        <img />
                        <img />
                    </div>
                </div>
                <div className="col2">
                    <div className="img-container">
                        <img src="/mtc-animated.png" id="mtc-animated" />
                    </div>
                </div>
                {/* <Typed
                    strings={['Here you can find anything', "web development", 'frontend development']}
                    typeSpeed={40}
                    backSpeed={40}
                    loop
                /> */}
            </div>
        </section>
    )
}