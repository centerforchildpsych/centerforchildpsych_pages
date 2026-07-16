import PageTransition from "@/components/PageTransition";
import styles from "./page.module.css";

const groups = [
    {
        title: "Psychiatric Providers",
        key: "providers",
        color: "var(--brand-blue-deep)",
        people: [
            {
                name: "Lisa Candilora, PMHNP",
                role: "Psychiatric Mental Health Nurse Practitioner",
                photo: "",
                bio: "Compassionate psychiatric provider specializing in reproductive, perinatal, and general mental health. Dedicated to creating individualized treatment plans in a warm, collaborative environment.",
                facts: [
                    "Accepting new patients",
                    "Telehealth available",
                    "Medication management"
                ]
            },
            {
                name: "Team Member",
                role: "Psychiatric Provider",
                photo: "",
                bio: "Add provider biography here.",
                facts: [
                    "Specialty",
                    "Specialty"
                ]
            }
        ]
    },

    {
        title: "Therapists",
        key: "therapy",
        color: "var(--accent-yellow)",
        people: [
            {
                name: "Team Member",
                role: "Licensed Therapist",
                photo: "",
                bio: "Add a warm therapist biography here.",
                facts: [
                    "Accepts new patients"
                ]
            }
        ]
    },

    {
        title: "Clinical Leadership",
        key: "leadership",
        color: "var(--accent-purple)",
        people: [
            {
                name: "Andrey Shalomov, MD",
                role: "Chief Executive Officer",
                photo: "",
                bio: "Leads the clinical vision and long-term strategy of the practice.",
                facts: []
            },
            {
                name: "Joy Alvarado, MD, MHS",
                role: "Chief Operating Officer",
                photo: "",
                bio: "Oversees operations, physician recruitment, and organizational growth.",
                facts: []
            }
        ]
    },

    {
        title: "Support Staff",
        key: "support",
        color: "var(--accent-sage)",
        people: [
            {
                name: "Team Member",
                role: "Care Coordinator",
                photo: "",
                bio: "Usually the first voice patients hear and helps guide them through every step of care.",
                facts: []
            }
        ]
    }
];

function initials(name) {
    return name
        .split(" ")
        .filter((word) => word.length && word[0] === word[0].toUpperCase())
        .slice(0, 2)
        .map((word) => word[0])
        .join("")
        .toUpperCase();
}

export default function Providers() {
    return (
        <>
            <PageTransition />

            <main className={styles.page}>
                <section className={styles.hero}>
                    <p className={styles.eyebrow}>
                        CENTER FOR CHILD & FAMILY PSYCHIATRY
                    </p>

                    <h1 className={styles.title}>
                        Meet Our Team
                    </h1>

                    <p className={styles.subtitle}>
                        Every member of our practice shares the same goal:
                        helping children, adolescents, and families receive
                        thoughtful, evidence-based psychiatric care in a warm,
                        welcoming environment.
                    </p>

                    <div className={styles.heroButtons}>
                        <a
                            href="/appointments"
                            className={styles.primaryButton}
                        >
                            Schedule Appointment
                        </a>

                        <a
                            href="#team"
                            className={styles.secondaryButton}
                        >
                            Meet the Team
                        </a>
                    </div>
                </section>

                <section
                    id="team"
                    className={styles.teamSection}
                >

                    {groups.map((group) => (
                        <div
                            key={group.key}
                            className={styles.group}
                        >
                            <div className={styles.groupHeader}>
                                <h2
                                    style={{
                                        color: group.color
                                    }}
                                >
                                    {group.title}
                                </h2>

                                <span className={styles.groupCount}>
                                    {String(group.people.length).padStart(2, "0")}
                                </span>
                            </div>

                            <div className={styles.groupRule} />

                            {group.people.map((person) => (
                                <div
                                    key={person.name}
                                    className={styles.personRow}
                                >
                                    {person.photo ? (
                                        <div
                                            className={styles.avatar}
                                            style={{
                                                backgroundImage: `url(${person.photo})`
                                            }}
                                        />
                                    ) : (
                                        <div className={styles.avatar}>
                                            {initials(person.name)}
                                        </div>
                                    )}

                                    <div className={styles.personBody}>
                                        <div className={styles.personTop}>
                                            <h3>{person.name}</h3>

                                            <span
                                                className={styles.role}
                                                style={{
                                                    color: group.color
                                                }}
                                            >
                                                {person.role}
                                            </span>
                                        </div>

                                        <p className={styles.bio}>
                                            {person.bio}
                                        </p>
                                        {person.facts.length > 0 && (
                                            <ul className={styles.facts}>
                                                {person.facts.map((fact, index) => (
                                                    <li key={`${person.name}-${index}`}>
                                                        {fact}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </section>

                <section className={styles.joinSection}>
                    <div className={styles.joinCard}>
                        <h2>Interested in Joining Our Team?</h2>

                        <p>
                            We're always looking for compassionate clinicians and
                            professionals who are passionate about providing
                            exceptional psychiatric care to children, adolescents,
                            and families.
                        </p>

                        <a
                            href="/careers"
                            className={styles.primaryButton}
                        >
                            View Careers
                        </a>
                    </div>
                </section>

            </main>
        </>
    );
}