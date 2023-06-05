import React from "react";
import Header from "../utils/header";
import Profile from "../utils/profile-card";
import Postcard from "../utils/post-card";
import styles from "./home.module.css";

const Home = () => {
  return (
    <>
      <div className={styles["nav"]}>
        <Header />
      </div>
      <div className={styles.container}>
        <div className={styles["container-body"]}>
          <div className={styles["body-left"]}>
            <div className={styles["body-left-fixed"]}>
              <Profile />
            </div>
          </div>
          <div className={styles["body-center"]}>
            <Postcard />
          </div>
          <div className={styles["body-right"]}>
            <div className={styles["body-right-fixed"]}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
