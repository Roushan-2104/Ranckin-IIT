import React from "react";
import "../App.css";
import { Helmet } from "react-helmet";
import "./Navbar";
import { motion } from "framer-motion";
import GoToTop from "./GoTop";

export default function AboutUs() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.5 }}
    >
      <GoToTop />
      <Helmet>
        <title>About Us | Ranckin | Mentorship</title>
      </Helmet>
      <div className="container my-3" id="meetus">
        <div className="text-center">
          <p className="display-5 meet d-inline-block pb-2">Meet The Team</p>
        </div>
        <div className="text-center">
          <div className="d-flex justify-content-lg-evenly justify-content-center flex-lg-row flex-column">
            <div>
              <div className="d-inline-block rounded-circle">
                <img
                  src="https://static.wixstatic.com/media/cf1f13_ccae35dd472a4910b2a3cc5bc3323b45~mv2.jpg/v1/fill/w_216,h_217,al_c,q_80,usm_0.66_1.00_0.01/IMG_20201106_225157_867.webp"
                  alt="..."
                  className="img-fluid rounded-circle"
                />
              </div>
              <div className="my-4">
                <p className="name mb-0">VIVEK SHARMA </p>
                <p className="iit mb-1">IIT BOMBAY</p>
                <div className="d-flex justify-content-center">
                  <p className="mx-2">
                    <a
                      href="https://www.linkedin.com/in/vivek-sharma-9b288a204/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="https://static.wixstatic.com/media/48a2a42b19814efaa824450f23e8a253.png/v1/fill/w_18,h_18,al_c,q_85,usm_0.66_1.00_0.01/48a2a42b19814efaa824450f23e8a253.webp"
                        alt="..."
                      />
                    </a>
                  </p>
                  <p className="mx-2">
                    <a
                      href="https://www.facebook.com/profile.php?id=100033476581618"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="https://static.wixstatic.com/media/e316f544f9094143b9eac01f1f19e697.png/v1/fill/w_18,h_18,al_c,q_85,usm_0.66_1.00_0.01/e316f544f9094143b9eac01f1f19e697.webp"
                        alt="..."
                      />
                    </a>
                  </p>
                  <p className="mx-2">
                    <a
                      href="https://www.instagram.com/vivek.sh.arma/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="https://static.wixstatic.com/media/9f9c321c774844b793180620472aa4f1.png/v1/fill/w_18,h_18,al_c,q_85,usm_0.66_1.00_0.01/9f9c321c774844b793180620472aa4f1.webp"
                        alt="..."
                      />
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://static.wixstatic.com/media/cf1f13_69e33b6cf77243bca837802690816194~mv2.jpg/v1/fill/w_216,h_217,al_c,q_80,usm_0.66_1.00_0.01/20210625_200808.webp"
                alt="..."
                className="img-fluid rounded-circle"
              />
              <div className="my-4">
                <p className="name mb-0">APOORV VERMA </p>
                <p className="iit mb-1">IIT BOMBAY</p>
                <div className="d-flex justify-content-center">
                  <p className="mx-2">
                    <a
                      href="https://www.linkedin.com/in/apoorv-verma-b52794201/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="https://static.wixstatic.com/media/48a2a42b19814efaa824450f23e8a253.png/v1/fill/w_18,h_18,al_c,q_85,usm_0.66_1.00_0.01/48a2a42b19814efaa824450f23e8a253.webp"
                        alt="..."
                      />
                    </a>
                  </p>
                  <p className="mx-2">
                    <a
                      href="https://www.facebook.com/apoorv.verma.14268"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="https://static.wixstatic.com/media/e316f544f9094143b9eac01f1f19e697.png/v1/fill/w_18,h_18,al_c,q_85,usm_0.66_1.00_0.01/e316f544f9094143b9eac01f1f19e697.webp"
                        alt="..."
                      />
                    </a>
                  </p>
                  <p className="mx-2">
                    <a
                      href="https://www.instagram.com/iam_apoorv03/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="https://static.wixstatic.com/media/9f9c321c774844b793180620472aa4f1.png/v1/fill/w_18,h_18,al_c,q_85,usm_0.66_1.00_0.01/9f9c321c774844b793180620472aa4f1.webp"
                        alt="..."
                      />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about mb-5 d-lg-block d-none">
          <div className="text-center my-3">
            <p className="display-6 meet d-inline-block pb-2">About Us</p>
          </div>
          <div className="mt-2 mb-5">
            <p className="fs-5 mx-lg-5">
              We are a group of IITians from IIT Bombay. Many students fail to
              achieve their dream IITs and NITs only due to due lack of proper
              guidance. We think If you want something to dream, dare, do it. If
              want something extraordinary, dream, dare do it with a great
              mentor . Every student can achieve their dream if they can make an
              organized plan, if you fail to make a plan you are planning to
              fail. We believe a child does not need a lightning-fast mind to be
              a scientist, nor does he need a miraculous memory, nor is it
              necessary that he get very high grades in school. the only point
              that count is that the child has a high degree of interest in
              science . Stickability is 95% of ability{" "}
            </p>
            <p className="fs-5 mx-lg-5">
              Thinking that guides your intelligence is much more important than
              how much intelligence you may have. Its all about how you manage
              your brains instead of worrying about how much IQ you have got.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
