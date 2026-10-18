import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../i18n";
import { socials } from "../../data/socials";
import styles from "./Hero.module.css";
import { scrollToSection } from "../../utils/navigation";

/* أنواع الـ tokens: k=keyword, s=string, p=property, f=function, m=punctuation, c=plain */
function buildLines(name) {
    return [
        [
            ["k", "const"],
            ["c", " dev "],
            ["m", "= {"],
        ],
        [
            ["c", "  "],
            ["p", "name"],
            ["m", ": "],
            ["s", `"${name}"`],
            ["m", ","],
        ],
        [
            ["c", "  "],
            ["p", "role"],
            ["m", ": "],
            ["s", '"Front-End Developer"'],
            ["m", ","],
        ],
        [
            ["c", "  "],
            ["p", "stack"],
            ["m", ": ["],
            ["s", '"React"'],
            ["m", ", "],
            ["s", '"JS"'],
            ["m", ", "],
            ["s", '"Tailwind"'],
            ["m", "],"],
        ],
        [
            ["c", "  "],
            ["p", "available"],
            ["m", ": "],
            ["k", "true"],
            ["m", ","],
        ],
        [["m", "};"]],
        [],
        [
            ["k", "export default function "],
            ["f", "Hero"],
            ["m", "() {"],
        ],
        [
            ["c", "  "],
            ["k", "return "],
            ["m", "<"],
            ["f", "Portfolio"],
            ["c", " "],
            ["m", "{..."],
            ["c", "dev"],
            ["m", "} />;"],
        ],
        [["m", "}"]],
    ];
}

const lineLength = (tokens) => tokens.reduce((n, [, s]) => n + s.length, 0);

/* أيقونات المهارات اللي بتطفو حوالين المحرر (SVG داخلي، من غير أي ملفات خارجية) */
const ReactIcon = () => (
    <svg
        viewBox="-11.5 -10.2 23 20.4"
        width="26"
        height="26"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
    >
        <circle r="2.05" fill="currentColor" stroke="none" />
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </svg>
);
const TailwindIcon = () => (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
    </svg>
);
const SKILLS = [
    { key: "react", color: "#61dafb", icon: <ReactIcon /> },
    {
        key: "js",
        color: "#f7df1e",
        icon: <span className={styles.glyph}>JS</span>,
    },
    {
        key: "html",
        color: "#ff8a5c",
        icon: <span className={styles.glyph}>{"</>"}</span>,
    },
    {
        key: "css",
        color: "#7aa2ff",
        icon: <span className={styles.glyph}>{"{ }"}</span>,
    },
    { key: "tailwind", color: "#38bdf8", icon: <TailwindIcon /> },
];

function CodeEditor({ lines, count, total }) {
    const done = count >= total;
    return (
        <div className={styles.editor} dir="ltr">
            <div className={styles.editorBar}>
                <span className={styles.barDots}>
                    <i />
                    <i />
                    <i />
                </span>
                <span className={styles.tab}>Hero.jsx</span>
            </div>
            <div className={styles.code}>
                {lines.map((tokens, i) => {
                    const len = lineLength(tokens);
                    const start = lines.slice(0, i).reduce((sum, line) => sum + lineLength(line) + 1, 0);
                    const visible = Math.max(0, Math.min(len, count - start));
                    const hasCursor = done
                        ? i === lines.length - 1
                        : count >= start && count <= start + len;
                    let left = visible;
                    const spans = tokens.map(([type, text], j) => {
                        if (left <= 0) return null;
                        const part = text.slice(0, left);
                        left -= part.length;
                        return (
                            <span key={j} className={styles["t" + type]}>
                                {part}
                            </span>
                        );
                    });
                    return (
                        <div className={styles.line} key={i}>
                            <span className={styles.ln}>{i + 1}</span>
                            <span className={styles.src}>
                                {spans}
                                {hasCursor && (
                                    <span className={styles.cursor} />
                                )}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default function Hero() {
    const { lang, t } = useLanguage();
    const shownName = lang === "ar" ? socials.nameAr : socials.name;

    const lines = useMemo(() => buildLines(socials.name), []);
    const total = useMemo(
        () => lines.reduce((n, l) => n + lineLength(l) + 1, 0),
        [lines],
    );
    const [count, setCount] = useState(() =>
        window.matchMedia("(prefers-reduced-motion: reduce)").matches ? total : 0,
    );
    const done = count >= total;

    /* كتابة حرف بحرف */
    useEffect(() => {
        if (count >= total) return;
        const id = setTimeout(
            () => setCount((c) => c + 1),
            count === 0 ? 700 : 22,
        );
        return () => clearTimeout(id);
    }, [count, total]);

    return (
        <section id="hero" className={styles.hero}>
            <div className={styles.inner}>
                <div className={styles.copy}>
                    <p className={styles.eyebrow}>
                        <span className={styles.dot} />
                        {t("Available for projects")}
                    </p>
                    <h1 className={styles.title}>
                        {t("Hi, I’m")}
                        <span className={styles.name}>
                            {shownName}
                            <span className={styles.period}>.</span>
                        </span>
                    </h1>
                    <h2 className={styles.role}>
                        {t("Front-End Developer")} <span>— React</span>
                    </h2>
                    <p className={styles.intro}>
                        {t(
                            "I create clean, responsive web experiences using React, JavaScript, and a love for the small details.",
                        )}
                    </p>
                    <div className={styles.actions}>
                        <Link to="/#projects" className="btn-primary" onClick={() => scrollToSection("projects")}>
                            {t("View my work")}{" "}
                            <span aria-hidden="true">↗</span>
                        </Link>
                        <a
                            href={`https://wa.me/${socials.phoneInternational.replace("+", "")}`}
                            target="_blank"
                            rel="noreferrer"
                            className="btn-outline"
                        >
                            {t("Let’s talk")} <span aria-hidden="true">↗</span>
                        </a>
                    </div>
                    <div className={styles.stack}>
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>JavaScript</span>
                        <span>React</span>
                        <span>Tailwind</span>
                    </div>
                </div>

                <div className={styles.visual} aria-hidden="true">
                    <CodeEditor lines={lines} count={count} total={total} />
                    <div
                        className={`${styles.chips} ${done ? styles.chipsOn : ""}`}
                    >
                        {SKILLS.map((s, i) => (
                            <span
                                key={s.key}
                                className={`${styles.chip} ${styles["c" + i]}`}
                                style={{ "--i": i, color: s.color }}
                            >
                                <span className={styles.chipIn}>{s.icon}</span>
                            </span>
                        ))}
                    </div>
                    <div
                        className={`${styles.preview} ${done ? styles.previewOn : ""}`}
                    >
                        <div className={styles.previewTop}>
                            <span className={styles.avatar}>
                                <img
                                    src={socials.avatarImage}
                                    alt=""
                                    width="46"
                                    height="46"
                                />
                            </span>
                            <div>
                                <p className={styles.previewName}>
                                    {shownName}
                                </p>
                                <p className={styles.previewRole}>
                                    {t("Front-End Developer")}
                                </p>
                            </div>
                        </div>
                        <div className={styles.previewStatus}>
                            <span className={styles.dot} />
                            {t("Available for projects")}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
