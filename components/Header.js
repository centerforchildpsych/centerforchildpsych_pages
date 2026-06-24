"use client";

import { useEffect, useState } from 'react';
import styles from "./Header.module.css"

function Header() {
    const [stickyHeader, setStickyHeader] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (window.scrollY > 60) {
    //             setStickyHeader(true);
    //         } else {
    //             setStickyHeader(false);
    //         }
    //     };

    //     window.addEventListener('scroll', handleScroll);

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    return (
        <>
            <p className={styles.easeyStyle}>
                1103 N. Gray Street | Killeen, TX 76541 | (254) 774-1163 |{" "}
                <a
                    href="mailto:centerforchildpsych@gmail.com"
                    className={styles.emailLink}
                >
                    centerforchildpsych@gmail.com
                </a>
            </p>
            
            {/* <div className={`${styles.scrollngHeader} ${stickyHeader ? styles.sticky : styles.stickyOffset}`}> */}
            <div className={`${styles.scrollngHeader} `}>

                <div>
                    <img
                        className={styles.imageLogo}
                        src='./photos/ChildCenterImg.png'
                        alt='The Center for Child and Family Psychiatry, PC'
                    /><p>PHONE: (254) 774-1163 | FAX: 833-464-5455</p>
                </div>


                <div
                    className={styles.hamburger}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </div>
                <div className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`.trim()}>
                    <a className={styles.navBarLink} href='#'>Home</a>
                    <a className={styles.navBarLink} href='#'>Services</a>
                    <a className={styles.navBarLink} href='#'>About</a>
                    <a className={styles.navBarLink} href='#'>Our Providers</a>
                    <a className={styles.navBarLink} href='#'>Insurance & Billing</a>
                    <a className={styles.navBarLink} href='#'>Patient Resources</a>
                    <a className={styles.navBarLink} href='https://27185.portal.athenahealth.com/'>Patient Portal</a>
                    <a className={styles.navButton} href='https://consumer.scheduling.athena.io/?locationId=27185-1'>BOOK NOW</a>
                </div>

            </div>
        </>
    );
}

export default Header;
