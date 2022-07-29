import React from "react";

import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";

import styles from "../styles/auth/auth.module.css";

const CustomeInput = ({ type, text, visiable, visibilityHandler }) => {
  return (
    <div className={styles.input_container}>
      {type === "password" ? (
        <>
          <input type={visiable ? "text" : "password"} placeholder={text} />
          <div
            className={styles.show_password_container}
            onClick={visibilityHandler}
          >
            <span>
              {visiable ? (
                <VisibilityRoundedIcon sx={{ fontSize: "135%" }} />
              ) : (
                <VisibilityOffRoundedIcon sx={{ fontSize: "135%" }} />
              )}
            </span>
          </div>
        </>
      ) : (
        <input
          type={type}
          placeholder={text}
          style={{ fontFamily: `"IRANSansWeb(FaNum)"` }}
        />
      )}
    </div>
  );
};

export default CustomeInput;
