import { ReactComponent as Logo } from '../assets/logo.svg'
import { User_1 } from '../assets/icon';
import styles from "./Header.module.css";

function Header() {
    return (
        <header className={styles.container}>
            <div className={styles.header}>
                <Logo />
                <div className={styles.icon_wrap}>
                    <User_1 />
                </div>
            </div>
        </header>
    );
}

export default Header;