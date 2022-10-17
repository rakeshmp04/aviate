import '../Navigation/navigation.style.scss';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCircleArrowDown, faRightFromBracket} from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
    return(
        <div  className="navigation-container"> 
           <nav>
            <ul>
                <li className='nav-links'><FontAwesomeIcon icon={faHome}></FontAwesomeIcon> HOME</li>
                <li className='nav-links'><FontAwesomeIcon icon={faUser}></FontAwesomeIcon> PROFILE</li>
                <li className='nav-links active'><FontAwesomeIcon icon={faCircleArrowDown}></FontAwesomeIcon> APPLIED</li>
                <li className='nav-links'><FontAwesomeIcon icon={faRightFromBracket}></FontAwesomeIcon> LOG OUT</li>
            </ul>
           </nav>
        </div>
    )
}

export default Navigation;