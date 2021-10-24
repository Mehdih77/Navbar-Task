import styles from './Header.module.css';
import Language from "./Language/Language";
import Notification from "./Notification/Notification";
import SearchBar from "./Search/SearchBar/SearchBar";
import SideBarMenu from "./SideBarMenu/SideBarMenu";
import Panel from "./Panel/Panel";
import Logo from "./Logo/Logo";

export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <SideBarMenu />
        <Logo />
      </div>
      <div>
        <SearchBar />
      </div>
      <div>
        <Language />
        <Notification />
        <Panel />
      </div>
    </header>
  );
}
