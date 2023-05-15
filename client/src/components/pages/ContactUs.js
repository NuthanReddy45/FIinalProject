import React, { Fragment, useState } from "react";
import Footer from "../layout/footer";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    msg: "",
  });

  const { name, email, subject, msg } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    // handle submission
  };

  return (
    <Fragment>
      <h1 className="large text-primary">Contact Us</h1>
      <p className="lead">
        <i className="fas fa-user" /> Please fill out the form
      </p>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={email}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Subject "
            name="subject"
            value={subject}
            onChange={onChange}
          />
        </div>

        <div className="form-group">
          <textarea
            style={{ rows: "100", cols: "50" }}
            type="text"
            placeholder="Message"
            name="msg"
            value={msg}
            onChange={onChange}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Submit" />
      </form>
    </Fragment>
  );
}
