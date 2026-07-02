import PageTransition from "@/components/PageTransition";
import styles from "./page.module.css";

export const metadata = {
  title: "Transcranial Magnetic Stimulation (TMS)",
  description:
    "Safe, non-invasive, FDA-cleared treatment for depression and other mental health conditions.",
};

export default function TMSPage() {
  return (
    <main className={styles.page}>
      <PageTransition />
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>
            FDA-Cleared • Non-Invasive • Medication-Free
          </span>

          <h1>
            Transcranial Magnetic
            <br />
            Stimulation (TMS)
          </h1>

          <p className={styles.heroText}>
            A safe, effective, non-drug treatment option for depression and
            other mental health conditions. TMS uses gentle magnetic pulses to
            stimulate areas of the brain involved in mood regulation.
          </p>

          <div className={styles.heroButtons}>
            <a href="https://consumer.scheduling.athena.io/?locationId=27185-1" className={styles.primaryBtn}
              target="_blank" rel="noopener noreferrer">
              Schedule an Appointment
            </a>

            <a href="#learn" className={styles.secondaryBtn}>
              Learn More
            </a>
          </div>
        </div>

        <div className={styles.heroImage}>
          <img className={styles.imageCard} src="/photos/Adolescent-Treatment-Side.webp" alt="Adolescent getting TMS Treatment" />
        </div>
      </section>

      {/* Benefits */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>Why Choose TMS?</h2>
          <p>
            TMS provides an alternative approach for individuals seeking
            treatment beyond traditional medication options.
          </p>
        </div>

        <div className={styles.cardGrid}>
          <div className={styles.card}>
            <h3>Non-Drug Treatment</h3>
            <p>
              No daily medications and no systemic medication side effects.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Non-Invasive</h3>
            <p>
              Treatment is performed comfortably in our office with no surgery
              or anesthesia.
            </p>
          </div>

          <div className={styles.card}>
            <h3>FDA-Cleared</h3>
            <p>
              Clinically validated and approved for the treatment of depression.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Outpatient Care</h3>
            <p>
              Return to school, work, and daily activities immediately after
              treatment.
            </p>
          </div>
        </div>
      </section>

      {/* Image + Content */}
      <section className={styles.featureSection} id="learn">
        <div className={styles.featureImage}>
          <img className={styles.imageCard} src="/photos/treat-depression-at-the-source-2.png" alt="brain scan" />
        </div>

        <div className={styles.featureContent}>
          <span className={styles.smallHeading}>
            ADVANCED MENTAL HEALTH CARE
          </span>

          <h2>What is TMS?</h2>

          <p>
            Transcranial Magnetic Stimulation (TMS) uses targeted magnetic
            pulses to stimulate areas of the brain associated with mood
            regulation. Treatment sessions are performed while patients remain
            awake, alert, and comfortable.
          </p>

          <p>
            TMS may be considered for individuals who have not achieved
            sufficient improvement with traditional treatments or who prefer a
            medication-free approach.
          </p>

          <ul className={styles.featureList}>
            <li>✓ No anesthesia required</li>
            <li>✓ No recovery time</li>
            <li>✓ Comfortable office visits</li>
            <li>✓ Proven clinical effectiveness</li>
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className={styles.sectionAlt}>
        <div className={styles.sectionHeader}>
          <h2>Your Treatment Journey</h2>
          <p>
            Our team guides you through every step of the evaluation and
            treatment process.
          </p>
        </div>

        <div className={styles.timeline}>
          <div className={styles.step}>
            <div className={styles.number}>1</div>
            <h3>Consultation</h3>
            <p>
              Meet with our provider to determine whether TMS is right for you.
            </p>
          </div>

          <div className={styles.step}>
            <div className={styles.number}>2</div>
            <h3>Personalized Plan</h3>
            <p>
              We develop an individualized treatment approach based on your
              needs.
            </p>
          </div>

          <div className={styles.step}>
            <div className={styles.number}>3</div>
            <h3>Treatment Sessions</h3>
            <p>
              Attend comfortable in-office sessions over several weeks.
            </p>
          </div>

          <div className={styles.step}>
            <div className={styles.number}>4</div>
            <h3>Ongoing Support</h3>
            <p>
              Our team monitors progress and supports your treatment journey.
            </p>
          </div>
        </div>
      </section>

      {/* NeuroStar */}
      <section className={styles.partnerSection}>
        <div className={styles.partnerImage}>
          <a href="https://neurostar.com/how-does-neurostar-work/"
            target="_blank" rel="noopener noreferrer">
            <img className={styles.imageCard} src="/photos/NeuroStar-Logo-Purple.webp" alt="NeuroStar Logo" />
          </a>
        </div>

        <div className={styles.partnerContent}>
          <span className={styles.smallHeading}>OUR TECHNOLOGY PARTNER</span>

          <h2>NeuroStar TMS</h2>

          <p>
            We proudly offer treatment using NeuroStar technology, one of the
            most established and widely utilized TMS systems available today.
          </p>

          <div className={styles.stats}>
            <div>
              <h3>6M+</h3>
              <p>Treatments Performed</p>
            </div>

            <div>
              <h3>180K+</h3>
              <p>Patients Treated</p>
            </div>

            <div>
              <h3>12+</h3>
              <p>Months Proven Results</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <h2>Ready to Learn if TMS is Right for You?</h2>

        <p>
          Schedule an Appointment with our team to discuss your treatment
          options.
        </p>

        <a href="https://consumer.scheduling.athena.io/?locationId=27185-1" className={styles.primaryBtn}
          target="_blank" rel="noopener noreferrer">
          Schedule an Appointment
        </a>
      </section>
    </main>
  );
}