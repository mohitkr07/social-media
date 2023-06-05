import React from "react";
import styles from "./utils.module.css";

const Profile = () => {
  return (
    <div className={styles["profile-card"]}>
      <div className={styles["profile-card-top"]}>
        <div className={styles["profile-card-pic"]}>
          <img src="images/profile.png"></img>
        </div>
        <div className={styles["profile-card-intro"]}>
          <p>Mohit</p>
          {/* <br></br> */}
          <p>followers</p>
        </div>
      </div>
      <div className={styles["profile-card-bottom"]}></div>
    </div>
  );
};

export default Profile;
