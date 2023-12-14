import Head from "next/head";
import React from "react";

interface TitleProps {
  title: string;
}

const Seo = ({ title }: TitleProps) => {
  return (
    <Head>
      <title>{title} | Next Movies</title>
    </Head>
  );
};

export default Seo;
