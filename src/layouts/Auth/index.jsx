import styles from './auth.module.css'
import { Outlet } from "react-router-dom"

export const AuthLayout = () => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <Outlet />
            </div>
        </div>
    )
}