"use client";

import React, { useEffect, useState } from "react";
import styles from "../app/cssStyles/Main.module.css";

const Progress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 600);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className={styles.loadingContainer}>
        <div
          className={styles.loadingBar}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="md:w-96 md:h-96 relative left-0.5 md:left-[40%] flex items-center justify-center">
        <img className="w-52 h-52" src="/spinner.gif" />
      </div>
    </>
  );
};

export default Progress;
