"use client";

import { useEffect, useState } from "react";
import styles from "./PageTransition.module.css";

export default function PageTransition() {
    const [fade, setFade] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFade(true);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`${styles.screenOverlay} ${fade ? styles.fadeOut : ""}`} >
            <img
                className={styles.imageLogo}
                src='/photos/ChildCenterImg.png'
                alt='The Center for Child and Family Psychiatry, PC'
            />
        </div>
    );
}