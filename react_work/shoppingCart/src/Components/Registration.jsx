import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Registration({ regData }) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function getData(e) {
    e.preventDefault();

    const data = { name, email, password };
    regData(data); // send to parent
    console.log("Submitted:", data);
  }

  return (
    <div>
      <h1>Registration Form</h1>

      <form onSubmit={getData}>
        <div className="form-group col-md-6">
          <label htmlFor="inputName4">Name</label>
          <input
            type="text"
            className="form-control"
            id="inputName4"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4">Email</label>
            <input
              type="email"
              className="form-control"
              id="inputEmail4"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4">Password</label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <br />
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
}

export default Registration;
