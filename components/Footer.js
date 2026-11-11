import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} id="location">
    <div className={`${styles.footerTopRow}`}>
    <div className={`${styles.fCol} ${styles.fBrand}`}>
    <a className={`${styles.logo}`} href="/">
    <img alt="Center for Child and Family Psychiatry logo" src="/icon.png" />
        Center for Child &amp; Family Psychiatry
      </a>
    <p className={`${styles.fLead}`}>Now taking in-person and online appointments.</p>
    <div className={`${styles.fBtns}`}>
    <a className={`${styles.btn} ${styles.btnSolid} ${styles.btnPurple}`} href="/book-now">Book an Appointment</a>
    <a className={`${styles.btn} ${styles.fBtnOutline}`} href="https://centerforchildpsych.com/?page_id=172">Costs &amp; Coverage</a>
    </div>
    <ul className={`${styles.footerTags}`}>
    <li>LGBTQ+ welcome</li>
    <li>Military- and veteran-supportive</li>
    <li>English, Russian, and Spanish</li>
    </ul>
    <div className={`${styles.footerFriends}`}><div className={`${styles.ffTitle}`}>Let's Connect!</div><div className={`${styles.socialLinks}`}><a aria-label="Facebook" href="https://www.facebook.com/p/The-Center-for-Child-and-Family-Psychiatry-PC-61593565861238/" rel="noopener noreferrer" target="_blank"><svg aria-hidden="true" fill="currentColor" height="20" viewBox="0 0 24 24" width="20"><path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H7.8v3h2.6V21h3.1z"></path></svg></a><a aria-label="Instagram" href="https://www.instagram.com/centerforchildpsych/" rel="noopener noreferrer" target="_blank"><svg aria-hidden="true" fill="none" height="20" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" width="20"><rect height="17" rx="5" width="17" x="3.5" y="3.5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.2" cy="6.8" fill="currentColor" r="1" stroke="none"></circle></svg></a><a aria-label="LinkedIn" href="https://www.linkedin.com/company/the-center-for-child-and-family-psychiatry-pc/" rel="noopener noreferrer" target="_blank"><svg aria-hidden="true" fill="currentColor" height="20" viewBox="0 0 24 24" width="20"><path d="M6.9 9.2H4V20h2.9V9.2zM5.5 4A1.7 1.7 0 1 0 5.5 7.4 1.7 1.7 0 0 0 5.5 4zM20 13.6c0-3-1.6-4.6-3.9-4.6-1.5 0-2.4.8-2.8 1.5V9.2H10.4V20h2.9v-5.8c0-1.5.6-2.5 1.9-2.5 1.2 0 1.8.9 1.8 2.5V20H20v-6.4z"></path></svg></a></div></div>
    </div>
    <div className={`${styles.fMapBlock}`}>
    <div className={`${styles.footerMap}`}>
    <iframe allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://maps.google.com/maps?q=1103+N+Gray+Street,+Killeen,+TX+76541&amp;z=15&amp;output=embed" title="Map to The Center for Child and Family Psychiatry"></iframe>
    </div>
    <div className={`${styles.fAddress}`}>
    <div>
    <div className={`${styles.fAddrItem}`}><span>Address</span>1103 N. Gray Street, Killeen, TX 76541</div>
    <div className={`${styles.fAddrItem}`}><span>Phone</span><a href="tel:2547741163">(254) 774-1163</a></div>
    </div>
    <a className={`${styles.fDir}`} href="https://www.google.com/maps/search/?api=1&amp;query=1103+N+Gray+Street+Killeen+TX+76541" rel="noopener noreferrer" target="_blank">Get Directions</a>
    </div>
    </div>
    </div>
    <div className={`${styles.footerGrid}`}>
    <div className={`${styles.fCol}`}>
    <h3>Explore</h3>
    <ul className={`${styles.fLinks}`}>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About Us</a></li>
    <li><a href="/services">Services</a></li>
    <li><a href="/#quiz">Take Our Quiz</a></li>
    <li><a href="https://centerforchildpsych.com/?page_id=172">Costs &amp; Coverage</a></li>
    <li><a href="https://27185.portal.athenahealth.com/">Patient Portal</a></li>
    <li><a href="/careers">Join Our Team</a></li>
    </ul>
    </div>
    <div className={`${styles.fCol}`}>
    <h3>Services</h3>
    <ul className={`${styles.fLinks}`}>
    <li><a href="/services/child-teen-psychiatry">Child &amp; Teen Psychiatry</a></li>
    <li><a href="/services/adult-psychiatry">Adult Psychiatry</a></li>
    <li><a href="/services/evaluations-medication-management">Diagnosis &amp; Medication Management</a></li>
    <li><a href="/services/psychological-testing">Psychological Testing</a></li>
    <li><a href="/services/psychotherapy">Psychotherapy</a></li>
    <li><a href="/services/counseling">Counseling &amp; Coaching</a></li>
    <li><a href="/services/child-therapy">Child &amp; Teen Therapy</a></li>
    <li><a href="/services/tms">TMS</a></li>
    <li><a href="/services/esketamine">Esketamine</a></li>
    </ul>
    </div>
    <div className={`${styles.fCol}`}>
    <h3>Contact</h3>
    <ul className={`${styles.fContact}`}>
    <li><span>Address</span>1103 N. Gray Street<br />Killeen, TX 76541</li>
    <li><span>Phone</span><a href="tel:2547741163">(254) 774-1163</a></li>
    <li><span>Fax</span>(833) 464-5455</li>
    <li><span>Email</span><a href="mailto:centerforchildpsych@gmail.com">centerforchildpsych@gmail.com</a></li>
    </ul>
    </div>
    </div>
    <div className={`${styles.footerCopyright}`}>Copyright {new Date().getFullYear()} — The Center for Child and Family Psychiatry, PC. All rights reserved.</div>
    </footer>
  );
}
