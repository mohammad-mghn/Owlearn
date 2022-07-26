/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

import FooterSection from "./footerSection";

import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

import styles from "../styles/footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <FooterSection
        header={"دوره های پیشرفته"}
        items={[
          { text: "ارائه", path: "/" },
          { text: "دیجیتال مارکتینگ", path: "/" },
          { text: "برندینگ", path: "/" },
          { text: "بوتیوبر شو", path: "/" },
          { text: "هوش مصنوعی", path: "/" },
          { text: "ارتباطات", path: "/" },
          { text: "توسعه وب", path: "/" },
          { text: "توسعه اپلیشکن موبایل", path: "/" },
          { text: "دیزاین UI", path: "/" },
          { text: "تحقیق UX", path: "/" },
        ]}
      />
      <FooterSection
        header={"دوره های ابتدایی"}
        items={[
          { text: "ارائه", path: "/" },
          { text: "دیجیتال مارکتینگ", path: "/" },
          { text: "برندینگ", path: "/" },
          { text: "بوتیوبر شو", path: "/" },
          { text: "هوش مصنوعی", path: "/" },
          { text: "ارتباطات", path: "/" },
          { text: "توسعه وب", path: "/" },
          { text: "توسعه اپلیشکن موبایل", path: "/" },
          { text: "دیزاین UI", path: "/" },
          { text: "تحقیق UX", path: "/" },
        ]}
      />
      <FooterSection
        header={"درباره ی اول لرن"}
        items={[
          { text: "مقاله های شروع", path: "/" },
          { text: "شغل ها", path: "/" },
          { text: "همکاری با ما", path: "/" },
          { text: "برنامه های دیگر", path: "/" },
          { text: "برنامه های دیگر", path: "/" },
        ]}
      />
      <div className={styles.footer_section}>
        <h4>ارتباط با ما</h4>
        <div className={styles.footer_options_container}>
          <h6>
            <Link href={"/"}>
              <a>support@owlearn.com</a>
            </Link>
          </h6>
          <h6>
            <Link href={"/"}>
              <a>(+62) 85923935983</a>
            </Link>
          </h6>
          <p>
            هدف مجموعه سون لرن افزایش سطح کیفیت آموزش و ساختن راهی برای ورود
            دانشجویان به بازار کار تخصصی است
          </p>
          <div className={styles.social_icons_container}>
            <span className={styles.social_icon} style={{ color: "#c40000bf" }}>
              <Link href={"/"}>
                <a>
                  <YouTubeIcon />
                </a>
              </Link>
            </span>
            <span className={styles.social_icon} style={{ color: "#000fe4bf" }}>
              <Link href={"/"}>
                <a>
                  <LinkedInIcon className={styles.social_icon} />
                </a>
              </Link>
            </span>
            <span className={styles.social_icon}>
              <a>
                <Link href={"/"}>
                  <TwitterIcon
                    className={styles.social_icon}
                    style={{ color: "#00eeffbf" }}
                  />
                </Link>
              </a>
            </span>

            <span className={styles.social_icon}>
              <a>
                <Link href={"/"}>
                  <InstagramIcon
                    className={styles.social_icon}
                    style={{ color: "#ff00d4bf" }}
                  />
                </Link>
              </a>
            </span>
          </div>
        </div>
      </div>{" "}
      <FooterSection
        header={"دوره های سخت افزار"}
        items={[
          { text: "ارائه", path: "/" },
          { text: "دیجیتال مارکتینگ", path: "/" },
          { text: "برندینگ", path: "/" },
          { text: "بوتیوبر شو", path: "/" },
          { text: "هوش مصنوعی", path: "/" },
          { text: "ارتباطات", path: "/" },
          { text: "توسعه وب", path: "/" },
          { text: "توسعه اپلیشکن موبایل", path: "/" },
          { text: "دیزاین UI", path: "/" },
          { text: "تحقیق UX", path: "/" },
        ]}
      />
      <div className={styles.footer_section}>
        <h4>شرکت های زمینه</h4>
        <div className={styles.footer_options_container}>
          <img
            src="https://images2.imgbox.com/2f/25/fV0IS7ud_o.png"
            alt=""
            className={styles.superior_img}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
