import HeaderSeller from './headerSeller'
import styles from '../styles/Home.module.css'
import Footer from "./footer"

export default function LayoutSeller({ children }) {
    return (
        <>
            <HeaderSeller />
            <div className={styles.container}>
                <div className={styles.content}>
                    {children}
                </div>
            </div>
            <Footer />
        </>
    )
}