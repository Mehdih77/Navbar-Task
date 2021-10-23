import logo from '../../images/logo.png';
import styles from './Header.module.css';

export default function Logo() {
    return (
        <>
            <img className={styles.logo} src={logo} alt="logo" />
        </>
    )
}
