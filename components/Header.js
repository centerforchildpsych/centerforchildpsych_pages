"use client";

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import styles from "./Header.module.css"

function Header() {
    const bannerRef = useRef(null);
    const [bannerHeight, setBannerHeight] = useState(0);
    const [scrollY, setScrollY] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 300);
            setScrollY(window.scrollY);
        };

        handleScroll(); // initialize on mount

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const banner = bannerRef.current;
        if (!banner) return;
        const measure = () => setBannerHeight(banner.getBoundingClientRect().height);
        measure();
        const observer = new ResizeObserver(measure);
        observer.observe(banner);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!menuOpen) return;
        const previous = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        const onEscape = (event) => { if (event.key === 'Escape') closeMenu(); };
        window.addEventListener('keydown', onEscape);
        return () => { document.body.style.overflow = previous; window.removeEventListener('keydown', onEscape); };
    }, [menuOpen]);

    const closeMenu = () => { setMenuOpen(false); setServicesOpen(false); };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            <p ref={bannerRef} className={styles.easeyStyle}>
                <a href="https://www.google.com/maps/place/1103+N+Gray+St,+Killeen,+TX+76541"
                    target="_blank" rel="noopener noreferrer">1103 N. Gray Street | Killeen, TX 76541</a>
                {" "}|{" "}
                <a href="tel:+12547741163">(254) 774-1163</a> |{" "}
                <a
                    href="mailto:centerforchildpsych@gmail.com"
                    className={styles.emailLink}
                >
                    centerforchildpsych@gmail.com
                    
                </a>{" "}|{" "}
                PHONE: <a href="tel:+12547741163">(254) 774-1163</a> | FAX: <a href="tel:+18334645455">833-464-5455</a>
            </p>

            <div className={styles.headerSpacer} aria-hidden="true" />
            <div className={styles.scrollngHeader} style={{ top: Math.max(0, bannerHeight - scrollY) }}>

                <div className={styles.logoContainer}>
        <Link href="/">
            <img
                className={styles.imageLogo}
                src="/photos/ChildCenterImg.png"
                alt="The Center for Child and Family Psychiatry, PC"
            />
        </Link>
    </div>


                <button type="button" aria-label="Toggle navigation menu" aria-expanded={menuOpen} aria-controls="main-navigation" className={styles.hamburger}
                    onClick={() => { setMenuOpen(!menuOpen); setServicesOpen(false); }}
                >
                    {menuOpen ? "✕" : "☰"}
                </button>
                <nav aria-label="Main navigation" id="main-navigation" className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`.trim()}>
                    <Link className={styles.navBarLink} href="/" onClick={closeMenu}>
                        Home
                    </Link>
                    <Link className={styles.navBarLink} href="/about"
                        onClick={closeMenu}>
                        About
                    </Link>
                    <div className={styles.servicesNav} onMouseLeave={() => { if (window.matchMedia("(min-width: 1201px)").matches) setServicesOpen(false); }}>
                        <div className={styles.servicesNavRow}>
                            <Link className={styles.navBarLink} href="/services" onClick={closeMenu}>Services</Link>
                            <button type="button" className={styles.servicesToggle} aria-label="Toggle services submenu" aria-expanded={servicesOpen} aria-controls="services-submenu" onClick={() => setServicesOpen(!servicesOpen)}>▾</button>
                        </div>
                        <div id="services-submenu" className={`${styles.servicesDropdown} ${servicesOpen ? styles.servicesDropdownOpen : ''}`}>
                            <Link href="/services" onClick={closeMenu}>All Services</Link>
                            <Link href="/services/child-teen-psychiatry" onClick={closeMenu}>Child & Teen Psychiatry</Link>
                            <Link href="/services/adult-psychiatry" onClick={closeMenu}>Adult Psychiatry</Link>
                            <Link href="/services/evaluations-medication-management" onClick={closeMenu}>Diagnosis & Medication Management</Link>
                            <Link href="/services/surgical-employment-evaluations" onClick={closeMenu}>Psychiatric Evaluations</Link>
                            <Link href="/services/child-therapy" onClick={closeMenu}>Child & Teen Therapy</Link>
                            <Link href="/services/psychological-testing" onClick={closeMenu}>Psychological Testing</Link>
                            <Link href="/services/psychotherapy" onClick={closeMenu}>Formal Therapy / Psychotherapy</Link>
                            <Link href="/services/counseling" onClick={closeMenu}>Informal Therapy / Counseling</Link>
                            <Link href="/services/esketamine" onClick={closeMenu}>Esketamine Nasal Spray</Link>
                            <Link href="/services/tms" onClick={closeMenu}>TMS</Link>
                        </div>
                    </div>
                    <Link className={styles.navBarLink} href="/providers"
                        onClick={closeMenu}>
                        Our Providers
                    </Link>
                    <Link className={styles.navBarLink} href="/insurance"
                        onClick={closeMenu}>
                        Insurance & Billing
                    </Link>
                    <Link className={styles.navBarLink} href="/patientResources"
                        onClick={closeMenu}>
                        Patient Resources
                    </Link>
                    <Link className={styles.navBarLink} href="/tms"
                        onClick={closeMenu}>
                        TMS
                    </Link>
                    <Link className={styles.navBarLink} href="https://27185.portal.athenahealth.com/"
                        target="_blank" rel="noopener noreferrer"
                        onClick={closeMenu}>
                        Patient Portal
                    </Link>
                    <Link className={styles.navBarLink} href="/careers"
                        onClick={closeMenu}>
                        Careers
                    </Link>
                    <Link className={styles.navButton} href="https://consumer.scheduling.athena.io/?locationId=27185-1"
                        target="_blank" rel="noopener noreferrer"
                        onClick={closeMenu}>
                        <strong>BOOK NOW</strong>
                    </Link>
                    
                </nav>

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
