"use client";

import Link from 'next/link';
import { useState } from 'react';
import styles from "./Header.module.css"

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

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
            
            <div className={styles.scrollngHeader}>

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
                    <Link className={styles.navBarLink} href="/">Home</Link>
                    <a className={styles.navBarLink} href="#">Services</a>
                    <Link className={styles.navBarLink} href="/about">About</Link>
                    <a className={styles.navBarLink} href="#">Our Providers</a>
                    <a className={styles.navBarLink} href="#">Insurance & Billing</a>
                    <a className={styles.navBarLink} href="#">Patient Resources</a>
                    <a className={styles.navBarLink} href="https://27185.portal.athenahealth.com/">Patient Portal</a>
                    <a className={styles.navButton} href="https://consumer.scheduling.athena.io/?locationId=27185-1">BOOK NOW</a>
                </div>

            </div>
        </>
    );
}

export default Header;
