import React, { useState, useEffect } from "react";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import { useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

import DarkIcon from "../public/icons/navbar-owlearn-dark.png";
import LightIcon from "../public/icons/navbar-owlearn-light.png";

import styles from "../styles/navbar/navbar.module.css";

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
        <div className={styles.menu_icon_container}>
          <MenuRoundedIcon
            sx={{ fontSize: "2.5rem" }}
            onClick={showNavbarHandler}
          />
        </div>
        <div className={styles.auth_buttons_container}>
          <Link href={"/auth/signup"}>
            <button
              onClick={() => {
                pathHandler("");
              }}
            >
              ثبت نام
            </button>
          </Link>
          <Link href={"/auth/login"}>
            <button
              onClick={() => {
                pathHandler("");
              }}
            >
              ورود
            </button>
          </Link>
        </div>
        <div className={styles.links__logo}>
          <div>
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
              className={styles.logo__name}
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
            <div className={styles.container_mobile}>
              <div className={styles.auth_buttons_container_mobile}>
                <Link href={"/auth/signup"}>
                  <button
                    onClick={() => {
                      pathHandler("");
                    }}
                  >
                    ثبت نام
                  </button>
                </Link>
                <Link href={"/auth/login"}>
                  <button
                    onClick={() => {
                      pathHandler("");
                    }}
                  >
                    ورود
                  </button>
                </Link>
              </div>
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
                <div className={styles.logo__name_container}>
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
