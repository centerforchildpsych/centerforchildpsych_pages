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
                <h3><strong>Address:</strong></h3>
                <a href="https://www.google.com/maps/place/1103+N+Gray+St,+Killeen,+TX+76541"
                    target="_blank" rel="noopener noreferrer">
                    1103 North Gray Street<br />
                    Killeen, TX 76541</a>

                <h3><strong>Phone:</strong></h3>
                <p><a href="tel:+12547741163">(254) 774-1163</a></p>
                <h3><strong>Fax:</strong></h3>
                <p><a href="tel:+18334645455">833-464-5455</a></p>

                <h3><strong>Email:</strong></h3>
                <a
                    href="mailto:centerforchildpsych@gmail.com"
                >
                    centerforchildpsych@gmail.com
                </a>
            </div>
        </div>
    )
}
