import PageTransition from "@/components/PageTransition";
import styles from "./page.module.css";

export default function Insurance() {
    const acceptedInsurance = [
        "AARP",
        "Aetna HMO",
        "Aetna Commercial",
        "Aetna Star",
        "AllSavers UHC",
        "Amerigroup Medicaid and CHIP",
        "Baylor Scott & White Commercial",
        "Baylor Scott & White RightCare",
        "Baylor Scott & White FirstCare",
        "Blue Cross Blue Shield TX Star and CHIP",
        "BCBS PAR – PAR Plan",
        "BCBS BCP – Blue Choice PPO",
        "BCBS HMO – Blue Essentials",
        "BCBS HME – HealthSelect of Texas®",
        "BCBS HMH – Blue Premier",
        "BCBS HPN – Blue High Performance Network",
        "BCBS PPO – Blue Cross Medicare Advantage",
        "BCBS PMB – Medicare Advantage PPO (BH)",
        "Cigna",
        "Curative",
        "Dell Children's Health Plan",
        "Emdeon",
        "Evernorth Behavioral Health",
        "First Health",
        "Magellan Behavioral",
        "Devoted Health",
        "Texas Medicaid",
        "Medicare",
        "Molina Healthcare of Texas",
        "Multiplan",
        "Optum Health",
        "Oxford Health Plans",
        "PHCS – Freedom Life Insurance Company of America",
        "Philadelphia American Life Insurance – First Health Network",
        "Seton Health Plan, Inc. (SHP)",
        "Southern Guaranty Insurance Co",
        "Superior Health Plan",
        "Texas Children's Health Plan",
        "TRICARE WEST",
        "Humana Military",
        "TriCare Prime",
        "TriCare Select",
        "TRIWEST – VA CCN",
        "United Behavioral Health",
        "United Healthcare (UHC)",
        "UHC Commercial Plans",
        "UHC Medicare",
        "Oscar",
        "UHC Texas Exchange",
        "UHC Dual Complete Choice Premier (PPO D-SNP)",
        "United HealthCare Community Plans (CHIP & STAR)",
        "United Medical Resources (UMR)",
    ];

    const comingSoon = [
        "Community First",
        "Humana",
    ];

    return (
        <>
            <PageTransition />

            <main className={styles.container}>
                <section className={styles.hero}>
                    <h1>Insurance & Billing</h1>
                    <p>
                        We accept a wide range of insurance plans to help make
                        quality healthcare accessible and affordable.
                    </p>
                </section>

                <section className={styles.card}>
                    <h2>Accepted Insurance Plans</h2>
                    <p className={styles.subtitle}>
                        Insurance providers are listed alphabetically.
                    </p>

                    <div className={styles.insuranceGrid}>
                        {acceptedInsurance.map((insurance) => (
                            <div
                                key={insurance}
                                className={styles.insuranceItem}
                            >
                                {insurance}
                            </div>
                        ))}
                    </div>
                </section>

                <section className={styles.card}>
                    <h2>Coming Soon</h2>
                    <p className={styles.subtitle}>
                        We are currently in the credentialing process with the
                        following insurance providers:
                    </p>

                    <div className={styles.comingSoon}>
                        {comingSoon.map((insurance) => (
                            <div
                                key={insurance}
                                className={styles.insuranceItem}
                            >
                                {insurance}
                            </div>
                        ))}
                    </div>
                </section>

                <section className={styles.contactCard}>
                    <h2>Self-Pay & Billing Questions</h2>
                    <p>
                        We also accept cash payments and self-pay options.
                        Please contact our office for information about payment
                        methods, insurance verification, or billing questions.
                    </p>

                    <a
                        href="tel:2547741163"
                        className={styles.phone}
                    >
                        (254) 774-1163
                    </a>
                </section>
            </main>
        </>
    );
}