import React from 'react';

const returnNav = () => {
  return (
    <React.Fragment>
      <ul>
        <li><a href="#about-container">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact </a></li>
      </ul>
    </React.Fragment>
  )
}


export default function Home() {
  return (
    <nav>
        <a href="#" className="home">Kaden's Portfolio</a>

          <ul>    
            <returnNav />        
          </ul>
          
    </nav>

    <>
    <section>                
      <img src="./images/work.jpg" className="model" alt="model" />
        <div className="text-container" id="text-container"> 
          <p>Welcome to</p>
          <p>the world of</p>
          <p>KADEN</p>

            <div className="btn-container">
              <button Hire This Nugget />
              <button Download CV />
            </div>
        </div>
    </section>
    </>
  );
}