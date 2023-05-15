import React, { Fragment, useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile, getCurrentProfile } from "../../actions/profile";

const initialState = {
  bussiness: "",
  location: "",
  aadharNo: "",
  factName: "",
  act1: "",
  act2: "",
  act3: "",
  act4: "",
  panNo: "",
  regID: "",
  bio: "",
};

const ProfileForm = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history,
}) => {
  const [formData, setFormData] = useState(initialState);

  const creatingProfile = useRouteMatch("/create-profile");

  useEffect(() => {
    if (!profile) getCurrentProfile();
    if (!loading && profile) {
      const profileData = { ...initialState };
      for (const key in profile) {
        if (key in profileData) profileData[key] = profile[key];
      }
      for (const key in profile.social) {
        if (key in profileData) profileData[key] = profile.social[key];
      }

      setFormData(profileData);
    }
  }, [loading, getCurrentProfile, profile]);

  const {
    bussiness,
    factName,
    location,
    aadharNo,
    panNo,
    act1,
    act2,
    act3,
    act4,
    regID,
    bio,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history, profile ? true : false);
  };

  return (
    <Fragment>
      <h1 className="large text-primary">
        {creatingProfile ? "Create Your Profile" : "Edit Your Profile"}
      </h1>
      <p className="lead">
        <i className="fas fa-user" />
        {creatingProfile
          ? ` Let's get some information to make your`
          : " Add some changes to your profile"}
      </p>
      <small>* = required field</small>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <select name="bussiness" value={bussiness} onChange={onChange}>
            <option>* Select bussiness type</option>
            <option value="Developer">Factory Owner</option>
            <option value="Junior Developer">Contractor</option>
            <option value="Senior Developer">Industrialist</option>
            <option value="Manager">Manager</option>
            <option value="Other">Other</option>
          </select>
          <small className="form-text">
            Please select type of your bussiness
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="factName"
            name="factName"
            value={factName}
            onChange={onChange}
          />
          <small className="form-text">
            Please provide name of the organization
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="aadharNo"
            name="aadharNo"
            value={aadharNo}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Location"
            name="location"
            value={location}
            onChange={onChange}
          />
          <small className="form-text">
            City & state suggested (eg. Noida, UP)
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="PAN Card No."
            name="panNo"
            value={panNo}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="act1"
            name="act1"
            value={act1}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="act2"
            name="act2"
            value={act2}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="act3"
            name="act3"
            value={act3}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="act4"
            name="act4"
            value={act4}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="RegID"
            name="regID"
            value={regID}
            onChange={onChange}
          />
        </div>

        <div className="form-group">
          <textarea
            placeholder="A short bio of your organization"
            name="bio"
            value={bio}
            onChange={onChange}
          />
          <small className="form-text">
            Tell us a little about your organization
          </small>
        </div>

        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to="/dashboard">
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

ProfileForm.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  ProfileForm
);
