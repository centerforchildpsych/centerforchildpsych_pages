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
                    <Link className={styles.navBarLink} href="/" onClick={() => setMenuOpen(false)}>
                        Home
                    </Link>
                    <a className={styles.navBarLink} href="/services"
                        onClick={() => setMenuOpen(false)}>
                        Services
                    </a>
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
                    <Link className={styles.navBarLink} href="https://27185.portal.athenahealth.com/"
                        onClick={() => setMenuOpen(false)}>
                        Patient Portal
                    </Link>
                    <Link className={styles.navButton} href="https://consumer.scheduling.athena.io/?locationId=27185-1"
                        onClick={() => setMenuOpen(false)}>
                        BOOK NOW
                    </Link>
                </div>

            </div>
        </>
    );
}

export default Header;
