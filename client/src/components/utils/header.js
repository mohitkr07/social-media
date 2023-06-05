import React from "react";
import styles from "./utils.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faMessage } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className={styles["header"]}>
      <div className={styles["header-logo"]}>
        <img src="./images/M.png"></img>
      </div>
      <div className={styles["header-navigate"]}>
        <FontAwesomeIcon
          className={styles["icon"]}
          icon={faHouse}
          size="lg"
          style={{ color: "#1a273c" }}
        />
        <FontAwesomeIcon
          className={styles["icon"]}
          icon={faMessage}
          size="lg"
          style={{ color: "#1a273c" }}
        />
      </div>
      <div className={styles["header-logout"]}>
        <button>sign out</button>
      </div>
    </div>
  );
};

export default Header;
