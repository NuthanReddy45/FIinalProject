import React, { useEffect, useState } from "react";
import Act from "./Act";
import fact from "../../static/homepage/img/svg/factory.jpg";
import shops from "../../static/homepage/img/svg/shops.jpg";
import contract from "../../static/homepage/img/svg/contractor.jpg";
import AnnualReturns from "./AnnualReturns";
import { useHistory } from "react-router-dom";
import { getCurrentProfile } from "../../actions/profile";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Acts = ({ getCurrentProfile, profile: { profile } }) => {
  const history = useHistory();
  useEffect(() => {
    const fun = async () => {
      await getCurrentProfile();
    };
    fun();
  }, [getCurrentProfile]);

  // const { act1, act2, act3 } = profile;

  const prop1 = {
    act: "factories",
  };
  const prop2 = {
    act: "shops",
  };
  const prop3 = {
    act: "contract",
  };
  return (
    <>
      <div className="ActsMain">
        <div className="card">
          <img src={fact} alt="factory img " className="card-image" />
          <div className="card-content">
            <h2 className="card-title">Factories Act, 1948</h2>
            <p className="card-text">
              Establishment Employing Contract Workers under The Contract Labour
              Act, 1970 (Principal Employer)
            </p>
            <div className="card-actions">
              <button
                className="card-button"
                //={act1 == "" ? true : false}
                onClick={() => {
                  history.push("/returns", prop1);
                }}
              >
                Start Filling
              </button>
            </div>
          </div>
        </div>

        <div className="card">
          <img src={shops} alt="Shops img" className="card-image" />
          <div className="card-content">
            <h2 className="card-title">
              Shops and Commercial Establishments Act, 1958
            </h2>
            <p className="card-text">
              Establishment Employing Contract Workers under The Contract Labour
              Act, 1970 (Principal Employer)
            </p>
            <div className="card-actions">
              <button
                className="card-button"
                //={act2 == "" ? true : false}
                onClick={() => {
                  history.push("/returns", prop2);
                }}
              >
                Start Filling
              </button>
            </div>
          </div>
        </div>

        <div className="card">
          <img src={contract} alt="Contract img" className="card-image" />
          <div className="card-content">
            <h2 className="card-title">
              Contractor (Contract Labour Act, 1970)
            </h2>
            <p className="card-text">
              Contract Labour Licence under The Contract Labour (R&A) Act, 1970
            </p>
            <div className="card-actions">
              <button
                className="card-button"
                //={act3 == "" ? true : false}
                onClick={() => {
                  history.push("/returns", prop3);
                }}
              >
                Start Filling
              </button>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <Act />
    </>
  );
};

Acts.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});
export default connect(mapStateToProps, { getCurrentProfile })(Acts);
