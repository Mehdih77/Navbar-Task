import styles from "./Language.module.css";
import iran from "../../../images/iran.png";
import { languages } from "../../../Data/data";

export default function Language() {
  const languagesItem = languages.map((lang) => (
    <li key={lang.id}>
      <span></span>
      {lang.name}
    </li>
  ));

  return (
    <section className={styles.language}>
      <button className={styles.language_icon_btn}>
        <img src={iran} alt="language" />
      </button>
      <div className={styles.language_sub_menu}>
        <ul>{languagesItem}</ul>
      </div>
    </section>
  );
}
