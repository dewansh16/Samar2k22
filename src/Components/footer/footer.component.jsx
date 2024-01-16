import {useContext} from 'react'
import { Link } from 'react-router-dom';
import './footer.component.css'
import styled from 'styled-components';
import logo1 from "../../Assets/Images/home_logo1.png";
import { NavbarContext } from '../../contexts/navbar.context';
import {ReactComponent as InstaLogo} from '../../Assets/Icons/insta.svg'
import {ReactComponent as FacebookLogo} from '../../Assets/Icons/facebook.svg'
import {ReactComponent as LinkedInLogo} from '../../Assets/Icons/linkedIn.svg'
import {ReactComponent as LetterLogo} from '../../Assets/Icons/letterIcon.svg'
import {ReactComponent as LocationPinLogo} from '../../Assets/Icons/locationPin.svg'
import {ReactComponent as SmartPhoneLogo} from '../../Assets/Icons/smartphone.svg'


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
                <div className="logo_content_div">
                    <div className="logo_name">
                        <img src={logo1} alt="Samar logo" />
                    </div>
                    <div className="logo_data">
                        <p>"The playground of dreams is where playfulness and perseverance shake hands."</p>
                    </div>
                </div>
              
               
                <div className="footer-links-div">
                    <div className="footer-links-inner-div">
                    <h3> Shaurya </h3>
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
                </div>

                <div className="footer-social-links-div">
                    <div className="footer-social-links-inner-div">
                    <h3>Contact</h3>
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
                                <p>Raipur, Chhattisgarh, India</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-icon-div">
                    <div className='link_connect'>
                            <span>Lets Connect</span>
                    </div>
                    <div className="footer-icon-inner-div">
                        <div className="footer-logo-container">
                            <a
                                href="https://www.instagram.com/samar.nitrr/?hl=en"
                            >
                                <InstaLogo />
                            </a>
                        </div>
                        <div className="footer-logo-container">
                            <a
                                href="https://www.facebook.com/shaurya.nitrr/"
                            >
                                <FacebookLogo/>
                            </a>
                        </div>
                        <div className="footer-logo-container">
                            <a
                                href="https://www.linkedin.com/in/team-shaurya-nit-raipur-096122120/?originalSubdomain=in"
                            >
                                <LinkedInLogo/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-div">
                        <NavLink
                            onClick={() => {
                                setActiveLink(6)
                            }}
                                to='/WebDTeam'
                        >
                            {/* Contact Us */}
                            <p>Crafted with code by <span className='text-blue-400'>Team Shaurya !</span></p>
                        </NavLink>
            </div>
        </div>
    )
}

export default Footer