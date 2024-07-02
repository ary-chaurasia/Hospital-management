import React from "react";

const Biography = ({ imageUrl }) => {
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
            Welcome to ZeeCare, where healthcare meets compassion.
            Founded on the principles of excellence and patient-centered care,
            ZeeCare has been a cornerstone of medical service since
            2024.
          </p>
          <p>
            At ZeeCare, we believe in more than just treating illnesses;
            we believe in nurturing health and wellness at every stage of life.
          </p>
          <p>
            Our dedicated team of healthcare professionals, led by experienced
            doctors and supported by compassionate nurses and staff, is
            committed to providing the highest quality medical care in a warm
            and welcoming environment.
          </p>

          <p>
            At ZeeCare, we are more than just a healthcare provider; we
            are your partners in wellness. Together, let's build a healthier
            community and a brighter future for all.
          </p>
          <p>
            Experience the difference at ZeeCare, where your health is
            our mission.
          </p>
        </div>
      </div>
    </>
  );
};

export default Biography;
