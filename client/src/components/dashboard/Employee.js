import React, { Fragment, useEffect } from "react";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteEmployee, getEmployees } from "../../actions/profile";
import formatDate from "../../utils/formatDate";

const Employee = ({
  history,
  getEmployees,
  deleteEmployee,
  auth: { user },
  profile: { emps },
}) => {
  const styles = {
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
      textAlign: "center",
    },
    message: {
      fontSize: "1.5rem",
      marginBottom: "1rem",
    },
    button: {
      padding: "0.5rem 1rem",
      backgroundColor: "#0077FF",
      color: "#FFF",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "all 0.2s ease",
      "&:hover": {
        backgroundColor: "#0055FF",
      },
    },
  };
  const props = history.location.state;

  useEffect(() => {
    const fun = async () => {
      await getEmployees(props.org);
    };

    fun();
  }, [getEmployees, deleteEmployee]);

  const employees = emps.map((edu) => (
    <tr key={edu._id}>
      <td>{edu.name}</td>
      <td className="hide-sm">{edu.income}</td>
      <td>{edu.aadharNo}</td>
      <td>{edu.panNo}</td>
      <td></td>
      <td>
        <button
          onClick={async () => {
            await deleteEmployee(props, edu._id);
            history.push("/dashboard");
          }}
          className="btn btn-danger"
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <>
      {emps.length > 0 ? (
        <Fragment>
          <p className="lead">
            <i className="fas fa-user" /> Welcome {user && user.name}
          </p>

          <h2
            style={{ display: "inline-block", marginRight: "35%" }}
            className="my-2"
          >
            Employee Details
          </h2>
          <button
            style={{ display: "inline-block" }}
            className="btn btn-light"
            onClick={() => {
              // console.log("orgs id ", props.org);
              history.push("/add-employee", { org: props.org });
            }}
          >
            <i className="fab fa-black-tie text-primary" /> Add Employee
          </button>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th className="hide-sm">Income</th>
                <th className="hide-sm">Aadhar Number</th>
                <th className="hide-sm">PAN Card NO.</th>
                <th />
              </tr>
            </thead>
            <tbody>{employees}</tbody>
          </table>
        </Fragment>
      ) : (
        <div style={styles.root}>
          <div style={styles.message}>No Records of Employee Found</div>
          <button
            style={{ display: "inline-block" }}
            className="btn btn-light"
            onClick={() => {
              history.push("/add-employee", { org: props.org });
            }}
          >
            <i className="fab fa-black-tie text-primary" /> Add Employee
          </button>
        </div>
      )}
    </>
  );
};

Employee.propTypes = {
  getEmployees: PropTypes.func.isRequired,
  deleteEmployee: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { deleteEmployee, getEmployees })(
  Employee
);
