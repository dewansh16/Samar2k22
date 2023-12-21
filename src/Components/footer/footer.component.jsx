import {useContext} from 'react'
import { Link } from 'react-router-dom';
import './footer.component.css'
import styled from 'styled-components';

import { NavbarContext } from '../../contexts/navbar.context';

import {ReactComponent as InstaLogo} from '../../Assets/Icons/instagram1.svg'
import {ReactComponent as FacebookLogo} from '../../Assets/Icons/facebook1.svg'
import {ReactComponent as LinkedInLogo} from '../../Assets/Icons/linkedin1.svg'
import {ReactComponent as LetterLogo} from '../../Assets/Icons/email1.svg'
import {ReactComponent as LocationPinLogo} from '../../Assets/Icons/location1.svg'
import {ReactComponent as SmartPhoneLogo} from '../../Assets/Icons/call1.svg'
import {ReactComponent as YoutubeLogo} from '../../Assets/Icons/youtube.svg'
import {ReactComponent as GithubLogo} from '../../Assets/Icons/github1.svg'
import {ReactComponent as TwitterLogo} from '../../Assets/Icons/twitter1.svg'


const NavLink = styled(Link)`
    font-weight:800;
    color: #FFFFFF;
    text-decoration: none;
    font-size: 18px;
    padding-bottom: 12px;
`;

function Footer() {
    const {setActiveLink } = useContext(NavbarContext)

    return (
        <div className='footer'>
            <div className="footer-content-div">
                <div className="footer-icon-div">
                    <div className="footer-icon-inner-div">
                        <div className="footer-logo-container">
                            <a
                                href="https://www.instagram.com/samar.nitrr/?hl=en"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <InstaLogo />
                            </a>
                        </div>
                        <div className="footer-logo-container">
                            <a
                                href="https://www.facebook.com/shaurya.nitrr/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FacebookLogo/>
                            </a>
                        </div>
                        <div className="footer-logo-container">
                            <a
                                href="https://www.linkedin.com/in/team-shaurya-nit-raipur-096122120/?originalSubdomain=in"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <LinkedInLogo/>
                            </a>
                        </div>
                        <div className="footer-logo-container">
                            <a
                                href="https://www.linkedin.com/in/team-shaurya-nit-raipur-096122120/?originalSubdomain=in"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <LetterLogo/>
                            </a>
                        </div>
                        <div className="footer-logo-container">
                            <a
                                href="https://www.google.com/maps/place/National+Institute+of+Technology(NIT),+Raipur/@21.2497222,81.6050291,15z/data=!4m6!3m5!1s0x3a28dde213f66723:0x21543965c50c43c7!8m2!3d21.2497222!4d81.6050291!16zL20vMGNqeXFk?entry=ttu"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <LocationPinLogo/>
                            </a>
                        </div>
                        <div className="footer-logo-container">
                            <a
                                href="https://www.linkedin.com/in/team-shaurya-nit-raipur-096122120/?originalSubdomain=in"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <SmartPhoneLogo/>
                            </a>
                        </div>
                        <div className="footer-logo-container">
                            <a
                                href="https://www.youtube.com/@shauryanitraipur1818"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <YoutubeLogo/>
                            </a>
                        </div>
                        <div className="footer-logo-container">
                            <a
                                href="https://github.com/dewansh16/Samar2k22"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <GithubLogo/>
                            </a>
                        </div>
                        <div className="footer-logo-container">
                            <a
                                href="https://github.com/dewansh16/Samar2k22"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <TwitterLogo/>
                            </a>
                        </div>
                    </div>
                </div>
                {/* <div className="footer-links-div">
                    <div className="footer-links-inner-div">
                        <NavLink
                            onClick={() => {
                                setActiveLink(5)
                            }}
                            to='/ourTeam'
                        >
                            Our Team
                        </NavLink>
                        <NavLink
                            onClick={() => {
                                setActiveLink(6)
                            }}
                                to='/contactUs'
                        >
                            Contact Us
                        </NavLink>
                        <NavLink
                            onClick={() => {
                                setActiveLink(7)
                            }}
                                to='/aboutUs'
                        >
                            About Us
                        </NavLink>
                    </div>
                </div> */}
                {/* <div className="footer-social-links-div">
                    <div className="footer-social-links-inner-div">
                        <div className="footer-contact-links">
                            <div className="contact-links-logo-div">
                                <LetterLogo />
                            </div>
                            <div className="contact-links-text-div" >
                                <p>Shaurya@nitrr.ac.in</p>
                            </div>
                        </div>
                        <div className="footer-contact-links">
                            <div className="contact-links-logo-div">
                                <SmartPhoneLogo/>
                            </div>
                            <div className="contact-links-text-div" >
                                <p>+91 70001 79871</p>
                            </div>
                        </div>
                        <div className="footer-contact-links">
                            <div className="contact-links-logo-div">
                                <LocationPinLogo/>
                            </div>
                            <div className="contact-links-text-div" >
                                <p>NIT Raipur, Chhattisgarh, India</p>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
            <div className="copyright-div">
                <p>Copyright © 2023 Shaurya. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer
