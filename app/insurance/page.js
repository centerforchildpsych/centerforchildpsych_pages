import PageTransition from "@/components/PageTransition";

export default function Insurance() {
    return (
        <>
            {/* logo fade out on page load */}
            <PageTransition />
            
            <h1 style={{ height: "500px", margin: "50px" }}>Insurance & Billing</h1>
        </>
    );
}
