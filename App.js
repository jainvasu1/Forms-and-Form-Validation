import React, { useState } from "react";
import "./App.css";
import Validation from "./Validation";

function App() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
  };

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <h2 className="title">Sign Up</h2>
        </div>
        <form className="form-wrapper">
          <div className="name">
            <label className="label">Name</label>
            <input
              className="input"
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>

          <div className="email">
            <label className="label">Email</label>
            <input
              className="input"
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div className="password">
            <label className="label">Password</label>
            <input
              className="input"
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>

          <button className="submit" onClick={handleFormSubmit}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
