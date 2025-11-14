import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login({ logData }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function verification(e) {
    e.preventDefault();

    console.log(`"LogData:", ${logData}`);

    if (logData.email === email && logData.password === password) {
      alert("Login successful");
    } else {
      alert("Invalid email or password");
    }
  }

  return (
    <div>
      <h1 style={{ backgroundColor: "brown", color: "white", padding: "0px" }}>
        Login
      </h1>

      <form onSubmit={verification}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input 
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="exampleInputEmail1"
            placeholder="Enter email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input 
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>

        <button type="submit" className="btn btn-primary" onClick={verification}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
