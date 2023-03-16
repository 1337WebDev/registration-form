import React from "react";
import { motion } from "framer-motion";

const Welcome = ({ switchPage }) => {
  return (
    <>
      <motion.div
        className="section flex__col"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="heading__large mb">
          We are delighted to welcome you to the 1337 Web and Mobile Development
          Club! We are thrilled to announce that our club is now open to
          students from UM6P and all 1337 campuses.
        </h1>
        <button onClick={switchPage}>Register Now</button>
      </motion.div>
    </>
  );
};

export default Welcome;
