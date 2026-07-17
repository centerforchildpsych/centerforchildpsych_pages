import styles from "./page.module.css";
import TwoItemBox from "@/components/TwoItemBox";
import ImageHero from "@/components/ImageHero";
import PageTransition from "@/components/PageTransition";
import BlankSpace from "@/components/BlankSpace";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <PageTransition />

        <section className={styles.hero}>
          <div className={styles.heroText}>
            <h1>
              <p className={styles.heroPrimary}>Compassionate Care</p>
              <p className={styles.heroSecondary}>For Every Stage
                Of Your Journey</p>
            </h1>
            <p>
              Therapy, psychiatric care, and support
              designed around your unique needs,
              helping you feel like yourself again.
            </p>
            <div className={styles.heroButtons}>
              <Link className={styles.primaryBtn} href="https://consumer.scheduling.athena.io/?locationId=27185-1"
                target="_blank" rel="noopener noreferrer">
                Book Now
              </Link>

              <Link className={styles.secondaryBtn} href="/patientResources">
                Explore Services
              </Link>
            </div>
          </div>
          <div className={styles.heroImage}>
            <img
              src="/photos/MomHoldingDaughter.png"
              alt="Mom Holding Daughter" />
            <hr className={styles.hrLine} />
          </div>
        </section>

        {/* <BlankSpace height="50px" /> */}

        <section className={styles.intro}>
          <h2>You deserve care that sees the whole person.</h2>
          <p>
            Whether you're struggling with anxiety,
            depression, trauma, ADHD, or simply
            feeling overwhelmed, our team provides
            compassionate, evidence-based care
            tailored specifically to you.
          </p>
        </section>

        {/* <BlankSpace height="200px" /> */}

        <section className={styles.parallelTextImage}>
          <TwoItemBox>
            {/* First Child: Text Section */}
            <div className={styles.textSection}>
              <div className={styles.textItems}>
                <h2>You wish someone could help you figure this all out…..</h2>
                <ul>
                  <li>You’re struggling to communicate in your relationships</li>
                  <li>Resurfacing problems from your past</li>
                  <li>Feeling anxious, confused, and lost all the time</li>
                  <li>And trying to understand who you truly are</li>
                </ul>
                <p>To say you’re lacking in direction feels like a big understatement.</p>
              </div>
            </div>
            {/* Second Child: Image Section */}
            <div className={styles.imageSection}>
              <img
                src="/photos/HandsHoldPaperFamily.png"
                alt="Hands holding a paper family"
              />
            </div>
          </TwoItemBox>
        </section>

        {/* <BlankSpace height="200px" /> */}

        <section className={styles.quiz}>
          <div className={styles.quizBox}>
            <h2>Not Sure Where To Start?</h2>
            <p>
              Take our brief wellness questionnaire
              to discover which services may best
              fit your needs.
            </p>
            <div>
              <button className={styles.primaryBtn}>
                Take The Quiz
              </button>
              <Link className={styles.secondaryBtn} href="/patientResources">
                Explore Services
              </Link>
            </div>
          </div>
        </section>

        {/* <BlankSpace height="200px" /> */}

        <section className={styles.tmsParallelBlock}>
          <h2>Now Offering TMS</h2>

          <div className={styles.twoBoxPanel}>
            {/* Image */}
            <div className={styles.imageSection}>
              <img
                src="/photos/TMS_Patient.png"
                alt="Patient receiving NeuroStar TMS treatment"
              />
            </div>

            {/* Text */}
            <div className={styles.textSection}>
              <div className={styles.textItems}>
                <h2>Treat Depression at the Source</h2>

                <h4>
                  Do you want to treat your depression without the side effects of
                  medication?
                  <br />
                  Has medication not worked for you in the past?
                  <br />
                  TMS may be the right choice for you.
                </h4>

                <p>
                  NeuroStar® Transcranial Magnetic Stimulation (TMS) is an FDA-cleared,
                  non-invasive treatment for depression. Using targeted magnetic pulses,
                  TMS stimulates underactive areas of the brain associated with mood,
                  helping restore healthy brain activity without medication or surgery.
                  Many patients experience significant improvement with little to no
                  downtime, making it an effective option when antidepressants haven't
                  provided the relief they need.
                </p>

                <Link className={styles.primaryBtn} href="/tms">
                  Learn More About TMS →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* <BlankSpace height="200px" /> */}


        <section className={styles.reviews}>
          <h2>What Patients Say</h2>
          <div className={styles.reviewGrid}>
            <div className={styles.review}>
              ★★★★★
              <p>
                "I felt heard for the first
                time in years."
              </p>
            </div>
            <div className={styles.review}>
              ★★★★★
              <p>
                "The staff made seeking
                help feel safe."
              </p>
            </div>
            <div className={styles.review}>
              ★★★★★
              <p>
                "More Example Reviews"
              </p>
            </div>
          </div>
        </section>

        {/* <BlankSpace height="200px" /> */}


        <section className={styles.blog}>
          <h2>Learn More About Mental Health</h2>
          <div className={styles.blogGrid}>
            <article>
              <h3>What Does Depression Feel Like?</h3>
              <a href="#">Temp Fake Link →</a>
            </article>
            <article>
              <h3>Recognizing ADHD In Adults</h3>
              <a href="#">Sends you back to home →</a>
            </article>
            <article>
              <h3>More Example Blog Post</h3>
              <a href="#">Read Article →</a>
            </article>
          </div>
        </section>

        {/* <BlankSpace height="200px" /> */}

        <section className={styles.cta}>
          <h2>
            You Don't Have To
            Navigate This Alone.
          </h2>
          <p>
            Taking the first step can feel difficult.
            We're here to help.
          </p>
          <a href="https://consumer.scheduling.athena.io/?locationId=27185-1"
            className={styles.primaryBtn}
            target="_blank" rel="noopener noreferrer">
            Schedule an Appointment
          </a>
        </section>


        {/* <BlankSpace height="100px" /> */}

        <section className={styles.buildingInfo}>
          <ImageHero
            image="/photos/buildingImage.png"
            alt="Center for Child Psych logo"
          // left={true}
          >
            <h1>Our North Gray Street location is now open!</h1>
            <p>
              Thank you for your patience over the past year as we renovated our original building at 1103 North Gray Street.
              An official historic landmark, we hope its restoration will support a renewed sense of appreciation for downtown Killeen.
              Please go to <a
                href="https://www.google.com/maps/place/1103+N+Gray+St,+Killeen,+TX+76541"
                target="_blank" rel="noopener noreferrer"
              >1103 North Gray Street Killeen, TX 76541
              </a> for all in-person visits and inquiries. We are no longer at Jasper Drive. </p>
          </ImageHero>
        </section>

        {/* <BlankSpace height="50px" /> */}

      </main>
    </div>
  );
}
