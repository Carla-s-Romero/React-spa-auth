import styles from './link.module.css'
import { Link as RouterLink} from 'react-router-dom'


export const Link = ({ children, ...props }) => {
    const className = props.className || ''
    return (
        <RouterLink to={props.href} {...props} className={`${styles.link} ${className}`}>
            {children}
        </RouterLink>
    )
}