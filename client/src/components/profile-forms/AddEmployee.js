import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addEmployee } from "../../actions/profile";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const AddEmployee = ({ addEmployee, history }) => {
  const gg = history.location.state;
  const [formData, setFormData] = useState({
    org: gg ? gg.org : "",
    name: "",
    email: "",
    aadharNo: "",
    panNo: "",
    income: "",
  });

  const { name, aadharNo, email, org, panNo, income } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <h1 className="large text-primary">Add Employess </h1>
      <p className="lead">
        <i className="fas fa-code-branch" /> Add Full-Time Employess under
        current Organization
      </p>
      <small>* implies required field</small>

      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          addEmployee(formData, history);
        }}
      >
        <div className="form-group">
          <input
            type="text"
            placeholder="* Organization ID "
            name="org"
            value={"OrgID :" + org}
            readOnly
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Employee Name "
            name="name"
            value={name}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Employee Email "
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            placeholder="Income of employee "
            name="income"
            value={income}
            onChange={onChange}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            name="aadharNo"
            placeholder="Aadhar card no."
            value={aadharNo}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="panNo"
            placeholder="Pan card no."
            value={panNo}
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

AddEmployee.propTypes = {
  addEmployee: PropTypes.func.isRequired,
};

export default connect(null, { addEmployee })(AddEmployee);
