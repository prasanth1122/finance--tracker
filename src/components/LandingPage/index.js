import React from "react";
import Button from "../Common/Button";
import "./styles.css";
import phone from "../../assets/phone.png";
import gradient from "../../assets/gradient.png";
import { motion } from "framer-motion";
function MainComponent() {
  return (
    <div className="flex_info">
      <div className="left_component">
        <motion.h1
          className="track_crypto_heading"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Track Crypto
        </motion.h1>
        <motion.h1
          className="real_time_heading"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Real Time.
        </motion.h1>
        <motion.p
          className="info_text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          Track crypto through a public api in real time. Visit the dashboard
          through do so!.
        </motion.p>
        <div className="btn_flex">
          <Button text={"Dashboard"} />
          <Button text={"Share"} outlined={true} />
        </div>
      </div>
      <div className="phone_conatiner">
        <motion.img
          src={phone}
          className="phone"
          alt="phone.logo"
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 3,
            repeat: Infinity,
          }}
        />
        <img src={gradient} className="gradient" alt="gradient.logo" />
      </div>
    </div>
  );
}

export default MainComponent;
