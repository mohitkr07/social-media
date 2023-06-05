import React from "react";
import styles from "./utils.module.css";

const Postcard = () => {
  return <div className={styles["post-box"]}>
    <img src="./images/mumbai.jpg"></img>
    <img src="./images/profile.png"></img>
  </div>;
};

export default Postcard;
