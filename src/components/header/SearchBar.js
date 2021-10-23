import styles from "./Header.module.css";

export default function SearchBar() {
  return (
    <section className={styles.search_bar}>
      <input
        className={styles.search_bar_input}
        type="search"
        placeholder="جستجوی فیلم ، سریال ، انیمیشن ، مستند ، بازیگر و ..."
      />
      {true ? <i className="fas fa-search"></i> : <i className="fas fa-times"></i>}
      <button><p>جستجوی پیشرفته<i className="fas fa-cog"></i></p></button>
    </section>
  );
}
