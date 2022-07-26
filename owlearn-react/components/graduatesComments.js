import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Keyboard, Autoplay } from "swiper";
import ArrowCircleUpRoundedIcon from "@mui/icons-material/ArrowCircleUpRounded";

import graduatesComments from "../public/graduates-comments.svg";
import avatar from "../public/avatar.svg";

import "swiper/css";
import "swiper/css/navigation";
import styles from "../styles/graduatesComments.module.css";

const GraduatesComments = () => {
  SwiperCore.use([Autoplay]);

  const generateRandom = (maxLimit = 8000, minLimit = 3000) => {
    // generate a floating number which is in range of 1 to 0
    // to so to make it between zero to our maximum limit multiply it to our maximum number.
    let randomNum = Math.random() * maxLimit;

    // but still it's floating, so floor method makes it integer number which is needed
    // however floating is cool but to for css processing.
    randomNum = Math.floor(randomNum);

    if (randomNum < minLimit) {
      return minLimit;
    }

    return randomNum;
  };
  return (
    <section className={styles.container}>
      <div className={styles.graduates_comments_image}>
        <Image src={graduatesComments} alt="" />
      </div>
      <div className={styles.graduates_comments}>
        <h3>نظرات دانشجویان</h3>
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          keyboard={true}
          modules={[Navigation, Keyboard]}
          className={styles.slider}
          loop={true}
          autoplay={{
            delay: generateRandom(2000, 4000),
            disableOnInteraction: true,
          }}
        >
          <SwiperSlide className={styles.slide}>
            <div className={styles.comment_data_container}>
              <div className={styles.comment_data_header}>
                <Image src={avatar} alt="" />
                <div className={styles.comment_header_data}>
                  <h5>ویتو محققیان</h5>
                  <h4>دانشجو دوره جاوااسکریپت</h4>
                </div>
              </div>
              <p>
                در ای بخش مطالب بسیار باارزشی در حوضه برنامه نویسی و پایتون برای
                شما دوستان قرار گرفته است که تمامی آن ها از منابع معتبر دنیا جمع
                آوری و به بهترین شکل ترجمه شده است و در کنار آن ها تجربیات ما
                نیز قرار گرفته است تا به شما کمک کنیم تا مطالب را هر چه کامل تر
                و بهتر درک کنید.
              </p>
            </div>
            <div className={styles.course_info_container}>
              <ArrowCircleUpRoundedIcon
                sx={{
                  color: "var(--borderColor)",
                  transform: "rotate(-90deg)",
                  fontSize: "2.5rem",
                }}
              />
              <div className={styles.course_info}>
                <h4>دوره ی پروژه محور جنگو</h4>
                <h5>
                  <span>123</span>دانشجو
                </h5>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <div className={styles.comment_data_container}>
              <div className={styles.comment_data_header}>
                <Image src={avatar} alt="" />
                <div className={styles.comment_header_data}>
                  <h5>ویتو محققیان</h5>
                  <h4>دانشجو دوره جاوااسکریپت</h4>
                </div>
              </div>
              <p>
                در ای بخش مطالب بسیار باارزشی در حوضه برنامه نویسی و پایتون برای
              </p>
            </div>
            <div className={styles.course_info_container}>
              <ArrowCircleUpRoundedIcon
                sx={{
                  color: "var(--borderColor)",
                  transform: "rotate(-90deg)",
                  fontSize: "2.5rem",
                }}
              />
              <div className={styles.course_info}>
                <h4>دوره ی پروژه محور جنگو</h4>
                <h5>
                  <span>123</span>دانشجو
                </h5>
              </div>
            </div>
          </SwiperSlide>
          {/* <SwiperSlide className={styles.slide}>asdfasdf</SwiperSlide> */}
        </Swiper>
      </div>
    </section>
  );
};

export default GraduatesComments;
