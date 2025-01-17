import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import MyResume from "../Components/Resume/MyResume";
import Experience from "../Components/Experience/Experience";
import Footer from "../Components/Footer/Footer";
import DownResume from "../Components/DownResume/DownResume";
import Aboutme from "../Components/ResumeAbout/Aboutme";
const Resume = () => {
  return (
    <>
      <Navbar />
      <DownResume />
      <Aboutme />
      <MyResume />
      <div className="display-4 text-decoration-underline text-center py-4" style={{ color: "violet", fontFamily: "'Playball', cursive" }}>
        Education & Experiences
      </div>
      <Experience />
      <Footer />
    </>
  );
};

export default Resume;
