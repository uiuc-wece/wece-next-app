import styles from "../styles/Sectionbody.module.css";

function SectionLink({ children, link = "" }) {
  return (
    <a className={styles["section-link"]} href={link} target="_blank">
      {children}
    </a>
  );
}

export default function SectionBody({
  children,
  hoverEffect = false,
  link = "",
}) {
  if (link != "") {
    return (
      <SectionLink children={children} link={link}>
        <div
          className={
            hoverEffect
              ? styles["section-body"] + " " + styles["section-hover-body"]
              : styles["section-body"]
          }
        >
          {children}
        </div>
      </SectionLink>
    );
  } else {
    return (
      <div
        className={
          hoverEffect
            ? styles["section-body"] + " " + styles["section-hover-body"]
            : styles["section-body"]
        }
      >
        {children}
      </div>
    );
  }
}
