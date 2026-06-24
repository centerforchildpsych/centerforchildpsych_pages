import styles from "./page.module.css";
import TwoItemBox from "@/components/TwoItemBox";
import ImageHero from "@/components/ImageHero";
import PageTransition from "@/components/PageTransition";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <PageTransition />

        <ImageHero
          image="/photos/HandsHoldPaperFamily.png"
          alt="Hands holding a paper family"
        >
          <h1>Supporting Children & Families</h1>
          <p>
            Compassionate mental health care for children, adolescents, and their
            families.
          </p>
        </ImageHero>

        <section>
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
                src="/photos/buildingImage.png"
                alt="Center for Child Psych logo"
              />
            </div>
          </TwoItemBox>
        </section>

      </main>
    </div>
  );
}
