import styles from "./Header.module.css";
import user from "../../images/user.png";
import { useAuthContext } from "../../context/AuthProvider";
import { useEffect, useState } from "react";

export default function Panel() {
  const [auth, hanldeAuth] = useAuthContext();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  useEffect(() => {
    if (!auth) {
      setOpen(false);
    }
  }, [auth]);

  return (
    <section className={styles.panel}>
      {auth ? (
        <>
          <button onClick={handleOpen} className={styles.panel_btn}>
            <img src={user} alt="user" />
          </button>
          {open && (
            <div className={styles.panel_sub_menu}>
              <div className={styles.panel_sub_menu_profile}>
                <div>
                  <img src={user} alt="user" />
                </div>
                <div>
                  <p>سارا خلیل نژاد</p>
                  <p>Sample@gmail.com</p>
                </div>
              </div>
              <div className={styles.panel_sub_menu_actions}>
                <div className={styles.panel_sub_menu_actions_list}>
                  <div>
                    <i className="far fa-user"></i>
                    <span>مشاهده پنل کاربری</span>
                  </div>
                  <div>
                    <i className="fas fa-chevron-left"></i>
                  </div>
                </div>
                <div className={styles.panel_sub_menu_actions_list}>
                  <div>
                    <i className="far fa-bookmark"></i>
                    <span>علاقه مندی ها</span>
                  </div>
                  <div>
                    <i className="fas fa-chevron-left"></i>
                  </div>
                </div>
                <div onClick={hanldeAuth} className={styles.panel_sub_menu_actions_list}>
                  <div
                    className={styles.panel_sub_menu_actions_list_logout}>
                    <i className="fas fa-sign-out-alt"></i>
                    <span>خروج از حساب کاربری</span>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <>
          <button onClick={hanldeAuth} className={styles.panel_login_btn}>
            <i className="fas fa-sign-in-alt"></i>ورود یا عضویت
          </button>
        </>
      )}
    </section>
  );
}
