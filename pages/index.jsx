import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Form, Submit, Welcome } from "@/Components";
import leet from "@/public/1337.svg";
import webdev from "@/public/webdev.svg";
import { motion } from "framer-motion";

const { src: leetSrc } = leet;
const { src: webdevSrc } = webdev;

export default function Home() {
  const [user, setUser] = useState("");
  const [page, setPage] = useState(0);
  const switchPage = () => {
    if (page !== 2) {
      setPage(page + 1);
    }
  };
  return (
    <>
      <Head>
        <title>Register - 1337BG Web abd Mobile Development Club</title>
        <meta
          name="description"
          content="1337 Web and Mobile Development Club registration form"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="body">
        <motion.header
          className="container flex__row mb"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={webdevSrc}
            alt="1337 Web and Mobile Development logo"
            className="logo"
          />
          <div className="flex__row">
            <p className="text mr">Powered by</p>
            <img src={leetSrc} alt="1337FIL School logo" className="logo" />
          </div>
        </motion.header>
        <main className="container flex__col">
          {page === 0 && <Welcome switchPage={switchPage} />}
          {page === 1 && <Form switchPage={switchPage} setUser={setUser} />}
          {page === 2 && <Submit name={user} />}
        </main>
        <footer>
          <p className="text">
            &copy; 2023 - 1337 Web and Mobile Development Club
          </p>
        </footer>
      </div>
    </>
  );
}
