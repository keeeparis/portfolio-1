import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import st from './Social.module.scss'

const Social = () => {
    return (
        <div className={st.social}>
            <div className={st.media}>
                <a href="/">
                    <FontAwesomeIcon icon={['fab', "itunes-note"]} />
                </a>
            </div>
            <div className={st.media}>
                <a href="/">
                    <FontAwesomeIcon icon={['fab', "soundcloud"]} />
                </a>
            </div>
            <div className={st.media}>
                <a href="/">
                    <FontAwesomeIcon icon={['fab', "spotify"]} />
                </a>
            </div>
            <div className={st.media}>
                <a href="/">
                    <FontAwesomeIcon icon={['fab', "facebook"]} />
                </a>
            </div>
            <div className={st.media}>
                <a href="/">
                    <FontAwesomeIcon icon={['fab', "instagram"]} />
                </a>
            </div>
            <div className={st.media}>
                <a href="/">
                    <FontAwesomeIcon icon={['fab', "twitter"]} />
                </a>
            </div>
            <div className={st.media}>
                <a href="/">
                    <FontAwesomeIcon icon={['fab', "discord"]} />
                </a>
            </div>
            <div className={st.media}>
                <a href="/">
                    <FontAwesomeIcon icon={['fab', "tiktok"]} />
                </a>
            </div>
        </div>
    )
}

export default Social