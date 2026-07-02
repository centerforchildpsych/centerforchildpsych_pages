import styles from "./page.module.css";
import TwoItemBox from "@/components/TwoItemBox";
import ImageHero from "@/components/ImageHero";
import PageTransition from "@/components/PageTransition";
// import BlankSpace from "@/components/BlankSpace";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <PageTransition />

        <section className={styles.hero}>
          <div className={styles.heroText}>
            <h1>
              Compassionate Care
              For Every Stage
              Of Your Journey
            </h1>

            <p>
              Therapy, psychiatric care, and support
              designed around your unique needs,
              helping you feel like yourself again.
            </p>

            <div className={styles.heroButtons}>
              <Link className={styles.primaryBtn} href="https://consumer.scheduling.athena.io/?locationId=27185-1">
                Book Now
              </Link>

              <Link className={styles.secondaryBtn} href="/services">
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

        {/* <BlankSpace /> */}

        <section className={styles.parallelTextImage}>
          <TwoItemBox>
            {/* First Child: Text Section */}
            <div className={styles.textSection}>
              <div className={styles.textItems}>
                <h3>You wish someone could help you figure this all out…..</h3>
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

        {/* <BlankSpace/> */}

        <section className={styles.quiz}>
          <div className={styles.quizBox}>
            <h2>Not Sure Where To Start?</h2>
            <p>
              Take our brief wellness questionnaire
              to discover which services may best
              fit your needs.
            </p>
            <button className={styles.primaryBtn}>
              Take The Quiz
            </button>
          </div>
        </section>

        <section className={styles.tmsParallelBlock}>
          <h2>Now offering TMS</h2>
          <TwoItemBox>
            {/* First Child: Text Section */}
            <div className={styles.imageSection}>
              <img
                src="/photos/TMS_Patient.png"
                alt="TMS Patient and Docter"
              />
            </div>

            {/* Second Child: Image Section */}
            <div className={styles.textSection}>
              <div className={styles.textItems}>
                <h3>Treat Depression at the Source</h3>
                <p>NeuroStar TMS(Transcranial Magnetic Stimulation) goes right to the source
                  of depression - your brain. It is a non-invasive, non-drug treatment that
                  uses focused magnetic pulses to "wake up" those areas, and help your brain work
                  the way it should. It's like physical therapy for your brain.
                  <Link className={styles.primaryBtn} href="/tms">
                    TMS
                  </Link>
                </p>

              </div>
            </div>
          </TwoItemBox>
        </section>

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
              >1103 North Gray Street Killeen, TX 76541
              </a> for all in-person visits and inquiries. We are no longer at Jasper Drive. </p>
          </ImageHero>
        </section>

        {/* <BlankSpace /> */}
      </main>
    </div>
  );
}
