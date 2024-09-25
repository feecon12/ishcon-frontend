import React from "react";
import { Layout } from "./Layout";

export const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark dark:border-light dark:text-light sm:text-base">
      <Layout className="py-7 flex items-center justify-between lg:flex-col lg:py-6">
        <span>
          <time>{new Date().getFullYear()}</time> &copy; All Rights Reserved.
        </span>
        <div>
          Build with{" "}
          <span className="text-primary dark:text-primaryDark text-2xl px-1 lg:py-2">
            &#9825;
          </span>{" "}
          by{" "}
          <a href="https://www.linkedin.com/in/feecon-behera-574009188/">
            <span className="underline underline-offset-2">Feecon Behera</span>
          </a>
        </div>

        <a href="/contactus" className="underline underline-offset-2">
          Say hello
        </a>
      </Layout>
    </footer>
  );
};

