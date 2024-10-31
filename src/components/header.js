import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg px-5 bg-body-secondary">
      <div className="container-fluid justify-content-between">
        <Link className="navbar-brand" to="/">
          <span className="d-flex align-items-center" style={{ gap: "0.5rem" }}>
            <img
              src="/images/logo1.png"
              alt="Logo"
              width="40"
              className="d-inline-block"
            />
            Smart Tutor
          </span>
        </Link>
        <div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav" style={{ gap: '1rem' }}>
              <Link className="nav-link position-relative" to="/Student/Notifications">Notifications
                <span className="position-absolute top-1 translate-middle badge rounded-pill bg-danger">
                  99+
                  <span className="visually-hidden">unread messages</span>
                </span>
              </Link>
              <Link className="nav-link" to="/Student/Profile">Profile</Link>
              <button className="nav-link">Logout</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};