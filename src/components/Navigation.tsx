import { Link } from 'react-router-dom'
import st from './Navigation.module.scss'

const Navigation = () => {
    return (
        <div className={st.nav}>
            <div className={st.link}>
                <Link to='/spotify'>Listen</Link> 
            </div>
            <div className={st.link}>
                <Link to='/rickroll'>Watch</Link>
            </div>
            <div className={st.link}>
                <Link to='/ebay'>Shop</Link> 
            </div>
            <div className={st.link}>
                <Link to='/join'>Join</Link> 
            </div>
        </div>
    )
}

export default Navigation