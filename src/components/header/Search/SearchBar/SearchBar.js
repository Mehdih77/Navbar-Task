import { useState } from "react";
import styles from "./SearchBar.module.css";
import SearchResult from "../SearchResult/SearchResult";

export default function SearchBar() {
  const [search, setSearch] = useState("");

    const handleClearInput = () => {
      setSearch("");
    }

  return (
    <section className={styles.search_bar}>
      <input
        className={styles.search_bar_input}
        value={search}
        type="text"
        placeholder="جستجوی فیلم ، سریال ، انیمیشن ، مستند ، بازیگر و ..."
        onChange={(e) => setSearch(e.target.value)}
      />
      {search.length > 0 ? (
        <button onClick={handleClearInput} className={styles.search_bar_input_btn}><i className="fas fa-times"></i></button>
        ) : (
          <button className={styles.search_bar_input_btn}><i className="fas fa-search"></i></button>
          )}
      <button className={styles.search_bar_input_filter_btn}>
        <p>
          جستجوی پیشرفته<i className="fas fa-cog"></i>
        </p>
      </button>
      <SearchResult search={search} setSearch={setSearch} />
    </section>
  );
}
