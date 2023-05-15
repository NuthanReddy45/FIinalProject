import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteorganization, getEmployees } from "../../actions/profile";
import formatDate from "../../utils/formatDate";
import { useHistory } from "react-router-dom";

const Organization = ({ organization, deleteorganization }) => {
  const history = useHistory();
  const organizations = organization.map((exp) => (
    <tr key={exp._id}>
      <td>{exp.ein}</td>
      <td className="hide-sm">{exp.type}</td>
      <td className="hide-sm">{exp.revenue}</td>
      <td className="hide-sm">{exp.address}</td>
      <td>
        <button
          onClick={() => {
            history.push("/org/emp", { org: exp._id });
            // history.push("/add-employee", { org: exp._id });
          }}
          className="btn btn-secondary"
        >
          View Employees
        </button>
      </td>
      <td>
        <button
          onClick={() => deleteorganization(exp._id)}
          className="btn btn-danger"
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h2 className="my-2">organization Details</h2>
      <table className="table">
        <thead>
          <tr>
            <th>EIN</th>
            <th className="hide-sm">Type</th>
            <th className="hide-sm">Revenue</th>
            <th className="hide-sm">Address</th>
            <th />
          </tr>
        </thead>
        <tbody>{organizations}</tbody>
      </table>
    </Fragment>
  );
};

Organization.propTypes = {
  organization: PropTypes.array.isRequired,
  deleteorganization: PropTypes.func.isRequired,
};

export default connect(null, { deleteorganization })(Organization);
