"use client"
import { useState, useEffect } from "react";
import styles from "./Rotator.module.css";

export default function Rotator({ items = [], interval = 3000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (items.length <= 1 || isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, interval);

    return () => clearInterval(timer);
  }, [items, interval, isPaused]);

  if (!items.length) return null;

  return (
    <div 
      className={styles.container}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {items.map((item, index) => {
        const isActive = index === currentIndex;
        
        return (
          <div
            key={index}
            className={`${styles.slide} ${isActive ? styles.active : ""}`}
            aria-hidden={!isActive}
          >
            {typeof item === "string" ? (
              <span className={styles.text}>{item}</span>
            ) : (
              item
            )}
          </div>
        );
      })}
    </div>
  );
}
