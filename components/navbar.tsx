import Link from 'next/link'
import styles from './navbar.module.css'

function Header() {
    return (
        <div className={`${styles.navbarWrapper} ${styles.containerBlur}`}>
            <div className={`${styles.navbarItem} ${styles.start}`}>
                <Link href={'/'}>
                    <span className={styles.brandName}>Brandname</span>
                </Link>
            </div>
            <div className={`${styles.navbarItem}`}></div>
            <div className={`${styles.navbarItem} ${styles.end}`}>
                <Link href={'/signup'}>
                    <button className={styles.signupBtn}>
                        <span>Sign Up</span>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Header