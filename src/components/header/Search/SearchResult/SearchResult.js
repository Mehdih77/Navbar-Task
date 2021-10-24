import styles from "./SearchResult.module.css";
import { movieData } from "../../../../Data/data";

export default function SearchResult({ search }) {
  const showMovieResult = movieData
    .filter((n) => {
      if (n.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
        return n;
      }
      return false;
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

  return (
    <>
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
    </>
  );
}
