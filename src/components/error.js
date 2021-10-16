import React from "react";
import GoToTop from "./GoTop";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

export default function error() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.5 }}
    >
      <Helmet>
        <title>404 - Page Not Found</title>
      </Helmet>
      <GoToTop />
      <div className="text-center">
        <img
          src="https://freefrontend.com/assets/img/html-css-404-page-templates/HTML-404-Page-with-SVG.png"
          alt="..."
          className="img-fluid"
        />
      </div>
    </motion.div>
  );
}
