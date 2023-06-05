import React from "react";
import Header from "../utils/header";
import Profile from "../utils/profile-card";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles["container-body"]}>
        <div className={styles["body-left"]}></div>
        <div className={styles["body-center"]}></div>
        <div className={styles["body-right"]}></div>
      </div>
    </div>
  );
};

export default Home;
