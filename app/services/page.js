import PageTransition from "@/components/PageTransition";
import styles from "./page.module.css"

export default function Services() {
    return (
        <>
            {/* logo fade out on page load */}
            <PageTransition />

            <h1 className={styles.header}>Available Services:</h1>
            <div className={styles.servicesContainer}>
                <div >
                    <p>Child & Teen Psychiatry</p>
                    <p>Adult Psychiatry</p>
                    <p>Diagnostic Evaluations & Medication Management</p>
                    <p>Psychological Testing: ADHD, Autism, Learning Disabilities & More</p>
                    <p>Psychiatric Evaluations for Surgery, Employment & More</p>
                </div>
                <div>
                    <p>Medication Management</p>
                    <p>Formal Therapy: Psychotherapy, Cognitive Behavioral Therapy & More</p>
                    <p>Informal Therapy: Counseling, Motivational Interviewing, ADHD Therapy</p>
                    <p>Transcranial Magnetic Stimulation (TMS): An alternative to medication for depression and obsessive-compulsive disorder</p>
                </div>
            </div>
        </>
    );
}
