import React from "react";
import "../App.css";
import { motion } from "framer-motion";
import GoToTop from "./GoTop";

export default function Youthkaksha() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.5 }}
    >
      <GoToTop />
      <div className="my-5 container">
        <div>
          <div className="d-flex flex-lg-row flex-column justify-content-center">
            <img
              src="https://static.wixstatic.com/media/cf1f13_235c33bbb3ad4039b0a7c918553b3bfd~mv2.png/v1/fill/w_311,h_310,al_c,q_85,usm_0.66_1.00_0.01/YK.webp"
              alt="..."
              className="img-fluid shadow-lg mx-lg-0 mx-5"
              style={{ borderRadius: "10px", border: "2px solid black" }}
            />
            <p className="mx-5 fs-1">Welcome to YouthKaksha</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
