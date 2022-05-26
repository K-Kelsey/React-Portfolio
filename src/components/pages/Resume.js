import React from 'react';
export default function Resume(props) {

return (
    <div className="resumePage" id="resumePage">
                 <p>
                    With my newfound knowledge in developing, I am prepared to tackle any
                    project I am faced with and will perform to my upmost abilities.
                </p>
                <button><a className="button" style={props.style} href="mailto:kadenkelsey.dev@gmail.com"></a>Email Me</button>
                <button><a className="button" style={props.style} href="https://docs.google.com/document/d/e/2PACX-1vTKeDXwI6Zx25Trj_2xfHoh3zmVdlAD68Ij8OYdlPO3AYt_Y-2VEhluLmeJww1uKg/pub"></a>View My Resume</button>
                <button><a className="button" style={props.style} href="../../../public/assets/Kaden resume.docx.pdf" download="Kaden's Resume" target="_blank"></a>Hire This Nugget</button> 
    </div>

)};