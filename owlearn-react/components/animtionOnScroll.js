import React from "react";

import { motion } from "framer-motion";

const AnimtionOnScroll = ({ initial, onScreen, key, children, amount }) => {
  const Varients = {
    offscreen: {
      ...initial,
    },
    onscreen: {
      ...onScreen,
      transition: {
        type: "spring",
        bounce: 0.4,
        DelayNode: 1,
      },
    },
  };

  return (
    <motion.div
      key={key}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: amount }}
    >
      <motion.div variants={Varients}>{children}</motion.div>
    </motion.div>
  );
};

export default AnimtionOnScroll;
