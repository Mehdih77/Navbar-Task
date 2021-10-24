import styles from "./Language.module.css";
import iran from "../../../images/iran.png";

export default function Language() {
  return (
    <section className={styles.language}>
      <button className={styles.language_icon}>
        <img src={iran} alt="language" />
      </button>
      <div className={styles.language_sub_menu}>
        <ul>
          <li><span></span>English</li>
          <li><span></span>Spanish</li>
          <li><span></span>French</li>
          <li><span></span>Russian</li>
          <li><span></span>Arabic</li>
          <li><span></span>Japanese</li>
          <li><span></span>indian</li>
          <li><span></span>Spanish</li>
          <li><span></span>Spanish</li>
          <li><span></span>Spanish</li>
          <li><span></span>Spanish</li>
          <li><span></span>Spanish</li>
          <li><span></span>Spanish</li>
        </ul>
      </div>
    </section>
  );
}
