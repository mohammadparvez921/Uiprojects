import React from "react";
import img from "../assets/image-qr-code.png";
import './qr.css'
function Qr() {
  return (
    <div className="container">
      <div className="row p-5">
        <div className=" card bg-white  p-4 qr-card col-md-4 offset-md-4 mt-5">
          <img src={img} alt="img" className="card-img-top mb-4 img"></img>
          <div className="ps-4 card-body">
          <h3 className="mb-2 text-start card-title">
            Improve your front-end skills by building projects
          </h3>
          <p className="text-start card-text">
            
            Scan the qr code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Qr;
