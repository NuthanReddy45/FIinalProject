import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faGoogle,
  faInstagram,
  faLinkedin,
  fahammer,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="text-center text-lg-start bg-light text-muted">
      {/* Section: Social media */}
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        {/* Left */}
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        {/* Left */}

        {/* Right */}
        <div>
          <a
            href="https://www.facebook.com/Labour-Department-of-Government-of-National-Capital-Territory-of-Delhi-1793622977627039/"
            className="me-4 text-reset"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a
            href="https://twitter.com/labour_gnctd"
            className="me-4 text-reset"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="/" className="me-4 text-reset">
            <FontAwesomeIcon icon={faGoogle} />
          </a>
          <a href="/" className="me-4 text-reset">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="/" className="me-4 text-reset">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        {/* Right */}
      </section>
      {/* Section: Social media */}

      {/* Section: Links  */}
      <section className="">
        <div className="container text-center text-md-start mt-5">
          {/* Grid row */}
          <div className="">
            {/* Content */}
            <h6 className="text-uppercase fw-bold mb-4">
              <i className="fas fa-user" />
              ELabour WebApp
            </h6>
            <p>
              OFFICE OF THE LABOUR COMMISSIONER GOVERNMENT OF N.C.T. OF DELHI 5,
              SHAM NATH MARG, DELHI - 110054.
            </p>
          </div>
          <div className="row-container mt-3">
            {/* Grid column */}

            {/* Grid column */}

            {/* Grid column */}
            <div className="">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="https://labour.delhi.gov.in/" className="text-reset">
                  Labour Department Delhi
                </a>
              </p>
              <p>
                <a
                  href="https://www.mca.gov.in/content/mca/global/en/foportal/fologin.html"
                  className="text-reset"
                >
                  Annual Returns
                </a>
              </p>
              <p>
                <a
                  href="https://www.irs.gov/businesses/small-businesses-self-employed/employer-id-numbers"
                  className="text-reset"
                >
                  Employer Registration
                </a>
              </p>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a
                  href="http://www.digitalindia.gov.in/"
                  className="text-reset"
                >
                  Digital India
                </a>
              </p>
              <p>
                <a href="https://data.gov.in/" className="text-reset">
                  Data.Gov.in
                </a>
              </p>
              <p>
                <a href="https://swachhbharat.mygov.in/" className="text-reset">
                  Swach Bharath
                </a>
              </p>
              <p></p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;

// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="page-footer text-center font-small mt-4 wow fadeIn">
//       <hr className="my-4" />
//       <div className="service-footer-wrapper">
//         <ul className="sub-sites">
//           <li style={{ display: "inline" }}>
//             <a
//               title="Swachhbharat"
//               alt="Swachhbharat"
//               href="https://swachhbharat.mygov.in/"
//               target="_blank"
//             >
//               <img
//                 title="Swachhbharat"
//                 alt="Swachhbharat"
//                 src="https://www.mygov.in/footer_service/images/swachh-bharat.png"
//               />
//             </a>
//           </li>
//           <li style={{ display: "inline" }}>
//             <a
//               title="E-Greetings"
//               alt="E-Greetings"
//               href="https://egreetings.gov.in"
//               target="_blank"
//             >
//               <img
//                 title="E-Greetings"
//                 alt="E-Greetings"
//                 src="https://www.mygov.in/footer_service/images/e-greating.png"
//               />
//             </a>
//           </li>
//           <li style={{ display: "inline" }}>
//             <a
//               title="MyGov Auth"
//               alt="MyGov Auth"
//               href="https://auth.mygov.in"
//               target="_blank"
//             >
//               <img
//                 title="MyGov Auth"
//                 alt="MyGov Auth"
//                 src="https://www.mygov.in/footer_service/images/mygov_auth.png"
//               />
//             </a>
//           </li>
//           <li style={{ display: "inline" }}>
//             <a
//               title="MyGov Blog"
//               alt="MyGov Blog"
//               href="https://blog.mygov.in"
//               target="_blank"
//             >
//               <img
//                 alt=""
//                 src="https://www.mygov.in/footer_service/images/blog-logo.png"
//               />
//             </a>
//           </li>
//           <li style={{ display: "inline" }}>
//             <a
//               title="MyGov Innovate"
//               alt="MyGov Innovate"
//               href="https://innovate.mygov.in"
//               target="_blank"
//             >
//               <img
//                 title="MyGov Innovate"
//                 alt="MyGov Innovate"
//                 src="https://www.mygov.in/footer_service/images/innovation-logo.png"
//               />
//             </a>
//           </li>
//           <li style={{ display: "inline" }}>
//             <a
//               title="MyGov Quiz"
//               alt="MyGov Quiz"
//               href="https://quiz.mygov.in"
//               target="_blank"
//             >
//               <img
//                 title="MyGov Quiz"
//                 alt="MyGov Quiz"
//                 src="https://www.mygov.in/footer_service/images/mygov_quiz.png"
//               />
//             </a>
//           </li>
//           <li style={{ display: "inline" }}>
//             <a
//               title="Transforming India"
//               alt="Transforming India"
//               href="https://transformingindia.mygov.in"
//               target="_blank"
//             >
//               <img
//                 title="Transforming India"
//                 alt="Transforming India"
//                 src="https://www.mygov.in/footer_service/images/Transforming-india-logo.png"
//               />
//             </a>
//           </li>
//         </ul>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
