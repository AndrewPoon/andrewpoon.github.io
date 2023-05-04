import './index.scss'
import {Link,NavLink} from 'react-router-dom'
import Logo1 from '../../assets/images/Logo1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome,faFile,faUser,faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin,faGithub,} from '@fortawesome/free-brands-svg-icons'
const Sidebar=()=>(
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={Logo1} alt='logo'/>
        </Link>
        <nav>
            <NavLink exact='true' activeclassname='active' to='/'>
                <FontAwesomeIcon icon={faHome} color='#4d4d4d'/>
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='about-link' to='/about'>
                <FontAwesomeIcon icon={faUser} color='#4d4d4d'/>
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='resume-link'to='/resume'>
                <FontAwesomeIcon icon={faFile} color='#4d4d4d'/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/andrew-poon-1496aa170/'>
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4d'/>
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://github.com/AndrewPoon'>
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4d'/>
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='mailto:andrewpoon44@gmail.com'>
                    <FontAwesomeIcon icon={faEnvelope} color='#4d4d4d'/>
                </a>
            </li>
        </ul>
    </div>

)


export default Sidebar