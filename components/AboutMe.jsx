import React from "react";
import Typed from 'react-typed';

export default function AboutMe() {
    return (
        <section className="main-section parallax">
            <div className="about-me-div content">
                <button className="btn btn-primary">My button</button>
                <Typed
                    strings={['Here you can find anything', "web development", 'frontend development']}
                    typeSpeed={40}
                    backSpeed={40}
                    loop
                />
                {/* <div className="about-me-text">Mauris volutpat maximus nunc at euismod. Duis ex tortor, mattis nec nunc sit amet, mattis venenatis orci. Nullam non dolor odio. Praesent vitae tortor convallis, egestas erat in, blandit erat. Etiam mattis, augue quis ullamcorper maximus, neque orci lobortis sapien, sed imperdiet est felis ac magna. Integer condimentum pulvinar lacus, quis molestie erat. Donec ut arcu in leo egestas congue vel nec justo. Ut vulputate scelerisque felis, nec fringilla arcu tincidunt at.
                </div> */}
            </div>
        </section>
    )
}