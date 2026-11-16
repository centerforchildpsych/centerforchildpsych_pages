import styles from "./page.module.css";

export const metadata = { title: "Book Now | The Center for Child and Family Psychiatry, PC" };

export default function BookNowPage() {
  return (
    <main className={styles.page}>
      {/* Your shared site header and footer are supplied by layout.js. */}
      <section className={styles.hero} aria-labelledby="book-heading">
        <img src="/book-now/reception.jpg" alt="Our receptionist answering the phone at the front desk" />
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>Book now</span>
          <h1 id="book-heading">Schedule an Appointment</h1>
          <p>We are now taking in-person and online appointments. Choose the option that fits you.</p>
        </div>
      </section>
      <section className={styles.section} aria-label="Appointment booking options">
        <div className={styles.inner}>
          <div className={styles.grid}>
            <article className={`${styles.card} ${styles.online}`}>
              <div className={styles.icon} aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4.5" width="18" height="12" rx="2"/><path d="M8 20h8M12 16.5V20"/></svg></div>
              <h2>Online appointments</h2>
              <p>Book an online appointment through our scheduling portal. The portal books online appointments only.</p>
              <p className={styles.note}>Select the button below to open the scheduling portal in a new tab.</p>
              <a className={`${styles.btn} ${styles.purple}`} href="https://consumer.scheduling.athena.io?locationId=27185-1" target="_blank" rel="noopener noreferrer">Book an Online Appointment</a>
            </article>
            <article className={`${styles.card} ${styles.phone}`}>
              <div className={styles.icon} aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"/></svg></div>
              <h2>In-person appointments</h2>
              <p>In-person appointments cannot be booked online. Please call our office to schedule.</p>
              <a className={styles.number} href="tel:2547741163">(254) 774-1163</a>
              <a className={`${styles.btn} ${styles.sage}`} href="tel:2547741163">Call to Book In Person</a>
            </article>
          </div>
          <div className={styles.insurance}>
            <h2>Need to check if we take your insurance?</h2>
            <p>See which insurance plans we accept, and what our services cost if you pay out of pocket.</p>
            <a className={`${styles.btn} ${styles.blue}`} href="https://centerforchildpsych.com/?page_id=172">Costs &amp; Coverage</a>
          </div>
          <div className={styles.clinic}>
            <img src="/book-now/clinic.jpg" alt="The front porch of the Center for Child and Family Psychiatry at 1103 North Gray Street, Killeen, Texas" />
            <div className={styles.caption}>
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 10 12 3l9 7v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V10Z"/><path d="M9 21v-8h6v8"/></svg>
              <div><span>Visit our office</span><strong>1103 N. Gray Street, Killeen, TX 76541</strong></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
