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
                <li className="nav-item d-lg-none d-block text-center">
                  <button
                    className="nav-link mx-auto pt-0 log pt-lg-0 pt-3 login-btn"
                    data-bs-toggle="modal"
                    data-bs-target="#login"
                  >
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
                  </button>
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
                <li className="nav-item d-lg-block d-none text-center">
                  <button
                    className="nav-link ms-2 me-1 pt-0 log login-btn"
                    data-bs-toggle="modal"
                    data-bs-target="#login"
                  >
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
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div
        className="modal fade"
        id="login"
        tabIndex="-1"
        aria-labelledby="modal-title"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-fullscreen modal-dialog-centered">
          <div className="modal-content">
            <div className="text-end">
              <button
                type="button"
                className="btn-close m-3"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center">
              <p
                className="modal-title display-5 text-center"
                id="modal-title"
                style={{ fontWeight: "400", color: "black" }}
              >
                Sign Up
              </p>
              <p className="fs-5 mt-3">
                {" "}
                Already a member?<a href="/">Log In</a>
              </p>
              <div>
                <a href="/" className="bg-primary">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 266.89 266.89"
                      width="25"
                      height="25"
                    >
                      <g>
                        <g>
                          <path
                            style={{ fill: "#fff" }}
                            d="M252.16,0H14.73A14.73,14.73,0,0,0,0,14.73V252.16a14.73,14.73,0,0,0,14.73,14.73H142.55V163.57H107.77V123.29h34.82V93.58c0-34.47,21.06-53.24,51.81-53.24a285.41,285.41,0,0,1,31.08,1.59v36H204.15c-16.76,0-20,8-20,19.61v25.72H224l-5.16,40.28H184.15V266.89h68a14.73,14.73,0,0,0,14.73-14.73V14.73A14.73,14.73,0,0,0,252.16,0Z"
                          ></path>
                          <path d="M218.84,163.54,224,123.26H184.15V97.54c0-11.66,3.24-19.61,20-19.61h21.33v-36a285.41,285.41,0,0,0-31.08-1.59c-30.75,0-51.81,18.77-51.81,53.24v29.71H107.77v40.28h34.78V266.89h41.6V163.54Z"></path>
                        </g>
                      </g>
                    </svg>
                  </span>
                </a>
              </div>
              <label htmlFor="modal-email" className="form-label">
                Your Email Address:
              </label>
              <input
                type="text"
                className="form-control"
                id="modal-email"
                placeholder="e.g. mario@example.com"
              />
            </div>
          </div>
        </div>
      </div>
      <GoToTop />
    </>
  );
}
