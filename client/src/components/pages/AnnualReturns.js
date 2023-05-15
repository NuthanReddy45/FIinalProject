import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addReturns, updateReturns } from "../../actions/post";
import axios from "axios";
import api from "../../utils/api";

const AddReturns = ({ addReturns, updateReturns, history }) => {
  const temp1 = history.location.state;

  const [formData, setFormData] = useState({
    regNo: "",
    factName: "",
    occpName: "",
    EmpName: "",
    address: "",
    typeOfBussiness: "",
    numOfEmps: "",
    man: "",
    totEmps: "",
    empOnLeave: "",
    empPaidLeaves: "",
    year: "",
    act: temp1 ? temp1.act : "s",
  });

  const [displaySocialInputs, toggleSocialInputs] = useState(false);
  const {
    regNo,
    factName,
    occpName,
    EmpName,
    address,
    typeOfBussiness,
    numOfEmps,
    man,
    totEmps,
    empOnLeave,
    empPaidLeaves,
    year,
    act,
  } = formData;

  useEffect(() => {
    const getDetails = async () => {
      const res = await api.get(
        `/returns/${new Date().getFullYear()}/${temp1.act}`
      );
      console.log(res);
      setFormData(res.data);
    };
    getDetails();
  }, []);

  console.log({ formData });

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleUpdate = (e) => {
    e.preventDefault();
    updateReturns(formData, history);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    addReturns(formData, history);
  };

  return (
    <Fragment>
      <h1 className="large text-primary">Please Fill AnnualReturns </h1>
      <p className="lead">
        <i className="fas fa-code-branch" />
      </p>
      <small>* = required field</small>
      <form className="form" onSubmit={formData._id ? handleUpdate : handleAdd}>
        <div className="form-group">
          <select name="act" value={act} onChange={onChange}>
            <option>* Act Selection </option>
            <option value="factories">Factories Act </option>
            <option value="shops">
              Shops and Commercial Establishments Act{" "}
            </option>
            <option value="contract">Contract Labour Act</option>
            <option value="other">Other</option>
          </select>
          <small className="form-text">
            Select the act under which you need to fill retuns
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Assesment  year"
            name="year"
            value={year}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Registration Number"
            name="regNo"
            value={regNo}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="factName"
            name="factName"
            value={factName}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="type of Bussiness"
            name="typeOfBussiness"
            value={typeOfBussiness}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="occputation Name"
            name="occpName"
            value={occpName}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Employee Name"
            name="EmpName"
            value={EmpName}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Address of Establishment"
            name="address"
            value={address}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Number Of Emps"
            name="numOfEmps"
            value={numOfEmps}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Number of Man days worked "
            name="man"
            value={man}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Total Emps"
            name="totEmps"
            value={totEmps}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="No. of Employees OnLeave"
            name="empOnLeave"
            value={empOnLeave}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Emp Paid Leaves"
            name="empPaidLeaves"
            value={empPaidLeaves}
            onChange={onChange}
            required
          />
        </div>
        <input
          type="submit"
          className="btn btn-primary my-1"
          value={formData._id ? "Update returns" : "Add returns"}
        />
        <Link className="btn btn-light my-1" to="/dashboard">
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

AddReturns.propTypes = {
  addReturns: PropTypes.func.isRequired,
  updateReturns: PropTypes.func.isRequired,
};

export default connect(null, { addReturns, updateReturns })(AddReturns);
