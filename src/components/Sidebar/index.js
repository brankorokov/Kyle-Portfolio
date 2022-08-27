import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import LogoL from '../../assets/images/logos/logo1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLinkedin,
    faGithub,
    faYoutube,
    faSkype,
} from '@fortawesome/free-brands-svg-icons';
import {
    faHome,
    faUser,
    faEnvelope,
    faSuitcase,
    faBars,
    faClose,
} from '@fortawesome/free-solid-svg-icons';


const Sidebar = () => {
    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={LogoL} alt="logo"></img>
            </Link>
            <nav className=''>
                <NavLink
                    exact="true"
                    activeclassname="active"
                    to="/">
                    <FontAwesomeIcon icon={faHome} color="#8EE3EF"/>
                </NavLink>
                <NavLink
                    activeclassname="active"
                    className="about-link"
                    to="/about">
                    <FontAwesomeIcon icon={faUser} color="#8EE3EF"/>
                </NavLink>
                <NavLink
                    activeclassname="active"
                    className="work-link"
                    to="/work">
                    <FontAwesomeIcon icon={faSuitcase} color="#8EE3EF"/>
                </NavLink>
                <NavLink
                    activeclassname="active"
                    className="contact-link"
                    to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#8EE3EF"/>
                </NavLink>
            </nav>
        </div>
    )
}

export default Sidebar;