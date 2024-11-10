import React from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/UserNavbar.css";

const UserNavbar = () => {
  const { userId } = useParams();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to={`/user/${userId}/dashboard`}>
          SheSafe
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to={`/user/${userId}/dashboard`}>
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`/user/${userId}/profile`}>
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`/user/${userId}/contacts`}>
                Contacts
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`/user/${userId}/medical`}>
                Medical
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`/user/${userId}/signout`}>
                Sign Out
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default UserNavbar;
