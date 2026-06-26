import PageTransition from "@/components/PageTransition";

export default function About() {
    return (
        <>
            {/* logo fade out on page load */}
            <PageTransition />
            
            <h1 style={{ height: "500px", margin: "50px" }}>About Page</h1>
        </>
    );
}
