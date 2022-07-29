import Image from "next/image";

import { useSelector } from "react-redux";

import Header from "../components/header";
import Courses from "../components/courses";
import { AnimatePresence } from "framer-motion";
import AnimtionOnScroll from "../components/animtionOnScroll";
import GraduatesComments from "../components/graduatesComments";

// landing images
import FAQImage from "../public/FAQ.svg";
import landingImage from "../public/landing-image.svg";
import UnderlineImage from "../public/underline-image.svg";
import UnderlineImageDark from "../public/underline-image-dark.svg";
import descriptionImage from "../public/description-image.svg";
import descriptionImageDark from "../public/description-image-dark.svg";

// deatails Images
import userLight from "../public/icons/user-light.svg";
import userDark from "../public/icons/user-dark.svg";
import blogLight from "../public/icons/blog-light.svg";
import blogDark from "../public/icons/blog-dark.svg";
import timeLight from "../public/icons/time-light.svg";
import timeDark from "../public/icons/time-dark.svg";
import courseLight from "../public/icons/course-light.svg";
import courseDark from "../public/icons/course-dark.svg";

// companies images
import google from "../public/icons/companies/google.svg";
import shopify from "../public/icons/companies/shopify.svg";
import dropBox from "../public/icons/companies/dropbox.svg";
import clickUp from "../public/icons/companies/click-up.svg";
import payChex from "../public/icons/companies/Paychex.svg";
import segment from "../public/icons/companies/segment.svg";
import elastic from "../public/icons/companies/elastic.svg";
import serviceNow from "../public/icons/companies/servicenow.svg";

import styles from "../styles/Home.module.css";

function Home() {
  const isLight = useSelector((state) => state.ui.isLight);

  const details = [
    { data: 12000, header: "کاربر", light: userLight, dark: userDark },
    { data: 60, header: "مقاله", light: blogLight, dark: blogDark },
    { data: 19123, header: "دقیقه اموزش", light: timeLight, dark: timeDark },
    { data: 23, header: "دوره آموزشی", light: courseLight, dark: courseDark },
  ];

  return (
    <>
      <Header
        title={"Owlearn"}
        description={"owlearn is the one of the best learning website "}
      />
      <AnimatePresence>
        <main className={styles.container}>
          <section className={styles.landingSection}>
            <div className={styles.landingImage}>
              <Image src={landingImage} alt="" height={550} width={750} />
            </div>
            <div className={styles.landingData}>
              <h2>هر مهارتی را برای پیشبرد مسیر شغلی خود بیاموزید</h2>
              <Image
                src={isLight ? UnderlineImage : UnderlineImageDark}
                alt=""
              />
              <p className={styles.landingDescription}>
                آیا می خواهید مهارت های کاری خود را بهبود بخشید؟ برای بهبود
                عملکرد خود در محل کار، باید با کمک یک مربی عالی بیشتر مطالعه
                کنید
              </p>
              <button className={styles.landingPageButton}>بزن بریم</button>
            </div>
            <span className={styles.pinkLandingGradient}></span>
          </section>

          <AnimtionOnScroll
            key={"details"}
            amount={0.25}
            initial={{ y: 100, opacity: 0 }}
            onScreen={{ y: 0, opacity: 1 }}
          >
            <section className={styles.detailsContainer}>
              {details.map((item) => (
                <div className={styles.detail} key={item.header}>
                  <div className={styles.detailsHeaderContainer}>
                    <h5>{item.header}</h5>
                    <p>{item.data}</p>
                  </div>
                  <Image src={isLight ? item.light : item.dark} alt="" />
                </div>
              ))}
            </section>
          </AnimtionOnScroll>

          <section className={styles.descriptionContainer}>
            <div className={styles.descriptionImageContainer}>
              <AnimtionOnScroll
                key={"description-image"}
                amount={0.5}
                initial={{ scale: 0.75, opacity: 0 }}
                onScreen={{ scale: 1, opacity: 1 }}
              >
                <Image
                  src={isLight ? descriptionImage : descriptionImageDark}
                  alt=""
                  width={575}
                  height={575}
                  className={styles.descriptionImage}
                />
              </AnimtionOnScroll>
            </div>
            <div className={styles.descriptionTextContainer}>
              <h3>اَول لرن به شما کمک میکند تا با تجربه شوید</h3>
              <p>
                اَول لرن راه حل های آموزش الکترونیکی را برای شرکت ها، دانشگاه ها
                و افراد حرفه ای ارائه می دهد. این به کاربران اجازه می دهد دوره
                هایی ایجاد کنند و یک سیستم مدیریت یادگیری یکپارچه را ارائه می
                دهد. پیشنهادات آن شامل ابزارهای دوره دیجیتال، مواد مطالعه،
                زیرساخت فناوری اطلاعات و سایر عملیات است.
              </p>
              <button>عضو شوم</button>
            </div>
          </section>

          <Courses />

          <section className={styles.FAQ_container}>
            <div className={styles.FAQ_image_container}>
              <AnimtionOnScroll
                key={"FAQ"}
                amount={0.5}
                initial={{ scale: 0.75, opacity: 0 }}
                onScreen={{ scale: 1, opacity: 1 }}
              >
                <Image src={FAQImage} alt="" />
              </AnimtionOnScroll>
            </div>
            <div className={styles.FAQ_data}>
              <h3>!سوالات متداول شما عزیزان</h3>
              <h4>پشتیبانی دوره ها به چه صورت است؟</h4>
              <p>پشتیبانی دوره اموزشی به صورت دائمی و مادام العمر است.</p>
              <h4>آیا دوره ها کامل است؟</h4>
              <p>
                پای تو پای در انتخاب مدرسان خود بسیار سخت گیر است و تمامی دوره
                های حود را سعی کرده است در بیشتر کیفیت علمی و مفهومی نگه دارد.
                پس از نظر کیفیت خیالتان راحت باشد.
              </p>
              <h4>آیا ضمانت بازگشت وجه دارد؟</h4>
              <p>
                بله در صورتی که از ان ناراضی باشید بدون هیچ قید و شرطی مبلغ باز
                میگردد.
              </p>
            </div>
          </section>

          <section className={styles.companies}>
            <h2>دانشجویان ما در اینجا ها کار میکنند</h2>
            <div>
              <Image src={google} alt="" />
              <Image src={shopify} alt="" />
              <Image src={dropBox} alt="" />
              <Image src={clickUp} alt="" />
              <Image src={segment} alt="" />
              <Image src={elastic} alt="" />
              <Image src={payChex} alt="" />
              <Image src={serviceNow} alt="" />
            </div>
          </section>

          <GraduatesComments />
        </main>
      </AnimatePresence>
    </>
  );
}
export default Home;
