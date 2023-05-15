import React from "react";
import Footer from "../layout/footer";

const AboutUs = () => {
  return (
    <>
      <div className="about-us-container">
        <h2 className="heading">ABOUT US</h2>
        <p className="description">
          The Labour Department, Government of N.C.T. of Delhi is headed by
          Secretary (Labour), who is assisted by Commissioner, Special Labour
          Commissioner, Additional Labour Commissioner, Joint Labour
          Commissioners, Deputy Labour Commissioners, Assistant Labour
          Commissioners, Chief Inspector of Factories, Electrical Inspector,
          Chief Inspector of Boilers, Chief Inspector of Shops and
          Establishments, Labour Officers, Welfare Officer and other supporting
          staff.
        </p>
        <p className="description">
          To enable the industrial workers and their families to visit the
          places of historical and religious importance, the Labour Department,
          Govt. of NCT of Delhi has set up Holiday Homes at Haridwar, Mussoorie,
          Allahabad and Shimla. The Department thus has a very wide spectrum of
          Labour oriented activities. This charter is a summarized information
          on crucial activities. The Department would welcome suggestions for
          improvement of this website from the stake holders and beneficiaries.
        </p>
        <p className="description">We are against Child Labour</p>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
