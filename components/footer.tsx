import styles from './footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <hr className={styles.hr} />
            <div className={styles.wrapper}>
                <div className={styles.footerItem}>
                    <p className={styles.headline}>Brandname</p>
                    <p className={styles.copyright}>Copyright 2022 All rights reserved</p>
                </div>
                <div className={styles.footerItem}>
                    <p className={styles.headline}>Company</p>
                    <p>Twitter</p>
                    <p>Sign Up</p>
                </div>
                <div className={styles.footerItem}>
                    <p className={styles.headline}>Legal</p>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer