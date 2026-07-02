import PageTransition from "@/components/PageTransition";
import styles from "./page.module.css";

export const metadata = {
    title: "Patient Services | Center for Child & Family Psychiatry",
    description:
        "Comprehensive psychiatric care for children, adolescents, adults, and families through evidence-based and family-focused treatment.",
};

export default function PatientServices() {
    return (
        <main className={styles.page}>
            <PageTransition />
            {/* HERO */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <span className={styles.badge}>
                        Virtual • Family-Focused • Evidence-Based
                    </span>

                    <h1>Patient Services</h1>

                    <p>
                        We provide compassionate, evidence-based psychiatric care for
                        children, adolescents, adults, and families through personalized
                        treatment plans designed to support long-term wellness.
                    </p>

                    <div className={styles.buttons}>
                        <a href="https://consumer.scheduling.athena.io/?locationId=27185-1" className={styles.primaryBtn}
                            target="_blank" rel="noopener noreferrer">
                            Schedule an Appointment
                        </a>

                        <a href="#services" className={styles.secondaryBtn}>
                            Explore Services
                        </a>
                    </div>
                </div>

                <div className={styles.heroImage}>
                    <img className={styles.imageCard} src="/photos/HandsHoldPaperFamily.png" alt="Hands Hold Paper Family cut out" />
                </div>
            </section>

            {/* INTRO */}
            <section className={styles.intro}>
                <div className={styles.container}>
                    <span className={styles.sectionLabel}>
                        WELCOME TO THE CENTER
                    </span>

                    <h2>Virtual, Family-Focused Services</h2>

                    <p>
                        Our focus is on evidence-based, family-oriented, and holistic
                        approaches to mental health care. Appointments may include the
                        evaluation, diagnosis, and treatment of psychiatric disorders while
                        empowering patients and families to take an active role in their
                        care journey.
                    </p>

                    <p>
                        We proudly partner with organizations throughout our community and
                        continue to expand our services to better support the mental health
                        needs of Central Texas families.
                    </p>
                </div>
            </section>

            {/* SERVICES */}
            <section className={styles.services} id="services">
                <div className={styles.sectionHeader}>
                    <h2>Our Areas of Care</h2>

                    <p>
                        Comprehensive psychiatric services designed to support patients at
                        every stage of life.
                    </p>
                </div>

                <div className={styles.cardGrid}>
                    <div className={styles.card}>
                        <h3>Diagnostic Evaluations</h3>
                        <p>
                            Comprehensive psychiatric assessments and personalized treatment
                            recommendations.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <h3>Medication Management</h3>
                        <p>
                            Evidence-based medication treatment with ongoing monitoring and
                            support.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <h3>Individual Therapy</h3>
                        <p>
                            Therapeutic interventions designed to promote emotional wellness
                            and resilience.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <h3>Family Therapy</h3>
                        <p>
                            Collaborative treatment approaches that strengthen family
                            relationships and support systems.
                        </p>
                    </div>
                </div>
            </section>

            {/* CHILD */}
            <section className={styles.feature}>
                <div className={styles.image}>
                    <img className={styles.imageCard} src="/photos/GroupChildrenHigh5.png" alt="Group of Children High fiving" />
                </div>

                <div className={styles.content}>
                    <span className={styles.sectionLabel}>
                        CHILD & ADOLESCENT CARE
                    </span>

                    <h2>Child Psychiatry</h2>

                    <p>
                        Located in downtown Killeen, we are committed to improving the
                        mental health and well-being of children and adolescents throughout
                        Central Texas.
                    </p>

                    <p>
                        We understand the unique challenges faced by military families and
                        those experiencing socioeconomic hardship. Our goal is to provide
                        compassionate care that creates meaningful and lasting change for
                        children, teens, and their families.
                    </p>

                    <ul>
                        <li>ADHD evaluations and treatment</li>
                        <li>Anxiety and depression treatment</li>
                        <li>Behavioral and emotional concerns</li>
                        <li>Family-centered treatment planning</li>
                        <li>School and developmental concerns</li>
                    </ul>
                </div>
            </section>

            {/* ADULT */}
            <section className={styles.featureReverse}>
                <div className={styles.content}>
                    <span className={styles.sectionLabel}>ADULT SERVICES</span>

                    <h2>Adult Psychiatry</h2>

                    <p>
                        We provide psychiatric care for adults of all ages. Whether you are
                        coping with life transitions, increased stress, or an existing
                        mental health condition, our providers work with you to develop an
                        individualized treatment plan.
                    </p>

                    <p>
                        Adults often play an important role in supporting family members
                        experiencing psychiatric challenges. We offer both individual adult
                        treatment and family therapy services to help strengthen the entire
                        family system.
                    </p>

                    <ul>
                        <li>Depression and anxiety treatment</li>
                        <li>Stress and life transition support</li>
                        <li>Medication management</li>
                        <li>Individual psychotherapy</li>
                        <li>Family therapy services</li>
                    </ul>
                </div>

                <div className={styles.image}>
                    <img className={styles.imageCard} src="/photos/WomanUsingPC.png" alt="Woman Using PC" />
                </div>
            </section>

            {/* WHY US */}
            <section className={styles.why}>
                <div className={styles.sectionHeader}>
                    <h2>Why Families Choose Our Practice</h2>
                </div>

                <div className={styles.stats}>
                    <div>
                        <h3>Evidence-Based</h3>
                        <p>Clinical treatments supported by research.</p>
                    </div>

                    <div>
                        <h3>Family-Focused</h3>
                        <p>Collaborative care that includes loved ones.</p>
                    </div>

                    <div>
                        <h3>Holistic</h3>
                        <p>Treatment plans designed for the whole person.</p>
                    </div>

                    <div>
                        <h3>Virtual Options</h3>
                        <p>Convenient access to quality psychiatric care.</p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.cta}>
                <h2>Begin Your Mental Health Journey Today</h2>

                <p>
                    Our team is committed to providing compassionate, personalized care
                    for patients and families throughout Central Texas.
                </p>

                <a href="https://consumer.scheduling.athena.io/?locationId=27185-1" className={styles.primaryBtn}
                    target="_blank" rel="noopener noreferrer">
                    Schedule an Appointment
                </a>
            </section>
        </main>
    );
}