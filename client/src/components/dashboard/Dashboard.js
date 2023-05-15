import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import DashboardActions from "./DashboardActions";
// import DashboardActions from './DashboardAction';
import Organization from "./Organization";
import Employee from "./Employee";
import {
  getCurrentProfile,
  deleteAccount,
  getOrgs,
} from "../../actions/profile";

const Dashboard = ({
  history,
  getCurrentProfile,
  getOrgs,
  deleteAccount,
  auth: { user },
  profile: { profile, orgs },
}) => {
  useEffect(() => {
    getOrgs();
    getCurrentProfile();
  }, [getOrgs, getCurrentProfile]);
  return (
    <Fragment>
      <h1 className="large text-primary">Dashboard</h1>
      <p className="lead">
        <i className="fas fa-user" /> Welcome {user && user.name}
      </p>
      <DashboardActions />
      {profile !== null ? (
        <Fragment>
          {orgs.length > 0 && <Organization organization={orgs} />}
          <div className="my-2">
            <button className="btn btn-danger" onClick={() => deleteAccount()}>
              <i className="fas fa-user-minus" /> Delete My Account
            </button>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <p>You have not yet setup a profile, please add some info</p>
          <Link to="/create-profile" className="btn btn-primary my-1">
            Create Profile
          </Link>
        </Fragment>
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  orgs: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, {
  getCurrentProfile,
  getOrgs,
  deleteAccount,
})(Dashboard);
