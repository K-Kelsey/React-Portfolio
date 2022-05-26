import React from 'react';
import work from '../../images/work.jpg';

// import Axios from "axios";
// import FileDownload from "js-file-download";

export default function Home() {

  // const download = (e) => {
  //   e.preventDefault()
  //   Axios({
  //     url: "http://localhost:3000",
  //     method: "GET",
  //     responseType: "blob"
  //   }).then((res) => {
  //     FileDownload(res.data, "resume.pdf")
  //   })
  // }
  // onClick={(e)=>download(e)}

  return (
    <section>
      <img src={work} className="model" alt="model" />
      <div className="text-container" id="text-container">
        <p>Welcome to</p>
        <p>the world of</p>
        <p>KADEN</p>

        <div className="btn-container">
          {/* <button>Hire This Nugget</button> */}
          <a href="https://drive.google.com/file/d/1jjbYcf1OPMqlflKkJZVYoZoSf3QCn7mh/view?usp=sharing"><button >View My Resume</button></a>
          <a className="button" href="https://drive.google.com/uc?export=download&id=1jjbYcf1OPMqlflKkJZVYoZoSf3QCn7mh"><button><span class="bi bi-save"></span>Download my Resume</button></a>
          
        </div>
      </div>
    </section>
  );
}