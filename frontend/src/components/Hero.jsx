import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
          HavenLife Health Institute is a state-of-the-art healthcare facility dedicated to delivering comprehensive medical services with compassion and expertise. Our team of skilled professionals is committed to providing personalized care tailored to meet each patient's unique needs.

At HavenLife, your well-being is our priority. We strive to create a safe and nurturing environment that supports your journey toward optimal health and wellness. With a focus on innovation, excellence, and empathy, we are here to guide you every step of the way.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;