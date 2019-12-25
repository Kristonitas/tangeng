import React from "react";
import App from "next/app";
import Head from "next/head";
import Navbar from "../components/Navbar";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>Thoughts!</title>
        </Head>
        <Navbar />
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
