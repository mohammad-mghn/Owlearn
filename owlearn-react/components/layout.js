import React from "react";

import { useDispatch } from "react-redux";

import Navbar from "./navbar";

import { UIActions } from "../store/slices/ui-slice";
import { CSSTransition } from "react-transition-group";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Brightness7Icon from "@mui/icons-material/Brightness7";

import styles from "../styles/layout.module.css";
import Footer from "./footer";

const Layout = ({ children }) => {
  const dispatch = useDispatch();

  const [lightThemeToggle, setLightThemeToggle] = React.useState(true);

  const themeToggleHandler = () => {
    setLightThemeToggle((prevValue) => !prevValue);
  };
  return (
    <>
      <div style={{ width: "100%", overflow: "hidden" }}>
        <Navbar />

        {children}
        <div
          style={{
            position: "absolute",
            overflow: "hidden",
            width: "100vw",
            background: "transparent",
          }}
        >
          <Footer />
        </div>

        <button
          onClick={() => {
            dispatch(UIActions.toggleTheme());
            themeToggleHandler();
          }}
          className={styles.toggleTheme}
        >
          <CSSTransition
            in={!lightThemeToggle}
            timeout={300}
            classNames="theme"
            unmountOnExit
          >
            <Brightness7Icon sx={{ fontSize: "160%" }} />
          </CSSTransition>
          <CSSTransition
            in={lightThemeToggle}
            timeout={300}
            classNames="theme"
            unmountOnExit
          >
            <DarkModeIcon sx={{ fontSize: "160%" }} />
          </CSSTransition>
        </button>
      </div>
    </>
  );
};

export default Layout;
