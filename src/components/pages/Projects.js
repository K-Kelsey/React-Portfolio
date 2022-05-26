import React from 'react';

export default function Projects() {

  const handleCheck = () => {
    console.log('checked')
  }

  return (

    <div className="projects" id="projects">
      <div className="projects-text">
        <p>Projects</p>
        <p>Use the rectangles to filter through the slideshow</p>
        <p>Click on the image to visit the website!</p>
      </div>
      
      <div className="slideshow middle">
        <div className="slides">
          <input type="radio" name="r" id="r1" />
          <input type="radio" name="r" id="r2" />
          <input type="radio" name="r" id="r3" />
          <input type="radio" name="r" id="r4" />
          <input type="radio" name="r" id="r5" />

          <div className="slide s1">
            <button><a href="https://serene-headland-68325.herokuapp.com/"><img src={require('../../slideshow/interactor.png')} alt="project1" /></a></button>
          </div>

          <div className="slide">
            <button><a href="https://chef-recipe-1.herokuapp.com/"><img src={require('../../slideshow/chefrecipe.png')} alt="project2" /></a></button>
          </div>

          <div className="slide">
            <button><a href="https://k-kelsey.github.io/HW6_WeatherAPI/"><img src={require('../../slideshow/weatherapp.png')} alt="project3" /></a></button>
          </div>

          <div className="slide">
            <button><a href="https://hw21booksearchengine.herokuapp.com/"><img src={require('../../slideshow/booksearch.png')} alt="project4" /></a></button>
          </div>

          <div className="slide">
            <button><a href="https://enigmatic-journey-53027.herokuapp.com/notes"><img src={require('../../slideshow/notetaker.png')} alt="project5" /></a></button>
          </div>

          <div className="navigation">
            <label htmlFor="r1" className="bar"></label>
            <label htmlFor="r2" className="bar"></label>
            <label htmlFor="r3" className="bar"></label>
            <label htmlFor="r4" className="bar"></label>
            <label htmlFor="r5" className="bar"></label>
          </div >
        </div>
      </div>
    </div>
  )};