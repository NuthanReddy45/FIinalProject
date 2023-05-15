import React from "react";
import Footer from "../layout/footer";

const HelpAndSupport = () => {
  return (
    <>
      <div className="help-and-support-container">
        <h2>We are providing Help & Support</h2>
        <p>
          There is a provision to register new representative of the already
          registered establishments and new enforcement agency user. There is
          also a link is provided to generate the password for first time use
          for an establishment whose LIN is generated.
        </p>
        <p>
          New users can be created, passwords can be changed. There is
          convention followed for creation of the password for the pre populated
          user ids. A login window is available at the portal through which the
          users can login and perform their tasks. Upon giving the wrong login /
          passwords, system gives proper message and user has to try again.
        </p>
        <p>
          GET YOUR LIN HERE ALSO:
          <a
            href="https://shramsuvidha.gov.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            SHRAM-SUVIDHA-PORTAL
          </a>
        </p>
        <p>
          With a view to make the administration responsive to the needs of the
          people and bring governance to their doorsteps, the department has
          been organized on territorial basis into nine districts.
        </p>
        <p>
          Each district is headed by a Joint/Deputy Labour Commissioner who is
          assisted by Asstt. Labour Commissioners and Labour Officers.
        </p>
        <h3>Labour Acts Start Filling</h3>
        <p>FORM FILLING GUIDE</p>
        <p>
          Please click on the link{" "}
          <a
            href="http://localhost:3000/"
            target="_blank"
            rel="noopener noreferrer"
          >
            http://localhost:3000/
          </a>{" "}
          Create an e-labour account to register a new representative. Following
          form will come on your screen and you have to fill it with correct
          information.
        </p>
        <p>
          Once you submit the above sign up form, system sends an OTP on
          registered mobile number for user verification. Fill the received OTP
          in below form:
        </p>
        <p>
          Once your OTP is verified, you will see below message to check your
          mail.
        </p>
        <p>
          System sends the below mail on registered email id for e-labour delhi
          User Id and Password creation:
        </p>
        <p>
          Once you click the link provided in your mail below screen appears to
          set the user id and password.
        </p>
        <p>
          Now you can login e-labour delhi Portal with created User Id and
          Password.
        </p>
        <h3>Verify Establishment Identifiers</h3>
        <p>
          Here you can verify/reject modifications made to establishment
          identifiers by employer/ establishment representative. View
          Verification Summary
        </p>
        <ol>
          <li>
            You can view the verification summary by choosing Establishment
            Verification option from menu at left hand side.
          </li>
          <li>
            Click pending number to view the list of establishments whose data
            verification is pending.
          </li>
          <li>View Pending List</li>
          <li>
            Click on the Pending Status option to view the submitted data and
            approve or reject the same.
          </li>
          <li>Submit Verification Form</li>
          <li>
            View the revised data, provide the remarks and choose the reject or
            verify button. If you choose reject option, remark field is
            mandatory.
          </li>
          <li>View Identifier Verification List</li>
          <li>
            Click on the verified number at the verification summary screen to
            view the verification list. View the verification status under
            status column. This ends the process of LIN data verification by
            Regional Head.
          </li>
        </ol>
      </div>
      <Footer />
    </>
  );
};

export default HelpAndSupport;
