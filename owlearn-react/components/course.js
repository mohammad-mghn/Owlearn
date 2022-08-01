import React from "react";

import Image from "next/image";

import { useSelector } from "react-redux";

import courseUser from "../public/icons/course-users.svg";
import starDark from "../public/star-dark.svg";
import starLight from "../public/star-light.svg";
import starsDark from "../public/stars-background-dark.svg";
import starsLight from "../public/stars-background-light.svg";  

import styles from "../styles/course/course.module.css";

const Course = ({ course }) => {
  const isLight = useSelector((state) => state.ui.isLight);

  return (
    <div className={styles.course_container}>
      <div className={styles.cover}>
        <img src={course.cover} alt="" loading="lazy" />
      </div>
      <div className={styles.courseDataCotnainer}>
        <div className={styles.stars__header}>
          <div className={styles.stars_container}>
            <Image src={isLight ? starsLight : starsDark} alt="" />
            <div className={styles.stars_rate_container}>
              {[...Array(+course.rate)].map((item) => (
                <Image
                  src={isLight ? starLight : starDark}
                  alt=""
                  key={item}
                  className={styles.star_item}
                />
              ))}
            </div>
          </div>
          <h4 className={styles.course_header}>{course.header}</h4>
        </div>
        <div className={styles.creator__users_count}>
          <h6>
            {course.usersCount}
            <Image src={courseUser} alt="" />
          </h6>
          <h5>{course.creator}</h5>
        </div>
        <p className={styles.course_paragraph}>
          {course.description.slice(0, 230)}
          {course.description.length >= 225 && "..."}
        </p>
        <div className={styles.price__button}>
          <div className={styles.price_container}>
            {course.priceWithOutOff && (
              <h6 className={styles.off}>{course.priceWithOutOff}</h6>
            )}
            <h6>{course.price}</h6>
            <p>تومان</p>
          </div>
          <button>من همینُ میخوام</button>
        </div>
      </div>
    </div>
  );
};

export default Course;
