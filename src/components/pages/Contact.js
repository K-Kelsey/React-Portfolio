import React from 'react';

export default function Contact() {
  return (
    <>
      <div className="contact" id="contact">
        <p>Interested? Let's chat!</p>
        <p>You can reach me via any of the following forms of contact.</p>
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />

        <div className="social-media">
          <a href="https://www.linkedin.com/in/kaden-kelsey-022033216/" alt="LinkedIn Link"><i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/K-Kelsey" alt="Github Link"><i className="fab fa-github"></i></a>
          <a href="https://www.facebook.com/kaden.kelsey" alt="Facebook Link"><i className="fab fa-facebook"></i></a>
          <a href="https://www.instagram.com/kaden_kelsey/" alt="Instagram Link"><i className="fab fa-instagram"></i></a>
        </div>

        <div>
          <button><a className="button" style={{ color: 'black' }} href="mailto:kadenkelsey33@gmail.com">Email Me</a></button>
        </div>


        <div className="a-social-b">
          <a href="https://www.linkedin.com/in/kaden-kelsey-022033216/" alt="LinkedIn Link"><i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/K-Kelsey" alt="Github Link"><i className="fab fa-github"></i></a>
          <a href="https://www.facebook.com/kaden.kelsey" alt="Facebook Link"><i className="fab fa-facebook"></i></a>
          <a href="https://www.instagram.com/kaden_kelsey/" alt="Instagram Link"><i className="fab fa-instagram"></i></a>
        </div>


      </div>
      {/* <footer>
        <p> Thanks for viewing my portfolio!</p>
        <p>Please reach out with any quesitons or comments about my work. I am here to learn and please.</p>
        <p className="copyright">This is where a copyright would go.</p>
      </footer> */}
    </>
  )
};
