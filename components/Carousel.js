"use client";

import React, { useRef, useState, useEffect } from "react";
import styles from "./Carousel.module.css";

// Mock Data structure for the demo
// const SAMPLE_SLIDES = [
//   {
//     id: 1,
//     title: "First Canvas",
//     caption: "Eager Load Resource Focus",
//     className: "slide1",
//   },
//   {
//     id: 2,
//     title: "Second Canvas",
//     caption: "Fluid Layout System",
//     className: "slide2",
//   },
//   {
//     id: 3,
//     title: "Third Canvas",
//     caption: "Hardware Accelerated Snap",
//     className: "slide3",
//   },
// ];
const SAMPLE_SLIDES = [
  {
    id: 1,
    title: "Shalomov",
    caption: "Biography",
    image: "/photos/bios/ShalomovBioPrint.png",
  },
  {
    id: 2,
    title: "Holmes",
    caption: "Biography",
    image: "/photos/bios/HolmesBioPrint.png",
  },
  {
    id: 3,
    title: "Holmes",
    caption: "Biography",
    image: "/photos/bios/HolmesBioPrint.png",
  },
  {
    id: 4,
    title: "Shalomov",
    caption: "Biography",
    image: "/photos/bios/ShalomovBioPrint.png",
  },
];
export default function Carousel({ slides = SAMPLE_SLIDES }) {
  const trackRef = useRef(null);
  // const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  // const [isNextDisabled, setIsNextDisabled] = useState(false);

  const [currentSlide, setCurrentSlide] = useState(0);

  const updateButtonStates = () => {
    const track = trackRef.current;
    if (!track) return;

    const { scrollLeft, scrollWidth, clientWidth } = track;
    const maxScroll = scrollWidth - clientWidth;

    // setIsPrevDisabled(scrollLeft <= 2);
    // setIsNextDisabled(scrollLeft >= maxScroll - 2);
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    updateButtonStates();

    track.addEventListener("scroll", updateButtonStates, {
      passive: true,
    });
    window.addEventListener("resize", updateButtonStates);

    return () => {
      track.removeEventListener("scroll", updateButtonStates);
      window.removeEventListener("resize", updateButtonStates);
    };
  }, [slides]);

  const handleScroll = (direction) => {
    const track = trackRef.current;
    if (!track || !track.firstElementChild) return;

    const slideWidth = track.firstElementChild.getBoundingClientRect().width;

    let nextIndex;

    if (direction === "next") {
      nextIndex = (currentSlide + 1) % slides.length;
    } else {
      nextIndex = (currentSlide - 1 + slides.length) % slides.length;
    }

    track.scrollTo({
      left: nextIndex * slideWidth,
      behavior: "smooth",
    });

    setCurrentSlide(nextIndex);
  };

  return (
    <div
      className={styles.carouselWrapper}
      aria-label="Feature Showcase Gallery"
    >
      <button
        className={`${styles.carouselBtn} ${styles.prev}`}
        onClick={() => handleScroll("prev")}
        aria-label="Previous slide"
      >
        &larr;
      </button>

      <button
        className={`${styles.carouselBtn} ${styles.next}`}
        onClick={() => handleScroll("next")}
        aria-label="Next slide"
      >
        &rarr;
      </button>

      <ul
        className={styles.carouselTrack}
        ref={trackRef}
      >
        {slides.map((slide) => (
          // <li
          //   key={slide.id}
          //   className={styles.carouselSlide}
          //   tabIndex={0}
          // >
          //   <div
          //     className={`${styles.placeholderCard} ${
          //       styles[slide.className]
          //     }`}
          //   >
          //     <span>{slide.title}</span>

          //     <div className={styles.slideCaption}>
          //       {slide.caption}
          //     </div>
          //   </div>
          // </li>
          <li
            key={slide.id}
            className={styles.carouselSlide}
            tabIndex={0}
          >
            <div className={styles.slideContainer}>
              <img
                src={slide.image}
                alt={slide.title}
                className={styles.slideImage}
              />

              <div className={styles.slideCaption}>
                <strong>{slide.title}</strong>
                <br />
                {slide.caption}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}