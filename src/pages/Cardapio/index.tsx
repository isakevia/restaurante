import styles from './Cardapio.module.scss';
import logo from 'assets/logo.svg';

export default function Cardapio() {
    return (
        <main>
            <nav className={styles.menu}>
                <img src={ logo } alt="logo" />
            </nav>
            <header className={styles.header}>
                <div className={styles.header__text}>
                    A casa do código e da massa!
                </div>
            </header>
        </main>
    );
}