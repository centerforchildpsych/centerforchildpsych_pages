import PageTransition from "@/components/PageTransition";
import BlankSpace from "@/components/BlankSpace";
import styles from "./page.module.css"

export default function About() {
    return (
        <>
            {/* logo fade out on page load */}
            <PageTransition />

            <BlankSpace height="100px" />

            <section className={styles.section1}>
                <img className={styles.imageArch} src="/photos/bios/AndreyShalomov.png" alt="Andrey Shalomov" />
                <div>
                    <p>
                        Dr. Andrey Shalomov founded The Center for Child and Family Psychiatry,
                        PC to help improve the mental health of adults and children in Killeen and other central Texas communities.
                    </p>
                </div>
            </section>

            <BlankSpace height="100px" />

            <section className={styles.section2}>
                <div>
                    <p>
                        Dr. Andrey Shalomov founded The Center for Child and Family Psychiatry,
                        PC to help improve the mental health of adults and children in Killeen and other central Texas communities.
                    </p>

                    <BlankSpace height="25px" />

                    <p>
                        He is board-certified in both General (Adult) Psychiatry and Child & Adolescent Psychiatry.
                        He completed his residency at the University of Texas Rio Grande Valley and his
                        fellowship at the University of Texas Health Science Center at San Antonio.
                    </p>
                </div>
            </section>

            <BlankSpace height="200px" />

            <section className={styles.section3}>
                <div>
                    <h2>Clinic Information</h2>
                    <h4>CLINIC ADDRESS: 400 West Jasper Drive | Killeen, TX | 76541</h4>
                    <h4><strong>EMAIL:</strong> centerforchildpsych@gmail.com</h4>
                    <h4><strong>PHONE:</strong> 254-774-1163</h4>
                    <h4><strong>FAX:</strong> 833-464-5455</h4>
                    <h3>Our business address (for mail/correspondence): 1103 N. Gray Street | Killeen, TX | 76541</h3>
                </div>
            </section>

            <BlankSpace height="50px" />
        </>
    );
}
