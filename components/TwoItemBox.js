"use client";

import styles from "./TwoItemBox.module.css";

function TwoItemBox({ children }) {
    return (
        <div className={styles.twoBoxPanel}>
            {children}
        </div>
    );
}

export default TwoItemBox;
