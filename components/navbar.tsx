import styles from './navbar.module.css'

function Header() {
    return (
        <div className={`${styles.navbarWrapper} ${styles.containerBlur}`}>
            <div className={`${styles.navbarItem} ${styles.start}`}>
                <span className={styles.brandName}>Brandname</span>
            </div>
            <div className={`${styles.navbarItem}`}></div>
            <div className={`${styles.navbarItem} ${styles.end}`}>
                <button className={styles.signupBtn}>
                    <span>Sign Up</span>
                </button>
            </div>
        </div>
    )
}

export default Header