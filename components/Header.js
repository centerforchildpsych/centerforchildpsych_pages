"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import styles from "./Header.module.css"

function Header() {
    const pathname = usePathname();
    const bannerRef = useRef(null);
    const [bannerHeight, setBannerHeight] = useState(0);
    const [scrollY, setScrollY] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [aboutOpen, setAboutOpen] = useState(false);
    const [careersOpen, setCareersOpen] = useState(false);
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

    const closeMenu = () => { setMenuOpen(false); setServicesOpen(false); setAboutOpen(false); setCareersOpen(false); };

    // Close the mobile navigation and both dropdowns whenever the route changes.
    // This also handles navigation triggered outside the header.
    useEffect(() => {
        setMenuOpen(false);
        setServicesOpen(false);
        setAboutOpen(false);
        setCareersOpen(false);
    }, [pathname]);

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
                    onClick={() => { setMenuOpen(!menuOpen); setServicesOpen(false); setAboutOpen(false); setCareersOpen(false); }}
                >
                    {menuOpen ? "✕" : "☰"}
                </button>
                <nav aria-label="Main navigation" id="main-navigation" className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`.trim()}>
                    <Link className={styles.navBarLink} href="/" onClick={closeMenu}>Home</Link>
                    <div className={styles.servicesNav}>
                        <div className={styles.servicesNavRow}>
                            <Link className={styles.navBarLink} href="/about" onClick={closeMenu}>About Us</Link>
                            <button type="button" className={styles.servicesToggle} aria-label="Toggle About Us submenu" aria-expanded={aboutOpen} aria-controls="about-submenu" onClick={() => { setAboutOpen(!aboutOpen); setServicesOpen(false); setCareersOpen(false); }}>▾</button>
                        </div>
                        <div id="about-submenu" className={`${styles.servicesDropdown} ${aboutOpen ? styles.servicesDropdownOpen : ''}`}>
                            <Link href="/our-office-design" onClick={closeMenu}>Our Office Design</Link>
                        </div>
                    </div>
                    <div className={styles.servicesNav}>
                        <div className={styles.servicesNavRow}>
                            <Link className={styles.navBarLink} href="/services" onClick={closeMenu}>Services</Link>
                            <button type="button" className={styles.servicesToggle} aria-label="Toggle Services submenu" aria-expanded={servicesOpen} aria-controls="services-submenu" onClick={() => { setServicesOpen(!servicesOpen); setAboutOpen(false); setCareersOpen(false); }}>▾</button>
                        </div>
                        <div id="services-submenu" className={`${styles.servicesDropdown} ${servicesOpen ? styles.servicesDropdownOpen : ''}`}>
                            <Link href="/services/child-teen-psychiatry" onClick={closeMenu}>Child &amp; Teen Psychiatry</Link>
                            <Link href="/services/adult-psychiatry" onClick={closeMenu}>Adult Psychiatry</Link>
                            <Link href="/services/evaluations-medication-management" onClick={closeMenu}>Diagnosis &amp; Medication Management</Link>
                            <Link href="/services/surgical-employment-evaluations" onClick={closeMenu}>Psychiatric Evaluations for Surgery, Employment &amp; More</Link>
                            <Link href="/services/psychological-testing" onClick={closeMenu}>Psychological Testing: ADHD, Autism, Learning Disabilities &amp; More</Link>
                            <Link href="/services/psychotherapy" onClick={closeMenu}>Formal Therapy: Psychotherapy, Cognitive Behavioral Therapy &amp; More</Link>
                            <Link href="/services/counseling" onClick={closeMenu}>Informal Therapy: Counseling, Coaching, and Motivational Interviewing</Link>
                            <Link href="/services/child-therapy" onClick={closeMenu}>Child &amp; Teen Therapy</Link>
                            <Link href="/services/tms" onClick={closeMenu}>Transcranial Magnetic Stimulation (TMS)</Link>
                            <Link href="/services/esketamine" onClick={closeMenu}>Esketamine Nasal Spray</Link>
                        </div>
                    </div>
                    <Link className={styles.navBarLink} href="/take-our-quiz" onClick={closeMenu}>Take Our Quiz</Link>
                    <Link className={styles.navBarLink} href="/insurance" onClick={closeMenu}>Costs &amp; Coverage</Link>
                    <div className={styles.servicesNav}>
                        <div className={styles.servicesNavRow}>
                            <Link className={styles.navBarLink} href="/careers" onClick={closeMenu}>Join Our Team</Link>
                            <button type="button" className={styles.servicesToggle} aria-label="Toggle Join Our Team submenu" aria-expanded={careersOpen} aria-controls="careers-submenu" onClick={() => { setCareersOpen(!careersOpen); setServicesOpen(false); setAboutOpen(false); }}>▾</button>
                        </div>
                        <div id="careers-submenu" className={`${styles.servicesDropdown} ${careersOpen ? styles.servicesDropdownOpen : ''}`}>
                            <Link href="/students-volunteers" onClick={closeMenu}>Students &amp; Volunteers</Link>
                        </div>
                    </div>
                    <a className={styles.navBarLink} href="https://27185.portal.athenahealth.com/" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Patient Portal</a>
                    <Link className={styles.navButton} href="/book-now" onClick={closeMenu}><strong>BOOK NOW</strong></Link>
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
