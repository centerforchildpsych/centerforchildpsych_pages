"use client";

import { useState } from "react";
import styles from "./page.module.css";
import PageTransition from "@/components/PageTransition";

export default function About() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <PageTransition />

            {/* ---------- TOP BAR ---------- */}
            <div className={styles.topbar}>
                <span>1103 N. Gray Street, Killeen, TX 76541</span>
                <span className={styles.sep}>·</span>

                <a href="tel:2547741163">
                    (254) 774-1163
                </a>

                <span className={styles.sep}>·</span>

                <a href="mailto:centerforchildpsych@gmail.com">
                    centerforchildpsych@gmail.com
                </a>

                <span className={styles.sep}>·</span>

                <span>FAX: (833) 464-5455</span>
            </div>


            {/* ---------- NAVIGATION ---------- */}
            <nav className={styles.nav}>
                <a className={styles.logo} href="/">
                    <img
                        src="/photos/logo.png"
                        alt="Center for Child and Family Psychiatry logo"
                    />
                    <span>Center for Child &amp; Family Psychiatry</span>
                </a>

                <div className={styles.navRight}>
                    <ul className={styles.navLinks}>
                        <li>
                            <a href="/">Home</a>
                        </li>

                        <li>
                            <a
                                className={styles.active}
                                href="/about-us"
                            >
                                About
                            </a>
                        </li>

                        <li>
                            <a href="/meet-the-team">
                                Meet Our Team
                            </a>
                        </li>

                        <li>
                            <a href="https://centerforchildpsych.com/?page_id=172">
                                Insurance &amp; Billing
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                Patient Resources
                            </a>
                        </li>

                        <li>
                            <a href="https://centerforchildpsych.com/?page_id=327">
                                TMS
                            </a>
                        </li>

                        <li>
                            <a href="https://27185.portal.athenahealth.com/">
                                Patient Portal
                            </a>
                        </li>
                    </ul>

                    <a
                        className={`${styles.btn} ${styles.btnSolid} ${styles.btnBlue}`}
                        href="https://consumer.scheduling.athena.io?locationId=27185-1"
                    >
                        Book Now
                    </a>

                    <button
                        className={`${styles.navToggle} ${
                            mobileMenuOpen ? styles.open : ""
                        }`}
                        aria-label="Open menu"
                        type="button"
                        onClick={() =>
                            setMobileMenuOpen(!mobileMenuOpen)
                        }
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
            </nav>


            {/* ---------- MOBILE MENU ---------- */}
            <div
                className={`${styles.mobileMenu} ${
                    mobileMenuOpen ? styles.mobileMenuOpen : ""
                }`}
            >
                <a href="/">Home</a>

                <a
                    className={styles.active}
                    href="/about-us"
                >
                    About
                </a>

                <a href="/meet-the-team">
                    Meet Our Team
                </a>

                <a href="https://centerforchildpsych.com/?page_id=172">
                    Insurance &amp; Billing
                </a>

                <a href="#">
                    Patient Resources
                </a>

                <a href="https://centerforchildpsych.com/?page_id=327">
                    TMS
                </a>

                <a href="https://27185.portal.athenahealth.com/">
                    Patient Portal
                </a>

                <a
                    className={`${styles.btn} ${styles.btnSolid} ${styles.btnBlue}`}
                    href="https://consumer.scheduling.athena.io?locationId=27185-1"
                >
                    Book Now
                </a>
            </div>


            {/* ---------- INTRO ---------- */}
            <section className={styles.aboutIntro}>
                <div className={styles.aboutIntroBlob} />

                <div className={styles.aboutIntroGrid}>
                    <div>
                        <span className={styles.eyebrow}>
                            About Us
                        </span>

                        <h1>
                            The Story Behind Our Practice
                        </h1>

                        <p>
                            The Center for Child and Family Psychiatry
                            started with Dr. Andrey Shalomov&apos;s belief
                            that Killeen and Central Texas deserved real,
                            accessible mental health care. What began as
                            one doctor&apos;s practice has grown to a full
                            clinical team and is still family-owned and led
                            today. Dr. Alvarado, the Chief Operating
                            Officer, is Dr. Shalomov&apos;s wife. Together,
                            they have two children, and their family keeps
                            growing right alongside the practice.
                        </p>
                    </div>

                    <div
                        className={`${styles.photoFrame} ${styles.introPhoto}`}
                    >
                        <img
                            src="/photos/about/family.jpg"
                            alt="Dr. Shalomov and Dr. Alvarado with their two children"
                        />
                    </div>
                </div>
            </section>


            {/* ---------- DIVIDER ---------- */}
            <Divider color="purple" />


            {/* ---------- DR. SHALOMOV ---------- */}
            <section className={styles.storyBlock}>
                <div
                    className={`${styles.sectionInner} ${styles.panel}`}
                >
                    <div className={styles.personPanel}>
                        <span className={styles.eyebrow}>
                            The person behind the practice
                        </span>

                        <h2>
                            Dr. Andrey Shalomov, MD, MPH
                        </h2>

                        <p className={styles.roleSubtitle}>
                            Founder &amp; Chief Executive Officer
                        </p>

                        <div
                            className={`${styles.floatPhoto} ${styles.floatRight}`}
                        >
                            <img
                                src="/photos/about/andrey-shalomov.jpg"
                                alt="Dr. Andrey Shalomov"
                            />
                        </div>

                        <p>
                            Andrey is double board certified in Adult
                            Psychiatry and Child &amp; Adolescent
                            Psychiatry. He trained at UT Rio Grande Valley
                            and completed his fellowship at UT Health
                            Science Center San Antonio, and holds a Master
                            of Public Health from George Washington
                            University.
                        </p>

                        <div
                            className={`${styles.floatPhoto} ${styles.floatLeft}`}
                        >
                            <img
                                src="/photos/about/andrey-ut-health.jpg"
                                alt="Dr. Shalomov speaking at UT Health San Antonio"
                            />
                        </div>

                        <p>
                            Before medicine, he served in the U.S. Air
                            Force, and that sense of service has stayed
                            with him ever since. He has volunteered on
                            medical missions to Romania, Ethiopia, and
                            Peru, caring for people who had little access
                            to care of any kind.
                        </p>

                        <div
                            className={`${styles.floatPhoto} ${styles.floatRight}`}
                        >
                            <img
                                src="/photos/about/andrey-office.jpg"
                                alt="Dr. Andrey Shalomov in his office"
                            />
                        </div>

                        <p>
                            Outside of the clinic, Andrey spends his time
                            researching and reading about psychology and
                            psychiatry, cooking, and being outdoors.
                        </p>

                        <hr className={styles.sectionBreak} />

                        <div className={styles.standalonePhoto}>
                            <img
                                src="/photos/about/family.jpg"
                                alt="The Shalomov family"
                            />
                        </div>

                        <p className={styles.personSubtitle}>
                            Dr. Joy Alvarado, MD, MHS
                        </p>

                        <p className={styles.roleSubtitle}>
                            Chief Operations Officer
                        </p>

                        <p>
                            Dr. Joy Alvarado, Dr. Shalomov&apos;s wife and
                            business partner, is an Army veteran who served
                            as a troop physician, and has spent much of her
                            career caring for underserved populations. She
                            earned her medical degree from the University
                            of Texas Rio Grande Valley School of Medicine
                            (UTRGV). In 2018, she was part of the founding
                            team that opened a student-run clinic in the
                            Rio Grande Valley, providing free care to
                            underserved patients. She also holds a Master
                            of Health Science in Molecular Microbiology and
                            Immunology from the Johns Hopkins School of
                            Public Health. Outside of the clinic, Joy
                            enjoys the liberal and fine arts, including
                            reading, writing, and painting.
                        </p>
                    </div>
                </div>
            </section>


            {/* ---------- DIVIDER ---------- */}
            <Divider color="sage" />


            {/* ---------- WHERE IT STARTED ---------- */}
            <section className={styles.storyBlock}>
                <div
                    className={`${styles.sectionInner} ${styles.strugglesGrid} ${styles.panel}`}
                >
                    <div>
                        <span className={styles.eyebrow}>
                            Where it started
                        </span>

                        <h2>
                            A Practice Built On a Simple Belief
                        </h2>

                        <p>
                            Andrey started this practice in 2022 with a
                            simple belief: that Central Texas deserved
                            better access to mental health care, delivered
                            with warmth instead of red tape. He opened as
                            a small telepsychiatry practice, meeting
                            patients wherever they were, because he knew
                            that for a lot of families, just getting in the
                            door is the hardest part.
                        </p>

                        <p>
                            That belief grew into a full clinic on Gray
                            Street, staffed by a team of providers and
                            therapists who share the same conviction: that
                            people deserve to be treated like people, not
                            diagnoses. Today, the Center cares for
                            children, adults, and families across the
                            region, and it is still, at its heart, a family
                            business.
                        </p>
                    </div>

                    <div
                        className={`${styles.photoFrame} ${styles.landscapeFrame}`}
                    >
                        <img
                            src="/photos/about/family.jpg"
                            alt="Dr. Shalomov and Dr. Alvarado with their two children"
                        />
                    </div>
                </div>
            </section>


            {/* ---------- DIVIDER ---------- */}
            <Divider color="yellow" />


            {/* ---------- VALUES ---------- */}
            <section>
                <div
                    className={`${styles.sectionInner} ${styles.panel} ${styles.valuesPanel}`}
                >
                    <span className={styles.eyebrow}>
                        What we stand for
                    </span>

                    <h2>
                        Our Values
                    </h2>

                    <p>
                        These aren&apos;t just words on a wall for us.
                        They&apos;re how we show up for your family, just
                        as we show up for our own.
                    </p>

                    <div className={styles.valuesRow}>
                        <span className={styles.valuesChip}>
                            Education
                        </span>

                        <span className={styles.valuesChip}>
                            Improvement
                        </span>

                        <span className={styles.valuesChip}>
                            Modern, Evidence-Based Practice
                        </span>

                        <span className={styles.valuesChip}>
                            Accountability
                        </span>

                        <span className={styles.valuesChip}>
                            Teamwork
                        </span>

                        <span className={styles.valuesChip}>
                            Ingenuity &amp; Innovation
                        </span>

                        <span className={styles.valuesChip}>
                            Honesty &amp; Transparency
                        </span>
                    </div>
                </div>
            </section>


            {/* ---------- DIVIDER ---------- */}
            <Divider color="purple" />


            {/* ---------- FINAL CTA ---------- */}
            <section className={styles.finalCta}>
                <div className={styles.sectionInner}>
                    <h2>
                        We&apos;d Be Honored to Care for Your Family Too
                    </h2>

                    <p>
                        If you&apos;re looking for a team that treats you
                        like family, we hope you&apos;ll consider us.
                    </p>

                    <a
                        className={`${styles.btn} ${styles.btnSolid} ${styles.btnPurple}`}
                        href="https://consumer.scheduling.athena.io?locationId=27185-1"
                    >
                        Schedule an Appointment
                    </a>
                </div>
            </section>


        </>
    );
}


function Divider({ color }) {
    return (
        <div className={styles.divider}>
            <span className={styles.line} />

            <span
                className={`${styles.dot} ${styles[`dot${capitalize(color)}`]}`}
            />

            <span className={styles.line} />
        </div>
    );
}


function capitalize(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
}