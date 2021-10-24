import { useAuthContext } from "../../context/AuthProvider";
import styles from "./Header.module.css";
export default function Notification() {
  const [auth] = useAuthContext();

  return (
    <>
      {auth && (
        <section className={styles.notification}>
          <button className={styles.notification_btn}>
            <i className="far fa-bell"></i>
          </button>
          <div className={styles.notification_sub_menu}>
            <div className={styles.notification_sub_menu_list}>
              <div className={styles.notification_sub_menu_list_active}>
                <i className="far fa-bell"></i>
                <p>پرداخت با موفقیت انجام شد</p>
              </div>
              <div>
                <i className="fas fa-chevron-left"></i>
              </div>
            </div>
            <div className={styles.notification_sub_menu_list}>
              <div className={styles.notification_sub_menu_list_active}>
                <i className="far fa-bell"></i>
                <p>کاربر "مهسا اکبری" ویدئوی شما را پسندید</p>
              </div>
              <div>
                <i className="fas fa-chevron-left"></i>
              </div>
            </div>
            <div className={styles.notification_sub_menu_list}>
              <div>
                <i className="far fa-bell"></i>
                <p>پایان مهلت اعتبار بسته</p>
              </div>
              <div>
                <i className="fas fa-chevron-left"></i>
              </div>
            </div>
            <div className={styles.notification_sub_menu_list}>
              <div>
                <i className="far fa-bell"></i>
                <p>ویدئویی که بارگذاری کردید حذف شد</p>
              </div>
              <div>
                <i className="fas fa-chevron-left"></i>
              </div>
            </div>
            <div className={styles.notification_sub_menu_list}>
              <div>
                <i className="far fa-bell"></i>
                <p>تمدید بسته کاربری</p>
              </div>
              <div>
                <i className="fas fa-chevron-left"></i>
              </div>
            </div>
            <div className={styles.notification_sub_menu_list_show_all}>
              <p>مشاهده همه پیام ها</p>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
