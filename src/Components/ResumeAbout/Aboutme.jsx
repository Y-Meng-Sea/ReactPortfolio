import React from "react";
import photo from "../../assets/image/my-pic2.jpg";
const Aboutme = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6">
          My name is Y Meng Sea i'm 18 years old, i'm a Front-end Developer <br />
          Nowadays i just a second-year student of Information Technology Department, by the ways I have been researching and practicing as a web
          developer for over 5 months, Honestly, i have taken many courses on the internet due to I can't afford to pay for part-time school,
          thankfully i can understand a little bit of English so decided to study by my self and i built about 5 basic website and of course my first
          website look weird , at least i can built this portfolio website using React JS which is the newest skill i have gain, i tell you one more
          thing i failed English subject
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img src={photo} alt="" className="img-fluid" style={{ borderRadius: "50%", width: 300, height: 300 }} />
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
