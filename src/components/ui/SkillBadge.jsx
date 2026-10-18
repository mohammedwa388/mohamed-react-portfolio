import styles from "./SkillBadge.module.css";

function SkillBadge({ name, description, icon }) {
    return (
        <div className={styles.badge}>
            <div className={styles.iconBox}>
                <img src={icon} alt="" className={styles.icon} loading="lazy" />
            </div>
            <div className={styles.info}>
                <h3 className={styles.name}>{name}</h3>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    );
}

export default SkillBadge;
