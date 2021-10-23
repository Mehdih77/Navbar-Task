import { useAuthContext } from "../../context/AuthProvider";
import styles from "./Header.module.css";
export default function Notification() {

  const [auth] = useAuthContext();

  return (
    <>
    {auth && <section className={styles.notification}>
      <button className={styles.notification_btn}>
        <i className="far fa-bell"></i>
      </button>
      <div className={styles.notification_sub_menu}>
        <div className={styles.notification_sub_menu_list}>
          <div>
            <i
              className={`${styles.notification_sub_menu_icon_active} far fa-bell`}></i>
            پرداخت با موفقیت انجام شد
          </div>
          <div>
            <i className="fas fa-chevron-left"></i>
          </div>
        </div>
        <div className={styles.notification_sub_menu_list}>
          <div>
            <i
              className={`${styles.notification_sub_menu_icon_active} far fa-bell`}></i>
            کاربر "مهسا اکبری" ویدئوی شما را پسندید
          </div>
          <div>
            <i className="fas fa-chevron-left"></i>
          </div>
        </div>
        <div className={styles.notification_sub_menu_list}>
          <div>
            <i className="far fa-bell"></i>
            پایان مهلت اعتبار بسته
          </div>
          <div>
            <i className="fas fa-chevron-left"></i>
          </div>
        </div>
        <div className={styles.notification_sub_menu_list}>
          <div>
            <i className="far fa-bell"></i>
            ویدئویی که بارگذاری کردید حذف شد
          </div>
          <div>
            <i className="fas fa-chevron-left"></i>
          </div>
        </div>
        <div className={styles.notification_sub_menu_list}>
          <div>
            <i className="far fa-bell"></i>
            تمدید بسته کاربری
          </div>
          <div>
            <i className="fas fa-chevron-left"></i>
          </div>
        </div>
        <div className={styles.notification_sub_menu_list_show_all}>
            <p>مشاهده همه پیام ها</p>
        </div>
      </div>
    </section>}
    </>
  );
}
