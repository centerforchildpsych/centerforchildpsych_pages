import styles from "./ImageHero.module.css";

export default function ImageHero({ image, alt, children }) {
  return (
    <div className={styles.imageContainer}>
      <img className={styles.image} src={image} alt={alt} />

      <div className={styles.overlay}>
        {children}
      </div>
    </div>
  );
}