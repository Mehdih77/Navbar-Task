import styles from './Logo.module.css';
import logo from '../../../images/logo.png';

export default function Logo() {
    return (
        <a href='/'>
            <img className={styles.logo} src={logo} alt="logo" />
        </a>
    )
}
