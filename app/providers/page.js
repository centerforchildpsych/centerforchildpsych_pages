import PageTransition from "@/components/PageTransition";
import Rotator from "@/components/Rotator";
import styles from "./page.module.css"
import Carousel from "@/components/Carousel";

export default function Providers() {
    const mixedSlides = [
        // "Top in down to earth providers meet them by checking out their bios",

        <img src="/photos/bios/ShalomovBioPrint.png" alt="Partner Logo" key="img1" />,
        <img src="/photos/bios/HolmesBioPrint.png" alt="Partner Logo" key="img1" />,

        // "Located in downtown Killeen, Texas, The Center aims to improve the lives of children and adolescents where they need it most.Check out our new summer collection",

        // <div className="custom-card" key="custom">
        //     <span style={{ color: 'purple' }}>TMS:</span> learn what it is and if it is right for you
        // </div>
    ];

    return (
        <>
            <PageTransition />
            <Carousel/>
            <section className={styles.section1}>
                <main style={{ padding: "2rem" }}>
                    {/* Rotates every 3 seconds (default) */}
                    <Rotator items={mixedSlides} />

                    {/* Faster rotation example */}
                    {/* <Rotator items={["Thoughtful providers", "A better you"]} interval={1500} /> */}
                </main>
                <h1 style={{ height: "500px", margin: "50px" }}>Provider Profiles</h1>
            </section>
        </>
    );
}
