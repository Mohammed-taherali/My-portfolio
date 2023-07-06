import React from "react";
import Tilt from "react-parallax-tilt";

export default function TiltComponent() {
    return (
        <Tilt glareEnable={false} tiltMaxAngleX={30}
            tiltMaxAngleY={30} perspective={2000}
        >
            <div className='tiltComponent'>
                <div className="inner-tilt-cont">
                </div>
            </div>
        </Tilt>
    )
}