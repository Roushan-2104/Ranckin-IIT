import React from "react";
import "../App.css";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import GoToTop from "./GoTop";

export default function join() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.5 }}
    >
      <GoToTop />
      <Helmet>
        <title>Join Us | Ranckin | Mentorship</title>
      </Helmet>
      <div className="container my-5">
        <div className="text-center">
          <p className="display-5 meet d-inline-block pb-2">Join Us</p>
        </div>
        <div className="d-flex flex-column flex-lg-row my-5">
          <div>
            <div
              className="card mx-lg-4 mx-auto cardec shadow-lg my-3"
              style={{ width: "20rem" }}
            >
              <img
                src="https://static.wixstatic.com/media/cf1f13_6489abbb2c8f408099afffe7f156685f~mv2.jpg/v1/crop/x_0,y_261,w_2000,h_1477/fill/w_306,h_226,al_c,q_80,usm_0.66_1.00_0.01/websit99.webp"
                className="card-img-top position-relative"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title position-absolute time-2 ">
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
                  <a href="#no" className="btn-book mx-auto">
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-lg-3 mt-5 join-flex-2">
            <p className="px-lg-5 text-join">
              If you want something, dream, dare, do it. If want something
              extraordinary, dream, dare do it with a great mentor"Thinking that
              guides your intelligence is much more important than how much
              intelligence you may have
            </p>
            <p className="px-lg-5 text-join my-5">
              A mentor is someone who allows you to see the hope inside
              yourself. An IIT JEE aspirants requires to have a proper guidance
              under a mentor besides having dedication, determination and
              hardwork from his or her side. But most of them they do not
              understand the importance of proper mentor in their preparation
              period because of which they land in a place where they do not
              deserve as they deserve much better place than that
            </p>
            <p className="onestep">
              Get One step closer to your{" "}
              <span style={{ color: "#276BA5" }}>aim IIT!!...</span>
            </p>
            <p className="onestep d-inline-block">
              {" "}
              Under the mentorship of experts from{" "}
              <span style={{ color: "#8B0000" }}>IIT Bombay!!</span>
            </p>
            <p className="mt-4">
              <a
                href="https://forms.gle/zbmdDHuFEnV4mJGy8"
                rel="noreferrer"
                target="_blank"
                className="button"
              >
                Fill Form
              </a>
            </p>
          </div>
        </div>
        <div className="container">
          <div
            className="display-3 text-center"
            style={{ fontFamily: "serif" }}
          >
            Scan your QR code to pay
          </div>
          <div className="d-flex flex-column flex-lg-row justify-content-center">
            <div className="text-center mt-5">
              <p className="display-6 fw-normal">Use our UPI number</p>
              <p className="fw-bold fs-2">8877430565</p>
              <p className="display-6 fw-normal">Gpay, PhonePe, Paytm</p>
            </div>
            <div className="text-center">
              <img
                src="https://static.wixstatic.com/media/cf1f13_999eef82a58d4435a9e010bf047f1ab4~mv2.jpg/v1/fill/w_304,h_327,al_c,q_80,usm_0.66_1.00_0.01/Qr%20code_edited.webp"
                className="img-fluid"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
