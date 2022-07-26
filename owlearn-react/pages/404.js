import React from "react";
import Image from "next/image";

import Header from "../components/header";

import Landing from "../public/404-landing.svg";

import styles from "../styles/404.module.css";

const Error404 = () => {
  return (
    <>
      <Header title={"Owlearn • Error 404"} description="" />
      <section className={styles.container}>
        <div className={styles.landing_image}>
          <Image src={Landing} alt="" />
        </div>
        <div className={styles.landing_text_box}>
          <h3>404</h3>
          <h4>
            نیست!!! <br />
            حال نداشتم این صفحه را کد بزنم
          </h4>
          <p>برو یا اون صفحاتی که زدم حال کن.</p>
        </div>
      </section>
    </>
  );
};

export default Error404;
