import styles from "./StarBackground.module.css";

function StarBackground() {
    return (
        <div className={styles.container} aria-hidden="true">
            <div className={styles.stars}></div>
            <div className={styles.starsMedium}></div>
            <div className={styles.starsLarge}></div>
        </div>
    );
}

export default StarBackground;
