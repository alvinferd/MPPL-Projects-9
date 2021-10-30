import Header from "./header"
import styles from '../styles/Home.module.css'
import Footer from "./footer"

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <div className={styles.container}>
                <div className={styles.content}>
                    {children}
                </div>
            </div>
            <Footer />
        </>
    )
}