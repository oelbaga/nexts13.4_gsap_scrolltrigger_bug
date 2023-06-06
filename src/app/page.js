"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { gsap } from "gsap";
//importing gsap scrolltrigger throws console log error
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const tl = useRef();
  const h1Ref = useRef();
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        h1Ref.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <main className={styles.main}>
      <h1 ref={h1Ref}>Hello World</h1>
    </main>
  );
}
