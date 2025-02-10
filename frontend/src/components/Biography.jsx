import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          At HavenLife Health Institute, we are passionate about delivering cutting-edge healthcare solutions while embracing the latest innovations in medical technology and patient care. Our team is dedicated to creating a nurturing environment where every individual feels valued, heard, and supported.
          </p>
          <h3>Our Mission in 2024</h3>
          <p>As we move forward into a bright and dynamic future, we are committed to enhancing the healthcare experience through innovation and excellence. Our goal is to streamline hospital management processes, ensuring seamless appointment scheduling, efficient patient record management, and improved communication between patients and healthcare providers.</p>
          <h3>
          Our Vision
          </h3>
          <p>We believe that healthcare is not just about treating ailments—it’s about transforming lives. By leveraging modern technologies and compassionate care, we aim to revolutionize hospital management systems, making healthcare more accessible, efficient, and patient-centric.</p>
          <p>At HavenLife, innovation drives us, excellence defines us, and the future of healthcare begins with us!</p>
        </div>
      </div>
    </>
  );
};

export default Biography;