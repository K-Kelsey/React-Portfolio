import React from 'react';
import me from '../../images/me.jpg';

export default function About(props) {

    return (
        <div className="about-container" id="about-container">
            <img src={me} />
            <div className="about-text">
                <p>About Me</p>
                <p></p>
                <p>Hello! My name is Kaden Kelsey, I have recently achieved certification in web development through the University of Washington Full Stack Flex Program! During my downtime, I enjoy cooking, reading, gaming and playing music.  I love to go camping and hiking when outdoors and love to be on the water, whether that is boating, fishing or swimming.  Native Washingtonian that has been traversing the ranks of the kitchen for most of my professional adult career life.  Ambitious and hungry for a new career field, searching for lucrative exposure to hoan my developing skillsets!
                </p>

                <p>
                My experience includes: Git/GitHub, React, JavaScript, HTML, CSS, jQuery, MySQL, Heroku, Node.js, Express.js, Sequelize, Handlebars.js, Insomnia, MongoDB, BootStrap.
                </p>

                <button><a className="button" style={{ color: 'black', textDecoration: 'none' }} href="mailto:kadenkelsey3@yahoo.com">Hire This Nugget</a></button>

                {/* <button><a className="button" style={props.style} href="https://docs.google.com/document/d/e/2PACX-1vTKeDXwI6Zx25Trj_2xfHoh3zmVdlAD68Ij8OYdlPO3AYt_Y-2VEhluLmeJww1uKg/pub"></a>View My Resume</button>
                 <button><a className="button" style={props.style} href="../../../public/assets/Kaden resume.docx.pdf" download="Kaden's Resume" target="_blank"></a>Hire This Nugget</button>  
                    <button><a className="button" style={props.style} href="mailto:kadenkelsey.dev@gmail.com"></a>Email Me</button>

                 <p>
                    With my newfound interest in developing, I am prepared to tackle any
                     project I am faced with and will perform to my upmost abilities.
                </p>
                <button><a className="button" style={props.style} href="mailto:kadenkelsey3@yahoo.com"></a>Hire Me</button>
                <button>Download CV</button>
                <h2>{props.currentPage}</h2> */}
            </div>

        </div>
    )
}