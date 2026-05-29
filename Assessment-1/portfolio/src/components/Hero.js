import React from "react";
import profileImage from "../image/profile.jpg";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">

        <div className="hero-text">
          <h1>Hello, I'm Rehan</h1>
          <p>ReactJS Developer | Web Designer</p>
          <button>Hire Me</button>
        </div>

        <div className="hero-image">
          <img src={profileImage} alt="Profile" />
        </div>

      </div>
    </section>
  );
};

export default Hero;