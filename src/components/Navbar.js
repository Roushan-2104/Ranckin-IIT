import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import GoToTop from "./GoTop";

export default function Navbar() {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-white pt-0">
          <div className="container-fluid shadow-sm nav">
            <Link
              className="navbar-brand logo mx-0 mx-lg-5 px-lg-5 px-2"
              to="/"
            >
              <img
                src="https://static.wixstatic.com/media/cf1f13_98717bf2c6b042559d2c2998bbb53b43~mv2.jpg/v1/fill/w_60,h_50,al_c,q_80,usm_0.66_1.00_0.01/Final%20Logo%20Edit%201_JPG.webp"
                alt=".."
                className="mx-lg-5 px-lg-5 px-0"
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mt-2 text-lg-start text-center">
                <li className="nav-item d-lg-none d-block">
                  <Link className="nav-link mx-3 pt-0 log pt-lg-0 pt-3" to="/">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        className="bi bi-person-circle text-primary"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path
                          fillRule="evenodd"
                          d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                        />
                      </svg>
                    </span>
                    <span className="mx-2 text-primary log-text">Log In</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-black fs-5 pt-lg-0 pt-3 mx-2 links"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-black fs-5 mx-2 pt-lg-0 pt-3 links"
                    to="/youthkaksha"
                  >
                    Youthkaksha
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-black fs-5 mx-2 pt-lg-0 pt-3 links"
                    to="/aboutus"
                  >
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-black fs-5 mx-2 pt-lg-0 pt-3 links"
                    to="/join-us"
                  >
                    Join Us
                  </Link>
                </li>
                <li className="nav-item d-lg-block d-none">
                  <Link className="nav-link ms-2 me-1 pt-0 log" to="/">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        className="bi bi-person-circle text-primary"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path
                          fillRule="evenodd"
                          d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                        />
                      </svg>
                    </span>
                    <span className="mx-2 text-primary log-text">Log In</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <GoToTop />
    </>
  );
}
