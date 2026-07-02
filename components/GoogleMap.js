"use client";
import React from 'react'
import styles from "./GoogleMap.module.css"

export default function GoogleMap() {
    return (
        <div className={styles.mapSection}>
            <iframe
                title="The Center For Child and Family Psychiatry"
                src="https://www.google.com/maps?q=1103+N+Gray+Street+Killeen+TX+76541&output=embed"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                target="_blank" 
                rel="noopener noreferrer"
            ></iframe>
            <div className={styles.textContainer}>
                <a href="https://www.google.com/maps/place/1103+N+Gray+St,+Killeen,+TX+76541"
                    target="_blank" rel="noopener noreferrer">
                    1103 North Gray Street<br />
                    Killeen, TX 76541</a>

                <h3>Contact:</h3>
                <p>(254) 774-1163<br />
                    (833) 464-5455</p>

                <a
                    className="footerLink"
                    href="mailto:centerforchildpsych@gmail.com"
                >
                    centerforchildpsych@gmail.com
                </a>
            </div>
        </div>
    )
}
