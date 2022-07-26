import React from "react";

import Head from "next/head";

const Header = ({ description, title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="../icon.svg" />
    </Head>
  );
};

export default Header;
