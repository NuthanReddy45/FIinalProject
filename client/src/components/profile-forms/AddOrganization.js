import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addOrganization } from "../../actions/profile";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const AddOrganization = ({ addOrganization, history }) => {
  // const history = useHistory();
  const [formData, setFormData] = useState({
    type: "",
    ein: "",
    address: "",
    revenue: "",
    description: "",
  });

  const [displaySocialInputs, toggleSocialInputs] = useState(false);
  const { type, ein, address, revenue } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <h1 className="large text-primary">Add An Organization</h1>
      <p className="lead">
        <i className="fas fa-code-branch" /> Add Organizations or Estabishments
        Under Current Employer
      </p>
      <small>* = required field</small>
      <form
        className="form"
        onSubmit={async (e) => {
          e.preventDefault();
          await addOrganization(formData, history);
          history.push("/dashboard");
        }}
      >
        <div className="form-group">
          <input
            type="text"
            placeholder="* Bussiness type"
            name="type"
            value={type}
            onChange={onChange}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            placeholder="ein"
            name="ein"
            value={ein}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="address"
            name="address"
            value={address}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="revenue"
            name="revenue"
            value={revenue}
            onChange={onChange}
          />
        </div>

        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to="/dashboard">
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

AddOrganization.propTypes = {
  addOrganization: PropTypes.func.isRequired,
};

export default connect(null, { addOrganization })(AddOrganization);
