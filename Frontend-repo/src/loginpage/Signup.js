import React, { useState, setState } from "react";
import "../PageCss/Signup.css";

function SignupForm() {
  const [username, setFirstName] = useState(null);
  const [fullname, setfullname] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "username") {
      setFirstName(value);
    }
    if (id === "fullname") {
      setfullname(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
    if (id === "confirmPassword") {
      setConfirmPassword(value);
    }
  };

  const handleSubmit = () => {
    console.log(username, fullname, email, password, confirmPassword);
  };

  return (
    <div className="sign-form">
      <div className="form-title">
        SignUp
        <div className="form-body">
          <div className="username">
            <label className="form__label" for="username">
              Username:{" "}
            </label>
            <input
              className="form__input"
              id="username"
              type="text"
              value={username}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div className="fullname">
            <label className="form__label" for="fullname">
              Full Name:{" "}
            </label>
            <input
              type="text"
              name=""
              id="fullname"
              value={fullname}
              className="form__input"
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div className="email">
            <label className="form__label" for="email">
              Email:{" "}
            </label>
            <input
              type="email"
              id="email"
              className="form__input"
              value={email}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div className="password">
            <label className="form__label" for="password">
              Password:{" "}
            </label>
            <input
              className="form__input"
              type="password"
              id="password"
              value={password}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div className="confirm-password">
            <label className="form__label" for="confirmPassword">
              Confirm Password:{" "}
            </label>
            <input
              className="form__input"
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </div>
        <div class="end">
                <input type="submit" value="Register" name=""></input>
            </div>
      </div>
    </div>
     
  );
}
export default SignupForm;
