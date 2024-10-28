import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav class="navbar bg-body-secondary">
      <div class="container-fluid justify-content-center">
        <Link class="navbar-brand" to="/">
          <span className="d-flex align-items-center" style={{ gap: "0.5rem" }}>
            <img
              src="images/logo1.png"
              alt="Logo"
              width="40"
              class="d-inline-block"
            />
            Smart Tutor
          </span>
        </Link>
      </div>
    </nav>
  );
};