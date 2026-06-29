import PageTransition from "@/components/PageTransition";
// import Rotator from "@/components/Rotator";
import styles from "./page.module.css"
import Carousel from "@/components/Carousel";
import BlankSpace from "@/components/BlankSpace";

export default function Providers() {
    const mixedSlides = [
        <img src="/photos/bios/ShalomovBioPrint.png" alt="Partner Logo" key="img1" />,
        <img src="/photos/bios/HolmesBioPrint.png" alt="Partner Logo" key="img1" />,
    ];

    return (
        <>
            {/* logo fade out on page load */}
            <PageTransition />

            <BlankSpace />

            <section className={styles.section1}>
                <Carousel />
            </section>

            <BlankSpace />

            {/* <section className={styles.section1}>
                <main style={{ padding: "2rem" }}>
                    <Rotator items={mixedSlides} />
                    <Rotator items={["Thoughtful providers", "A better you"]} interval={1500} />
                </main>
                <h1 style={{ height: "500px", margin: "50px" }}>Provider Profiles</h1>
            </section> */}
        </>
    );
}
