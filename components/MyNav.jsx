import React from 'react';

export default function MyNav() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary px-5 fixed-top custom-bg">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src="./mtc-logo.png" className="logo-img" /> <span id='myName'>Mohammed</span></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav push-right">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Education</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

// import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import React from 'react';

// export default function MyNav() {
//     return (
//         <nav class="navbar navbar-expand-lg bg-body-tertiary custom-bg">
//             <div class="container-fluid">
//                 <a class="navbar-brand" href="#">Mohammed</a>
//                 <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                     <span class="navbar-toggler-icon"></span>
//                 </button>
//                 <div class="collapse navbar-collapse" id="navbarNav">
//                     <ul class="navbar-nav">
//                         <li class="nav-item push-right">
//                             <a class="nav-link" href="#"><img src="./Untitled.png" className="logo-img" /></a>
//                         </li>
//                         <li class="nav-item">
//                             <a class="nav-link active" aria-current="page" href="#">Home</a>
//                         </li>
//                         <li class="nav-item">
//                             <a class="nav-link" href="#">Features</a>
//                         </li>
//                         <li class="nav-item">
//                             <a class="nav-link" href="#">Pricing</a>
//                         </li>
//                         <li class="nav-item">
//                             <a class="nav-link disabled">Disabled</a>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//     )
// }