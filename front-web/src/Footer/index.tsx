import './styles.css';
import {ReactComponent as YoutubeIcon} from '../Footer/Youtube.svg'
import {ReactComponent as InstaIcon} from './Instagram.svg'
import {ReactComponent as LinkedinIcon} from './Linkedin.svg'
import { Link } from 'react-router-dom'


function Footer(){
    return(
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <Link to="https://www.youtube.com/c/DevSuperior" target="_new">
                <YoutubeIcon/>
                </Link>
                <Link to="https://www.linkedin.com/school/devsuperior/" target="_new">
                <LinkedinIcon/>
                </Link>
                <Link to="https://www.instagram.com/devsuperior.ig" target="_new">
                <InstaIcon/>
                </Link>
            </div>
        </footer>
    )
}

export default Footer;