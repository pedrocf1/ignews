import { SingInButton } from '../SingInButton';
import styles from './styles.module.scss'
import Link from 'next/link'

export function Header() {
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/images/logo.svg" alt="logo img" />
                <nav>
                    <Link href="/">
                        <a className={styles.active}>Home</a>
                    </Link>
                    <Link href="/posts" prefetch>
                        <a>Posts</a>
                    </Link>
                </nav>

                <SingInButton/>
            </div>
        </header>
    );
}