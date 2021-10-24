import styles from "./Header.module.css";
import { movieData } from "../../Data/data";
import { useState } from "react";

export default function SearchBar() {
  const [search, setSearch] = useState("");

  const showMovieResult = movieData
    .filter((n) => {
      if (n.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
        return n;
      }
    })
    .map((item) => (
      <div key={item.id} className={styles.search_result_item}>
        <div>
          <img src={item.img} alt={item.name} />
          <p>
            {item.name}
            <span>{item.year}</span>
          </p>
        </div>
        <div>
          <i className="fas fa-chevron-left"></i>
        </div>
      </div>
    ));

    const handleClearInput = () => {
      setSearch("");
    }

  return (
    <section className={styles.search_bar}>
      <input
        className={styles.search_bar_input}
        value={search}
        type="search"
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
      <div className={styles.search_result}>
        {search.length > 0 && (
          <div className={styles.search_result_notice}>
            <p>
              محتوای مورد نظر را پیدا نکردید؟ <a href="#!">مشاهده همه نتایج</a>
            </p>
          </div>
        )}
        {search.length > 0 && showMovieResult}
      </div>
    </section>
  );
}
