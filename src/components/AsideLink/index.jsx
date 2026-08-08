import styles from './asidelink.module.css'
import { Link as RouterLink} from 'react-router-dom'

const AsideLink = ({ href, children }) => {
    return (<RouterLink to={href} className={styles.asidelink}>
        {children}
    </RouterLink>)
}

export default AsideLink