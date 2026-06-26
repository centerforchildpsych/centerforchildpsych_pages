import styles from "./page.module.css";
import TwoItemBox from "@/components/TwoItemBox";
import ImageHero from "@/components/ImageHero";
import PageTransition from "@/components/PageTransition";
import BlankSpace from"@/components/BlankSpace";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <PageTransition />

        <BlankSpace height="50px"/>

        <section className={styles.section1}>
          <ImageHero
            image="/photos/buildingImage.png"
            alt="Center for Child Psych logo"
          // left={true}
          >
            <h1>Our North Gray Street location is now open!</h1>
            <p>
              Thank you for your patience over the past year as we renovated our original building at 1103 North Gray Street. 
              An official historic landmark, we hope its restoration will support a renewed sense of appreciation for downtown Killeen.
              Please go to 1103 N. Gray Street, Killeen TX 76541 for all in-person visits and inquiries. We are no longer at Jasper Drive.
            </p>
          </ImageHero>
        </section>

        <BlankSpace/>

        <section className={styles.section2}>
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

        <BlankSpace/>

      </main>
    </div>
  );
}
