import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <img
          className={styles.imageArc}
          src="/photos/buildingImage.png"
          alt="Center for Child Pysch logo"
          priority="true"
        />

        <section>
          <div className={styles.imageTextGrid}>
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
            <div className={styles.imageSection}>
              <img
                src="/photos/buildingImage.png"
                alt="Center for Child Pysch logo"
                priority="true" />
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
