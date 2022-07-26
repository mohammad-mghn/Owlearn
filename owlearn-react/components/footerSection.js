import React from "react";

import Link from "next/link";

import styles from "../styles/footer.module.css";

const FooterSection = ({ header, items }) => {
  return (
    <div className={styles.footer_section}>
      <h4>{header}</h4>
      <div className={styles.footer_options_container}>
        {items.map((item, index) => (
          <h5 key={index}>
            <Link href={item.path}>
              <a>{item.text}</a>
            </Link>
          </h5>
        ))}
      </div>
    </div>
  );
};

export default FooterSection;
