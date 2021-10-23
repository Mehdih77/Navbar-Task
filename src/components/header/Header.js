import Language from "./Language";
import Notification from "./Notification";
import SearchBar from "./SearchBar";
import SideBarMenu from "./SideBarMenu";
import styles from './Header.module.css';
import Panel from "./Panel";
import Logo from "./Logo";

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
