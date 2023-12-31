import React from "react";
import styles from "./style";

const Myfooter = () => {
  return (
    <footer className={`w-full h-full flex items-center ${styles.expoColor} rounded-lg shadow p-4 `}>
      <div className="w-full mx-auto max-w-screen-xl py-5 md:flex md:items-center md:justify-between">
        <span className={`text-sm text-gray-500 ${styles.flexCenter} sm:text-center dark:text-gray-400`}>
          © 2023{"  "}
          <a href="https://ieeesbmits.in/" className="hover:underline">
            &nbsp; IEEE SB MITS
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center md:justify-normal justify-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#section2" className="hover:underline md:ms-4 lg:ms-4 me-4 md:me-6">
              &nbsp;About
            </a>
          </li>
          <li>
            <a href="/" className="hover:underline me-4 md:me-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/" className="hover:underline me-4 md:me-6">
              Licensing
            </a>
          </li>
          <li>
            <a href={`mailto:ieeesb@mgits.ac.in`} className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Myfooter;
