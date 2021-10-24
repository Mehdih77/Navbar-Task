import styles from "./SideBarMenu.module.css";

export default function SideBarMenu() {
  return (
    <section className={styles.side_bar}>
      <div className={styles.side_bar_bar1}></div>
      <div className={styles.side_bar_bar2}></div>
      <div className={styles.side_bar_bar3}></div>
    </section>
  );
}
