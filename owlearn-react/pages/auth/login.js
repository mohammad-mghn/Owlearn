import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import landingImage from "../../public/auth-image.svg";
import googleIcon from "../../public/icons/google-icon.svg";
import faceBookIcon from "../../public/icons/facebook-icon.svg";

import styles from "../../styles/auth/auth.module.css";
import CustomeInput from "../../components/customeInput";

const Login = () => {
  const [visiable, setVisiable] = useState(false);

  const visibilityHandler = () => {
    setVisiable((prevValue) => !prevValue);
  };

  return (
    <section className={styles.container}>
      <div className={styles.image_container}>
        <Image src={landingImage} alt="" />
      </div>
      <form className={`${styles.form} ${styles.form_login}`}>
        <h2>ورود در Owlearn</h2>
        <div className={styles.social_networks_container}>
          <div className={styles.social_network}>
            <Image src={googleIcon} alt="google icon" />
            <h6>Sign in with google</h6>
          </div>
          <div className={styles.social_network}>
            <Image src={faceBookIcon} alt="google icon" />
            <h6>Sign in with Facebook</h6>
          </div>
        </div>
        <p>-OR-</p>
        <div className={styles.inputs_container}>
          <CustomeInput type="textt" text={"ایمیل یا شماره همراه"} />
          <CustomeInput
            type={"password"}
            text={"رمز عبور"}
            visiable={visiable}
            visibilityHandler={visibilityHandler}
          />
        </div>
        <button>ثبت نام</button>
        <p>
          قبلا ثبت نام قولیدی؟ <Link href={"/auth/signup"}>وارد شو</Link>
        </p>
      </form>
    </section>
  );
};

export default Login;
