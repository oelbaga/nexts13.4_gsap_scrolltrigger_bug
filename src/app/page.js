"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { gsap } from "gsap";
//importing gsap scrolltrigger throws console log error
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
  const tl = useRef();
  const h1Ref = useRef();
  useEffect(() => {
    document.body.classList.add("test-class");
    document.body.style.color = "red";
    //moving registerplugin to useeffect fixes the erro
    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {
      gsap.fromTo(
        h1Ref.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 3,
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <main className={styles.main}>
      <h1 ref={h1Ref} className={styles.h1}>
        Hello World
      </h1>
    </main>
  );
}
