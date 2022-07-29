import React, { useState, useEffect } from "react";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import { useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

import DarkIcon from "../public/icons/navbar-owlearn-dark.png";
import LightIcon from "../public/icons/navbar-owlearn-light.png";

import styles from "../styles/navbar.module.css";

const Navbar = () => {
  const router = useRouter();

  const [activePath, setActivePath] = useState(router.route);
  const [clearNavbar, setClearNavbar] = useState(true);
  const [showNavbar, setShowNavbar] = useState(false);

  const isLightMode = useSelector((state) => state.ui.isLight);

  const links = [
    { header: "خانه", path: "/" },
    { header: "دوره ها", path: "/tutorials" },
    { header: "مقاله ها", path: "/blogs" },
    { header: "چت باکس", path: "/chat-box" },
    { header: "تماس با ما", path: "/contact" },
  ];

  const pathHandler = (path) => {
    setActivePath(path);
  };

  const showNavbarHandler = () => {
    setShowNavbar((prevValue) => !prevValue);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset === 0) {
        setClearNavbar(true);
      } else {
        setClearNavbar(false);
      }
    });
  }, []);

  return (
    <>
      <header
        style={
          clearNavbar
            ? {}
            : {
                backgroundColor: "var(--navbarBackground)",
                backdropFilter: "blur(20px)",
              }
        }
        className={styles.container}
      >
        <div className={styles.menuIconContainer}>
          <MenuRoundedIcon
            sx={{ fontSize: "2.5rem" }}
            onClick={showNavbarHandler}
          />
        </div>
        <div className={styles.authContainer}>
          <Link href={"/auth/signup"}>
            <button
              className={styles.authButton}
              onClick={() => {
                pathHandler("");
              }}
            >
              ثبت نام{" "}
            </button>
          </Link>
          <Link href={"/auth/login"}>
            <button
              className={styles.authButton}
              onClick={() => {
                pathHandler("");
              }}
            >
              ورود
            </button>
          </Link>
        </div>
        <div className={styles.linksAndLogo}>
          <div className={styles.links}>
            {links.map((link) => (
              <Link href={link.path} key={link.path}>
                <a
                  className={link.path === activePath && styles.active}
                  onClick={() => {
                    pathHandler(link.path);
                  }}
                >
                  {link.header}
                </a>
              </Link>
            ))}
          </div>
          <Link href={"/"}>
            <div
              className={styles.logoAndName}
              onClick={() => {
                pathHandler("/");
              }}
            >
              <h1>Owlearn</h1>
              <Image
                src={isLightMode ? LightIcon : DarkIcon}
                alt="owlearn icon"
                height={40}
                width={70}
              />
            </div>
          </Link>
        </div>
        <CSSTransition
          in={showNavbar}
          timeout={300}
          classNames="navbar"
          unmountOnExit
        >
          <>
            <div className={styles.containerMobile}>
              <div className={styles.authContainerMobile}>
                <Link href={"/auth/signup"}>
                  <button
                    className={styles.authButtonMobile}
                    onClick={() => {
                      pathHandler("");
                    }}
                  >
                    ثبت نام{" "}
                  </button>
                </Link>
                <Link href={"/auth/login"}>
                  <button
                    className={styles.authButtonMobile}
                    onClick={() => {
                      pathHandler("");
                    }}
                  >
                    ورود
                  </button>
                </Link>
              </div>
              <div className={styles.linksMobile}>
                {links.map((link) => (
                  <Link href={link.path} key={link.path}>
                    <a
                      className={link.path === activePath && styles.active}
                      onClick={() => {
                        pathHandler(link.path);
                      }}
                    >
                      {link.header}
                    </a>
                  </Link>
                ))}
              </div>
              <Link href={"/"}>
                <div className={styles.logoAndNameMobile}>
                  <h1>Owlearn</h1>
                  <Image
                    src={isLightMode ? LightIcon : DarkIcon}
                    alt="owlearn icon"
                    height={40}
                    width={70}
                  />
                </div>
              </Link>
            </div>
            <div
              className={styles.navbarMobileCloser}
              onClick={showNavbarHandler}
            ></div>
          </>
        </CSSTransition>
      </header>
    </>
  );
};

export default Navbar;
