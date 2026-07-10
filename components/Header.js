"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from "./Header.module.css"

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            <p className={styles.easeyStyle}>
                <a href="https://www.google.com/maps/place/1103+N+Gray+St,+Killeen,+TX+76541"
                    target="_blank" rel="noopener noreferrer">1103 N. Gray Street | Killeen, TX 76541</a>  
                {" "}|{" "}
                <a href="tel:+12547741163">(254) 774-1163</a> |{" "}
                <a
                    href="mailto:centerforchildpsych@gmail.com"
                    className={styles.emailLink}
                >
                    centerforchildpsych@gmail.com
                </a>
            </p>

            <div className={styles.scrollngHeader}>

                <div className={styles.logoContainer}>
                    <img
                        className={styles.imageLogo}
                        src='./photos/ChildCenterImg.png'
                        alt='The Center for Child and Family Psychiatry, PC'
                    /><p>PHONE: <a href="tel:+12547741163">(254) 774-1163</a> | FAX: <a href="tel:+18334645455">833-464-5455</a></p>
                </div>


                <div
                    className={styles.hamburger}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </div>
                <div className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`.trim()}>
                    <Link className={styles.navBarLink} href="/" onClick={() => setMenuOpen(false)}>
                        Home
                    </Link>
                    <Link className={styles.navBarLink} href="/about"
                        onClick={() => setMenuOpen(false)}>
                        About
                    </Link>
                    <Link className={styles.navBarLink} href="/providers"
                        onClick={() => setMenuOpen(false)}>
                        Our Providers
                    </Link>
                    <Link className={styles.navBarLink} href="/insurance"
                        onClick={() => setMenuOpen(false)}>
                        Insurance & Billing
                    </Link>
                    <Link className={styles.navBarLink} href="/patientResources"
                        onClick={() => setMenuOpen(false)}>
                        Patient Resources
                    </Link>
                    <Link className={styles.navBarLink} href="/tms"
                        onClick={() => setMenuOpen(false)}>
                        TMS
                    </Link>
                    <Link className={styles.navBarLink} href="https://27185.portal.athenahealth.com/"
                        target="_blank" rel="noopener noreferrer"
                        onClick={() => setMenuOpen(false)}>
                        Patient Portal
                    </Link>
                    <Link className={styles.navButton} href="https://consumer.scheduling.athena.io/?locationId=27185-1"
                        target="_blank" rel="noopener noreferrer"
                        onClick={() => setMenuOpen(false)}>
                        BOOK NOW
                    </Link>
                </div>

                {showButton && (
                    <button className={styles.scrollTopBtn} onClick={scrollToTop}>
                        <strong>^</strong>
                    </button>
                )}

            </div>
        </>
    );
}

export default Header;
