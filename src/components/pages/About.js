import React from 'react';

export default function About(props) {


  return (
    <div className="about-container" id="about-container">
            <img src="./images/me.jpg"/>
            <div className= "about-text">
                <p>About Me</p>
                <p>Chef turned WebDev</p>
                <p>Hello! My name is Kaden Kelsey, I am 25 years old and have spent
                    the last 6 years of my adult professional life traversing the ranks of
                    the kitchen! Due to COVID-19 harships, the restaurant industry now stands
                    on feeble grounds which became discouraging enough for me to step away.
                    Now I am pursuing interest in the programing realm and hope to utilize
                    assets and tools provided to become a sufficient devoloper!
                </p>
                <p>
                    With my newfound interest in developing, I am prepared to tackle any
                     project I am faced with and will perform to my upmost abilities.
                </p>
                <button><a className="button" style={props.style} href="mailto:kadenkelsey3@yahoo.com"></a>Hire Me</button>
                <button>Download CV</button>
                <h2>{props.currentPage}</h2>
            </div>

        </div>
        )}