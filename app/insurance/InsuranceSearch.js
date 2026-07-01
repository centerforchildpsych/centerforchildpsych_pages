"use client";

import { useState, useRef } from "react";
import styles from "./InsuranceSearch.module.css";

export default function InsuranceSearch({ acceptedInsurance }) {
    const insuranceRefs = useRef({});

    const [search, setSearch] = useState("");
    const [selectedInsurance, setSelectedInsurance] = useState("");

    const filteredInsurance =
        search.length > 0
            ? acceptedInsurance.filter((insurance) =>
                  insurance
                      .toLowerCase()
                      .includes(search.toLowerCase())
              )
            : [];

    return (
        <>
            <div className={styles.searchContainer}>
                <input
                    type="text"
                    placeholder="Search your insurance..."
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);
                        setSelectedInsurance("");
                    }}
                    className={styles.searchInput}
                />

                {filteredInsurance.length > 0 && (
                    <div className={styles.dropdown}>
                        {filteredInsurance.slice(0, 8).map((insurance) => (
                            <div
                                key={insurance}
                                className={styles.dropdownItem}
                                onClick={() => {
                                    setSelectedInsurance(insurance);
                                    setSearch(insurance);

                                    setTimeout(() => {
                                        insuranceRefs.current[
                                            insurance
                                        ]?.scrollIntoView({
                                            behavior: "smooth",
                                            block: "center",
                                        });
                                    }, 0);
                                    setSearch("");
                                }}
                            >
                                {insurance}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <section className={styles.card}>
                <h2>Accepted Insurance Plans</h2>
                <p className={styles.subtitle}>
                    Insurance providers are listed alphabetically.
                </p>

                <div className={styles.insuranceGrid}>
                    {acceptedInsurance.map((insurance) => (
                        <div
                            key={insurance}
                            ref={(el) => {
                                insuranceRefs.current[insurance] = el;
                            }}
                            className={`${styles.insuranceItem} ${
                                selectedInsurance === insurance
                                    ? styles.selectedInsurance
                                    : ""
                            }`}
                        >
                            {insurance}
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}