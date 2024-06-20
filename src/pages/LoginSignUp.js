import React from "react";
import "./styles/LoginSignUp.scss";

const LoginSignUp = () => {
  return (
    <div className="login-signup-page">
      <div className="login-signup-container">
        <h1>Sign Up</h1>
        <div className="login-signup-input">
          <input type="text" placeholder="Enter your name" />
          <input type="email" placeholder="Enter your email address" />
          <input type="password" placeholder="Enter your password" />
        </div>
        <button>Continue</button>
        <p className="login-here">
          Already have an account? <span>Login Here</span>
        </p>
        <div className="login-signup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
