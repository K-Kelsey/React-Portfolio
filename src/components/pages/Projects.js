import React from 'react';

export default function Projects() {
  return (

    <div className="projects" id="projects">
      <div className="projects-text">
        <p>Projects</p>
        <p>Projects Worked on</p>
      </div>
      
      <div className="slideshow middle">
        <div className="slides">
          <input type="radio" name="r" id="r1" checked />
          <input type="radio" name="r" id="r2" />
          <input type="radio" name="r" id="r3" />
          <input type="radio" name="r" id="r4" />
          <input type="radio" name="r" id="r5" />

          <div className="slide s1">
            <button><a href="https://k-kelsey.github.io/GroupProject1/"><img src="./slideshow/moodsic.png" alt="project1" /></a></button>
          </div>

          <div className="slide">
            <button><a href="https://chef-recipe-1.herokuapp.com/"><img src="./slideshow/chefrecipe.png" alt="project2" /></a></button>
          </div>

          <div className="slide">
            <button><a href="#"><img src="./slideshow/weatherapp.png" alt="project3" /></a></button>
          </div>

          <div className="slide">
            <button><a href="file:///C:/Users/kaden/Desktop/Class/PREWORK_KJK/Module_4/fanpage.html"><img src="./slideshow/abba.png" alt="project4" /></a></button>
          </div>

          <div className="slide">
            <button><a href="https://enigmatic-journey-53027.herokuapp.com/notes"><img src="./slideshow/notetaker.png" alt="project5" /></a></button>
          </div>

          <div className="navigation">
            <label for="r1" className="bar"></label>
            <label for="r2" className="bar"></label>
            <label for="r3" className="bar"></label>
            <label for="r4" className="bar"></label>
            <label for="r5" className="bar"></label>
          </div >
        </div>
      </div>
    </div>
  )};