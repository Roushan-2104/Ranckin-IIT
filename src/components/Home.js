import React from "react";
import "../App.css";
import atoz from "./img/atoz.png";
import Gift from "./img/gift.png";
import bg_text from "./img/bg-text.PNG";
import vid from "./hola.mp4";
import { Helmet } from "react-helmet";
import GoToTop from "./GoTop";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.5 }}
    >
      <GoToTop />
      <Helmet>
        <title>
          Get Mentored by IITian | Ranckin, best online mentoring platform
        </title>
      </Helmet>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12 px-3 text-center">
            <div className="mt-4">
              <div>
                <p className="para px-0">
                  Are you preparing for
                  <br /> JEE main and advance?
                </p>
              </div>
              <div>
                <p
                  className="d-inline-block ranckin-titl border-bottom border-dark mb-1"
                  style={{ fontSize: "90px" }}
                >
                  ranckin
                </p>
                <p className="ranckin-para p-0">
                  Mentor by passion, student by profession
                </p>
              </div>
              <div>
                <p className="">
                  <img src={atoz} alt="..." className="mt-4 atoz" />
                </p>
              </div>
              <div className="mt-4">
                <p className="px-lg-5 px-0 mb-3 aim-titl">
                  Get One step closer to your{" "}
                  <span style={{ fontWeight: "bold" }}>aim IIT!!...</span>
                </p>
                <p className="mentorship-titl px-lg-5 px-0">
                  Under the mentorship of experts from{" "}
                  <span style={{ fontWeight: "bold" }}>IIT Bombay !!</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <p className="text-center">
              <img
                src="https://static.wixstatic.com/media/cf1f13_64695dbf779c4a21be86f5745703c919~mv2.jpg/v1/fill/w_569,h_569,al_c,q_80,usm_0.66_1.00_0.01/home%20img.webp"
                alt="..."
                className="img-fluid"
              />
            </p>
            <div className="my-2 justify-content-center d-flex">
              <img src={Gift} alt=".." className="gift" />
              <p className="pt-5 mt-5">
                <a href="tel:+918877430565" className="tel">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-telephone-fill mx-1"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                    />
                  </svg>
                  Call us
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex mt-5 mb-3 flex-column flex-lg-row pt-3 justify-content-lg-start justify-content-center">
          <p
            className="fs-2 fw-bold px-lg-5 px-0 pt-3 text-center text-lg-start"
            style={{
              color: "#536EB7",
              fontFamily: "serif",
              lineHeight: "40px",
            }}
          >
            Take one day of free trial
            <br /> session right now !!..
          </p>
          <svg
            preserveAspectRatio="xMidYMid meet"
            data-bbox="22.5 45 155.1 109.8"
            viewBox="22.5 45 155.1 109.8"
            height="140"
            width="140"
            xmlns="http://www.w3.org/2000/svg"
            data-type="color"
            role="presentation"
            aria-hidden="true"
            style={{ transform: "rotate(90deg)" }}
            className="d-none d-lg-inline-block"
          >
            <g>
              <path
                d="M177.1 120.9L101 45h-2l-76.1 75.9-.4 1.4 3.2 10 1 .9 9.4 2.5 1.4-.4L100 73.1l62.6 62.4 1.4.4 9.4-2.5 1-.9 3.2-10-.5-1.6zm-148.9 9.9L26 124l6.8 2.1 1.6 6.3-6.2-1.6zm135.8 2L101 70h-2l-61.8 61.6-1.6-6.2L100 61.2l70.2 70-6.2 1.6zm8.3-3.5L101 58.2h-2l-65.3 65.1-7.1-2.1L100 48l74.5 74.3-2.2 7z"
                fill="#FA773C"
                data-color="1"
              ></path>
              <path
                d="M101 82.9h-2L41.7 140l-.4 1.4 3.2 10 1 .9 9.4 2.5 1.4-.4L100 111l43.4 43.3 1.4.4 9.4-2.5 1-.9 3.2-10-.4-1.4-57-57zm-56.7 58.6L100 86l54.3 54.1-7.1 2.1-46.2-46h-2l-52.5 52.3-2.2-7zM99 108l-44.2 44-6.2-1.6L100 99.2l45.2 45-1.6 6.2L101 108h-2zm53.7 41.6l-6.3 1.7 1.6-6.3 6.9-2.1-2.2 6.7z"
                fill="#FA773C"
                data-color="1"
              ></path>
            </g>
          </svg>
          <form className="px-lg-4 px-0 text-center">
            <label className="label-free d-block">
              Signup for free for new updates{" "}
            </label>
            <div className="d-flex flex-column flex-lg-row input justify-content-lg-center justify-content-start px-2">
              <div>
                <input
                  type="email"
                  className="mt-3 py-2 ps-3 px-5 email-input"
                  placeholder="Enter you email here*"
                />
              </div>
              <div>
                <button className="join d-inline-block px-4" type="button">
                  JOIN
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="mt-lg-5">
          <div className="d-flex third-container mb-4 justify-content-center flex-column flex-lg-row">
            <p className="display-4 third-title mb-3 text-center text-lg-start">
              ranckin
            </p>
            <div className="third-box ms-lg-3">
              <div>
                <img
                  src={bg_text}
                  width="101%"
                  alt="..."
                  className="img-fluid"
                />
                <p
                  className="third-box-titl text-center mt-lg-0"
                  style={{ fontSize: "15px", top: "35px" }}
                >
                  Make your move easy and quick which help you intake decision
                  to choose which suits you, a group of IITians who aim to help
                  the budding JEE aspirants by dedicatedly guiding them on the
                  right path and preparing them for cracking the demanding exam.
                </p>
              </div>
            </div>
          </div>
          <div className="d-flex third-container mb-4 justify-content-center flex-column flex-lg-row">
            <div className="third-box mt-lg-4">
              <div>
                <img
                  src={bg_text}
                  width="101%"
                  style={{ transform: "scaleX(-1)" }}
                  alt="..."
                  className="img-fluid"
                />
                <p className="third-box-titl text-center mt-lg-0">
                  We introduce you to the world of true mentorship and building
                  blocks for a strong foundations to your bright future. Let us
                  come together to create a great teaching and learning
                  experience for both students and mentors
                </p>
              </div>
            </div>
            <p className="display-3 third-title mb-3 text-center text-lg-start">
              <img
                src="https://static.wixstatic.com/media/cf1f13_98717bf2c6b042559d2c2998bbb53b43~mv2.jpg/v1/fill/w_188,h_157,al_c,q_80,usm_0.66_1.00_0.01/Final%20Logo%20Edit%201_JPG.webp"
                alt=".."
                className="mx-lg-5 img-fluid"
              />
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid services pb-3">
        <div className="text-center">
          <header className="d-inline-block service-head shadow-lg mb-3">
            <div className="px-5 shadow-lg pb-2">
              <p className="display-6 fw-bold mb-0 service-titl">our service</p>
            </div>
          </header>
        </div>
        <div className="services-area">
          <div className="my-5 d-flex justify-content-center text-center flex-column flex-lg-row">
            <div className="mx-lg-5 mx-auto rounded first-service text-center my-3 all-service">
              <div className="text-center hover-content content m-1 pb-4">
                <p className="fs-4 d-inline-block pt-1">
                  Personal
                  <br /> Mentorship
                </p>
                <p className="my-4 mx-2">
                  Provide you direct access to your personal IITian mentor, whom
                  you can contact any time you please. Individual and
                  personalized guidance to each mentee
                </p>
                <div className="pt-2 mb-0">
                  <a
                    href="https://www.facebook.com/wix"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-facebook mx-3 social"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.twitter.com/wix"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-twitter mx-3 social"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="mx-lg-5 mx-auto rounded second-service my-3 all-service">
              <div className="text-center hover-content m-1 ">
                <p className="fs-4 d-inline-block pt-1">Study Planner</p>
                <p className="my-4 mx-2">
                  Customised study plan on daily and weekly basis help you
                  maintain a balance between your daily schooling and your
                  preparation for jee simultaneously without feeling
                  overburdened.
                </p>
                <div className="pb-2 pt-3">
                  <a
                    href="https://www.facebook.com/wix"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-facebook mx-3 social"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.twitter.com/wix"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-twitter mx-3 social"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="mx-lg-5 mx-auto rounded third-service my-3 all-service">
              <div className="text-center m-1 hover-content pb-4">
                <p className="fs-4 d-inline-block pt-1">
                  Promoting
                  <br />
                  Self Study
                </p>
                <p className="my-4 mx-2">
                  Reviews that highlight your progress. This helps them find out
                  their weak areas so that they can particularly focus on
                  improvement of those particular topic.
                </p>
                <div className="pt-2">
                  <a
                    href="https://www.facebook.com/wix"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-facebook mx-3 social"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.twitter.com/wix"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-twitter mx-3 social"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="my-5 d-flex justify-content-center flex-column flex-lg-row">
            <div className="mx-lg-5 mx-auto rounded second-service my-3 all-service">
              <div className="text-center hover-content m-1 ">
                <p className="fs-4 d-inline-block pt-1">
                  Selection of
                  <br />
                  Materials & Note
                </p>
                <p className="my-4 mx-2">
                  Mentors will provide you thier own short notes as well when
                  needed. Analysis & Explanition from 50+ previous papers.
                  Previous Year Paper Analysis with Topic wise Linkage of last
                  10 years
                </p>
                <div className="pb-2">
                  <a
                    href="https://www.facebook.com/wix"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-facebook mx-3 social"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.twitter.com/wix"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-twitter mx-3 social"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="mx-lg-5 mx-auto rounded third-service my-3 all-service">
              <div className="text-center hover-content m-1 ">
                <p className="fs-4 d-inline-block pt-1">
                  Weekly live
                  <br /> interaction
                </p>
                <p className="my-4 mx-2">
                  Weekly Live Sessions of Community of Mentors where you can get
                  to learn more life lessons and academic lessons from Top
                  Experts
                </p>
                <div className="pt-4 pb-4">
                  <a
                    href="https://www.facebook.com/wix"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-facebook mx-3 social"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.twitter.com/wix"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-twitter mx-3 social"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid initiative">
        <div className="text-center">
          <header className="d-inline-block mb-3">
            <div className="px-5 pb-2 py-4">
              <p className="display-6 fw-bold mb-0 initiative-titl">
                Our Initiative
              </p>
            </div>
          </header>
        </div>
        <div className="container px-0 px-lg-5">
          <div className="position-relative text-lg-start text-center">
            <p className="display-3 youthkaksha shadow-lg d-inline-block px-3 pb-2">
              Youthkaksha
            </p>
            <span className="position-absolute triangle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                className="bi bi-caret-down-fill"
                viewBox="0 0 16 16"
              >
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
              </svg>
            </span>
          </div>
          <div>
            <p className="px-lg-5 px-1 youthkaksha-titl my-4">
              Finding it difficult to choose from among the millions of paths
              present in the Sci-Fi Duniya? Well, then you have landed at the
              perfect spot. We are aiming to provide you with every possible
              academic help out there. This page is managed by IITians to guide
              the students in making decisions. Class 11 is the most precious
              stage of school life. It is the time when a student has to choose
              a branch from thousands available out there.
            </p>
            <blockquote className="fs-5 px-lg-0 px-2 text-center youthkaksha-quote">
              " If you want to be successful find someone who has achieved the
              result you want and copy what they do and you will achieve the
              same result "
            </blockquote>
          </div>
          <p className="text-center mt-1">
            <img
              src="https://static.wixstatic.com/media/cf1f13_fca970f2b68641528eaf4ff49baaa040~mv2.jpg/v1/fill/w_479,h_273,al_c,q_80,usm_0.66_1.00_0.01/youthkaksha.webp"
              alt="..."
              className="img-fluid"
            />
          </p>
          <div
            className="d-flex pricing justify-content-center flex-column flex-lg-row my-2"
            id="price"
          >
            <div
              className="card mx-lg-4 mx-auto cardec shadow-lg my-2"
              style={{ width: "20rem" }}
            >
              <img
                src="https://static.wixstatic.com/media/cf1f13_6489abbb2c8f408099afffe7f156685f~mv2.jpg/v1/crop/x_0,y_261,w_2000,h_1477/fill/w_306,h_226,al_c,q_80,usm_0.66_1.00_0.01/websit99.webp"
                className="card-img-top position-relative"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title position-absolute time low-price ">
                  7 days{" "}
                </h5>

                <ul className="card-text mb-1">
                  <li>1 personal call </li>
                  <li>Personal study plan</li>
                  <li>
                    One live session (for exam strategy and real motivation from
                    IITIAN)
                  </li>
                </ul>
                <p className="from">From:</p>
                <div className="d-flex">
                  <p className="price mx-auto">99₹</p>
                  <Link to="/join-us" className="btn-book mx-auto">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="card cardec mx-lg-4 mx-auto shadow-lg my-2"
              style={{ width: "20rem" }}
            >
              <img
                src="https://static.wixstatic.com/media/cf1f13_5a8e2519b66d4caa95ea9813614f1d84~mv2.jpg/v1/fill/w_306,h_226,al_c,q_80,usm_0.66_1.00_0.01/website249.webp"
                className="card-img-top position-relative"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title time position-absolute ">21 days</h5>

                <ul className="card-text mb-1">
                  <li>Personal call </li>
                  <li>Whatsapp community with us </li>
                  <li>Organized study plan </li>
                  <li>Test paper analysis (reform strategy accordingly )</li>
                  <li>Live interaction with (IITIAN)</li>
                </ul>
                <p className="from">From:</p>

                <div className="d-flex">
                  <p className="price mx-auto">249₹</p>
                  <Link to="/join-us" className="btn-book mx-auto">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="card cardec mx-lg-4 mx-auto shadow-lg my-2"
              style={{ width: "20rem" }}
            >
              <img
                src="https://static.wixstatic.com/media/cf1f13_807663b66517442f8f34f4a4f9f6334b~mv2.jpg/v1/fill/w_306,h_226,al_c,q_80,usm_0.66_1.00_0.01/website499.webp"
                className="card-img-top position-relative"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title time position-absolute">3 Months</h5>

                <ul className="card-text mb-1">
                  <li>Personal call </li>
                  <li>Whatsapp community with us </li>
                  <li>Organized study plan </li>
                  <li>Test paper analysis (reform strategy accordingly )</li>
                  <li>Live interaction with (IITIAN)</li>
                </ul>
                <p className="from">From:</p>

                <div className="d-flex">
                  <p className="price mx-auto">999₹</p>
                  <Link to="/join-us" className="btn-book mx-auto">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row pricing my-5 mb-lg-2 mb-4">
            <div className="vid-para col-lg-6 mt-lg-5 text-center">
              <p>
                Get all the tools and techniques of the toppers. Know how the
                Best IITians prepare and give exams. Know their secrets and
                tools. Apply the same in your prep. Book your Session with
                ranckin.
              </p>
              <p>
                Know which study material to study and how to make notes for
                better preparation. Get guidance on study material, how much
                time to study, how to make your schedule and what chapters are
                important.!!!
              </p>
              <p className="mt-5">
                <Link to="/join-us" className="btn-join img-fluid">
                  Join Us
                </Link>
              </p>
            </div>
            <div className="my-auto col-lg-6 video text-center">
              <video id="vid" className="img-fluid" autoPlay loop muted>
                <source src={vid} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid info mt-4">
        <div className="row">
          <div className="col-lg-4 col-12 info-1">
            <div className="text-center mt-4">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  className="text-light bi bi-megaphone"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-.214c-2.162-1.241-4.49-1.843-6.912-2.083l.405 2.712A1 1 0 0 1 5.51 15.1h-.548a1 1 0 0 1-.916-.599l-1.85-3.49a68.14 68.14 0 0 0-.202-.003A2.014 2.014 0 0 1 0 9V7a2.02 2.02 0 0 1 1.992-2.013 74.663 74.663 0 0 0 2.483-.075c3.043-.154 6.148-.849 8.525-2.199V2.5zm1 0v11a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-1 0zm-1 1.35c-2.344 1.205-5.209 1.842-8 2.033v4.233c.18.01.359.022.537.036 2.568.189 5.093.744 7.463 1.993V3.85zm-9 6.215v-4.13a95.09 95.09 0 0 1-1.992.052A1.02 1.02 0 0 0 1 7v2c0 .55.448 1.002 1.006 1.009A60.49 60.49 0 0 1 4 10.065zm-.657.975 1.609 3.037.01.024h.548l-.002-.014-.443-2.966a68.019 68.019 0 0 0-1.722-.082z" />
                </svg>
              </span>
            </div>
            <div className="text-center mt-3">
              <p className="info-titl fs-4 d-inline-block px-4">
                LET'S GUIDE YOU AND GUARD YOU
              </p>
              <p className="info-para">
                we have expert mentor from IIT BOMBAY, who guide you in journey
                of achieving your dream college
              </p>
              <p className="mt-4">
                <Link to="/" className="info-link">
                  Read more
                </Link>
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-12 info-2">
            <div className="text-center mt-4">
              <span>
                <svg
                  preserveAspectRatio="xMidYMid meet"
                  data-bbox="0.064 21.9 199.636 155.7"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0.064 21.9 199.636 155.7"
                  role="presentation"
                  aria-hidden="true"
                  width="120"
                  height="120"
                >
                  <g>
                    <path d="M6.4 170.2c.5.3 1.1.5 1.7.5.5 0 .9-.1 1.4-.3l39.3-17.2c.7-.3 1.2-.8 1.6-1.4l54.2-95.1c3.2-5.6 1.2-12.8-4.3-16L70.7 23.5c-2.7-1.6-5.9-2-9-1.2-3 .8-5.6 2.8-7.1 5.5l-54.1 95c-.4.6-.5 1.3-.4 2.1l4.7 42.7c.1 1.1.7 2 1.6 2.6zm14.4-38l50-87.6 11.3 6.5L32 138.8l-11.2-6.6zm-1.9-1.1l-11.4-6.7 49.9-87.6L69 43.5l-50.1 87.6zm24.4 17l-19.9 8.7-14-8.1-2.4-22 36.3 21.4zm2.1-1.4L34 140l50.1-87.7 11.3 6.6-50 87.8zM63.5 28.9c1.3-.3 2.6-.2 3.8.5l29.5 17.1c2.4 1.4 3.2 4.4 1.8 6.8L96.5 57 58.4 35l2-3.6c.7-1.3 1.8-2.2 3.1-2.5z"></path>
                    <path d="M199.7 175.6v2H5.7v-2h194z"></path>
                  </g>
                </svg>
              </span>
            </div>
            <div className="text-center">
              <p className="info-titl fs-4 d-inline-block px-4">
                FREE JEE NOTES
              </p>
              <p className="info-para info-para-2 text-dark">
                Grab free hand written notes of physics, chemistry and maths
                just by login
              </p>
              <p className="mt-4 pt-3">
                <Link to="/" className="info-link info-link-2">
                  Get it &#62;
                </Link>
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-12 info-3">
            <div className="text-center mt-4">
              <span>
                <svg
                  preserveAspectRatio="xMidYMid meet"
                  data-bbox="-0.015 21.485 200.051 156.915"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-0.015 21.485 200.051 156.915"
                  role="presentation"
                  width="100"
                  height="100"
                  aria-hidden="true"
                >
                  <g>
                    <path d="M188.6 71.1c-9.9-14.6-24.9-24.4-42.2-27.7-9.3-1.8-18.5-1.5-27.6.6-3.6-4-7.7-7.6-12.3-10.7-15.1-10.2-33.2-14-51.1-10.6C37.5 26.1 22 36.3 11.8 51.3s-14 33.2-10.6 51.1c2.5 13.4 9 25.5 18.6 35.2l.5 21.2c0 1 .5 2 1.4 2.6.6.4 1.2.6 1.9.6.4 0 .7-.1 1.1-.2l22.1-7.5c11 3.7 22.8 4.4 34.1 2.3 2.3-.4 4.5-1 6.7-1.6 9.3 9.3 21 15.5 34.1 17.9 11.2 2.1 22.9 1.3 33.7-2.4l22.9 7.8c.1 0 .2.1.4.1s.4-.1.6-.2c.3-.2.5-.5.5-.9l.5-22.1c9.6-9.5 16.1-21.4 18.6-34.7 3.2-17.2-.4-34.8-10.3-49.4zM79.7 150.2c-10.6 2-21.6 1.2-31.8-2.4-.7-.2-1.5-.2-2.2 0l-19 6.5-.4-18.1c0-.9-.4-1.7-1-2.3-9.2-8.9-15.3-20.2-17.6-32.6-3.1-16.2.3-32.6 9.6-46.2 9.3-13.6 23.2-22.8 39.4-25.9 3.9-.7 7.8-1.1 11.6-1.1 12.2 0 24.2 3.7 34.5 10.7 13.6 9.2 22.8 23.2 25.9 39.4 6.3 33.4-15.6 65.7-49 72zm117-30c-2.5 12.9-8.8 24.6-18.3 33.8-.2.2-.3.5-.3.8l-.5 21.1-21.8-7.4c-.2-.1-.5-.1-.7 0-10.6 3.7-22 4.6-32.9 2.5-12.2-2.3-23.3-8-32.1-16.5 31.8-10.7 51.6-43.5 45.2-77.3-2.2-11.6-7.3-22.3-14.7-31.1 8.4-1.8 17-2 25.5-.3 16.7 3.2 31.2 12.7 40.8 26.8 9.4 13.9 12.9 30.8 9.8 47.6z"></path>
                    <path d="M54.2 88.8a6.2 6.2 0 1 1-12.4 0 6.2 6.2 0 0 1 12.4 0z"></path>
                    <path d="M74.9 88.8a6.2 6.2 0 1 1-12.4 0 6.2 6.2 0 0 1 12.4 0z"></path>
                    <path d="M95.6 88.8a6.2 6.2 0 1 1-12.4 0 6.2 6.2 0 0 1 12.4 0z"></path>
                  </g>
                </svg>
              </span>
              <div className="text-center mt-3">
                <p className="info-titl text-light fs-4 d-inline-block px-4">
                  CONSULTING
                </p>
                <p className="info-para">
                  Call/WhatsApp Anytime any time to your personal mentor be in
                  community of preparing for same
                </p>
                <p className="mt-4 pt-3">
                  <Link to="/" className="info-link info-link-3">
                    Visit &#62;
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container why my-4">
        <div className="text-center">
          <p className="fs-1">Why we</p>
          <p className="mt-4 why-para px-lg-5 mx-lg-3 px-0">
            A mentor is someone who allows you to see the hope inside yourself.
            An IIT JEE aspirants requires to have a proper guidance under a
            mentor besides having dedication, determination and hardwork from
            his or her side. But most of them they do not understand the
            importance of proper mentor in their preparation period because of
            which they land in a place where they do not deserve as they deserve
            much better place than that. Mentors are nothing more (and nothing
            less) than people with solid experience in an area who are willing
            to share their knowledge with others.
          </p>
          <div className="why-border mb-4"></div>
        </div>
        <div className="d-flex why-service justify-content-lg-between flex-lg-row flex-column">
          <div>
            <p>-24X7 Support through chat​</p>
            <p>-Free JEE (PCM) notes</p>
          </div>
          <div>
            <p>-Get the Best IITian Mentor​</p>
            <p>-Our plan is very economical</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
