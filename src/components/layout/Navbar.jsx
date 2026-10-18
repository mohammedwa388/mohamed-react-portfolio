import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { LanguageSwitch, useLanguage } from "../../i18n";
import { socials } from "../../data/socials";
import styles from "./Navbar.module.css";
import { scrollToSection } from "../../utils/navigation";
const links = [
    ["Home", "#hero"],
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Contact", "#contact"],
];
export default function Navbar() {
    const [open, setOpen] = useState(false),
        [profileOpen, setProfileOpen] = useState(false),
        profileRef = useRef(null);
    const { t, lang } = useLanguage();
    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "Escape") {
                setOpen(false);
                setProfileOpen(false);
            }
        };
        const onPointer = (e) => {
            if (profileRef.current && !profileRef.current.contains(e.target))
                setProfileOpen(false);
        };
        document.addEventListener("keydown", onKey);
        document.addEventListener("pointerdown", onPointer);
        return () => {
            document.removeEventListener("keydown", onKey);
            document.removeEventListener("pointerdown", onPointer);
        };
    }, []);
    const close = () => {
        setOpen(false);
        setProfileOpen(false);
    };
    return (
        <div className={styles.shell}>
            <nav className={styles.nav} aria-label={t("Main navigation")}>
                <div className={styles.brand}>
                    <div className={styles.profileWrap} ref={profileRef}>
                        <button
                            className={`${styles.avatarButton} ${profileOpen ? styles.avatarActive : ""}`}
                            type="button"
                            onClick={() => {
                                setProfileOpen((x) => !x);
                                setOpen(false);
                            }}
                            aria-label={t("Open profile and contact menu")}
                            aria-haspopup="menu"
                            aria-expanded={profileOpen}
                            aria-controls="profile-menu"
                        >
                            <span className={styles.avatarRing}>
                                <img src={socials.avatarImage} alt="" />
                            </span>
                            <span
                                className={styles.profileCaret}
                                aria-hidden="true"
                            >
                                ⌄
                            </span>
                        </button>
                        {profileOpen && (
                            <div
                                id="profile-menu"
                                className={styles.profileMenu}
                                role="menu"
                            >
                                <div className={styles.profileHead}>
                                    <img src={socials.avatarImage} alt="" />
                                    <span>
                                        <strong>
                                            {lang === "ar"
                                                ? socials.nameAr
                                                : socials.name}
                                        </strong>
                                        <small>
                                            {t("Front-End Developer")}
                                        </small>
                                    </span>
                                </div>
                                <a
                                    role="menuitem"
                                    href={socials.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    onClick={close}
                                >
                                    <span aria-hidden="true">⌘</span>GitHub{" "}
                                    <b>↗</b>
                                </a>
                                <a
                                    role="menuitem"
                                    href={`tel:${socials.phoneInternational}`}
                                    onClick={close}
                                >
                                    <span aria-hidden="true">✆</span>
                                    {t("Call me")}{" "}
                                    <b dir="ltr">{socials.phone}</b>
                                </a>
                                <a
                                    role="menuitem"
                                    href={`https://wa.me/${socials.phoneInternational.replace("+", "")}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    onClick={close}
                                >
                                    <span aria-hidden="true">↗</span>WhatsApp{" "}
                                    <b>↗</b>
                                </a>
                                {socials.khamsat && (
                                    <a
                                        role="menuitem"
                                        href={socials.khamsat}
                                        target="_blank"
                                        rel="noreferrer"
                                        onClick={close}
                                    >
                                        <span aria-hidden="true">◈</span>
                                        {t("Khamsat")} <b>↗</b>
                                    </a>
                                )}
                                <Link
                                    role="menuitem"
                                    to="/#projects"
                                    onClick={() => { close(); if (document.getElementById("hero")) scrollToSection("projects"); }}
                                >
                                    <span aria-hidden="true">◫</span>
                                    {t("My projects")} <b>↗</b>
                                </Link>
                            </div>
                        )}
                    </div>
                    <Link
                        to="/#hero"
                        className={styles.brandName}
                        onClick={() => { close(); if (document.getElementById("hero")) scrollToSection("hero"); }}
                        aria-label={`${socials.name} — ${t("Home")}`}
                    >
                        <span>
                            {lang === "ar" ? "محمد والي" : "Mohamed Waly"}
                        </span>
                        <small>FRONT-END DEVELOPER</small>
                    </Link>
                </div>
                <div
                    id="mobile-navigation"
                    className={`${styles.links} ${open ? styles.isOpen : ""}`}
                >
                    {links.map(([label, hash]) => (
                        <Link key={hash} to={`/${hash}`} onClick={() => {close(); if(document.getElementById("hero")) scrollToSection(hash);}}>
                            {t(label)}
                        </Link>
                    ))}
                </div>
                <div className={styles.controls}>
                    <LanguageSwitch />
                    <button
                        className={styles.toggle}
                        type="button"
                        aria-label={
                            open ? t("Close navigation") : t("Open navigation")
                        }
                        aria-expanded={open}
                        aria-controls="mobile-navigation"
                        onClick={() => {
                            setOpen((x) => !x);
                            setProfileOpen(false);
                        }}
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
            </nav>
            {open && (
                <button
                    className={styles.overlay}
                    aria-label={t("Close navigation")}
                    onClick={() => setOpen(false)}
                />
            )}
        </div>
    );
}
