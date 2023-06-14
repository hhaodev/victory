import Head from "next/head";
import React from "react";

export interface HeaderProps {}

export default function Header(props: HeaderProps) {
  return (
    <Head>
      <title>Vjctory</title>
      <link rel="" href="/images/favicon.ico" />
    </Head>
  );
}
