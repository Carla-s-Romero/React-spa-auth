import { Aside } from "../../components/Aside"
import styles from './app.module.css'
import { Outlet } from "react-router-dom"

export const AppLayout = () => {
    return (
        <div className={styles.app}>
            <Aside />
            <div className={styles.content}>
                <Outlet />
            </div>
        </div>
    )
}