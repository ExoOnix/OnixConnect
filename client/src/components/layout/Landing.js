import React from "react";

export const Landing = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Onix Connect</h1>
          <p className="lead">Connecting the world of developers</p>
          <div className="buttons">
            <a href="register.html" className="btn btn-primary">
              Sign Up
            </a>
            <a href="login.html" className="btn btn">
              Login
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
