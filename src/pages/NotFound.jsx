import styles from "./NotFound.module.css";
import {useLanguage} from "../i18n";
import { Link } from "react-router-dom";
function NotFound() {
    const {t}=useLanguage();
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={`${styles.orb} ${styles.orb1}`}></div>
                <div className={`${styles.orb} ${styles.orb2}`}></div>
                <div className={`${styles.orb} ${styles.orb3}`}></div>
                <div className={`${styles.orb} ${styles.orb4}`}></div>

                <div className={styles.errorContainer}>
                    <div className={styles.errorCode}>404</div>
                    <div className={styles.errorMsg}>{t("Nothing to see here.")}</div>
                    <Link to="/" className={styles.homeBtn}>
                        {t("Go Home")}
                    </Link>
                </div>

                <div className={styles.duckWrapper}>
                    <div className={styles.duck}>
                        <div className={styles.duckInner}>
                            <div className={styles.duckMouth}></div>
                            <div className={styles.duckHead}>
                                <div className={styles.duckEye}></div>
                                <div className={styles.duckWhite}></div>
                            </div>
                            <div className={styles.duckBody}></div>
                            <div className={styles.duckWing}></div>
                        </div>
                        <div
                            className={`${styles.duckFoot} ${styles.duckFoot1}`}
                        ></div>
                        <div
                            className={`${styles.duckFoot} ${styles.duckFoot2}`}
                        ></div>
                        <div className={styles.surface}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NotFound;
