import iran from "../../images/iran.png";
import styles from "./Header.module.css";

export default function Language() {
  return (
    <section className={styles.language}>
      <button className={styles.language_icon}>
        <img src={iran} alt="language" />
      </button>
      <div className={styles.language_sub_menu}>
        <ul>
          <li>
            English<span></span>
          </li>
          <li>
            Spanish<span></span>
          </li>
          <li>
            French<span></span>
          </li>
          <li>
            Russian<span></span>
          </li>
          <li>
            Arabic<span></span>
          </li>
          <li>
            Japanese<span></span>
          </li>
          <li>
            indian<span></span>
          </li>
          <li>
            Spanish<span></span>
          </li>
          <li>
            Spanish<span></span>
          </li>
          <li>
            Spanish<span></span>
          </li>
          <li>
            Spanish<span></span>
          </li>
          <li>
            Spanish<span></span>
          </li>
          <li>
            Spanish<span></span>
          </li>
        </ul>
      </div>
    </section>
  );
}
