import { useState, useEffect } from 'react'
import './contactUs.css';
import { ReactComponent as FacebookLogo } from '../../Assets/Icons/facebook.svg';
import { ReactComponent as LinkedInLogo } from '../../Assets/Icons/linkedIn.svg';
import { ReactComponent as YoutubeLogo } from '../../Assets/Icons/youtube.svg';
import { ReactComponent as LetterLogo } from '../../Assets/Icons/letterIcon.svg'
import { ReactComponent as LocationPinLogo } from '../../Assets/Icons/locationPin.svg'
import { ReactComponent as SmartPhoneLogo } from '../../Assets/Icons/smartphone.svg'
import { ReactComponent as InstagramLogo } from '../../Assets/Icons/instaiconmobile.svg'
function ContactUs() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const [userData, setUserData] =
        useState({
            username: "",
            Email: "",
            subject: "",
            message: ""
        });
    let name, value;
    const postUserData = (event) => {
        name = event.target.name;
        value = event.target.value;
        setUserData({ ...userData, [name]: value });
    }
    //connecting with firebase
    const submitData = async (event) => {
        event.preventDefault();
        const {
            username, Email, subject, message
        } = userData;
        if (username && Email && subject && message) {
            const res = fetch(
                "https://reactfirebasewebsite-16dfe-default-rtdb.firebaseio.com/userDataRecords.json"
                , {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",

                    },
                    body: JSON.stringify({
                        username, Email, subject, message
                    }),
                }
            );
            if (res) {
                setUserData({
                    username: "",
                    Email: "",
                    subject: "",
                    message: ""
                });
                alert("WE WILL REACH OUT TO YOU SOON!")
            }
            else {
                alert("Please fill the form");
            }
        }


    }
    return (
        <div className='main-container'>
            <div className="heading-container">
                <div className="heading">
                    <h3 id='contact-us-wrapper'><span id='contact-us-text'>Contact Us</span></h3>
                </div>
            </div>
            <div className="icons-container">
                <div className="icons instagram">
                    <a
                        href="https://www.instagram.com/samar.nitrr/?hl=en"
                    >
                        <InstagramLogo style={{ height: '4.3em', width: '140%', margin: 0, padding: 0 }}></InstagramLogo>
                    </a>
                </div>

                <div className="icons facebook">
                    <a
                        href="https://www.facebook.com/shaurya.nitrr/"
                    >
                        <FacebookLogo style={{ height: '4em', width: '100%', margin: 0, padding: 0 }}></FacebookLogo>
                    </a>
                </div>
                <div className="icons linkedin">
                    <a
                        href="https://www.linkedin.com/in/team-shaurya-nit-raipur-096122120/?originalSubdomain=in"
                    >
                        <LinkedInLogo style={{ height: '4em', width: '100%', margin: 0, padding: 0 }}></LinkedInLogo>
                    </a>
                </div>
                <div className="icons youtube">

                    <a
                        href="https://www.youtube.com/@shauryanitraipur1818"
                    >
                        <YoutubeLogo
                            style={{ height: '4rem', width: '100%', margin: 0, padding: 0 }}></YoutubeLogo>
                    </a>
                </div>

            </div>
            <div className="find-us">
                <div className="heading">
                    <h3>FIND US</h3>
                </div>
            </div>
            <div className="message-us find-us">
                <div className="heading">
                    <h3>MESSAGE US</h3>
                </div>
            </div>
            {/* DESKTOP CODE */}
            <div className="form-map-container">
                <div className="map-image">
                    <div className="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.549083148078!2d81.60284041478289!3d21.24972218587908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dde213f66723%3A0x21543965c50c43c7!2sNational%20Institute%20of%20Technology(NIT)%2C%20Raipur!5e0!3m2!1sen!2sin!4v1673606841967!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div className="form-container">
                    <div className="form">
                        <div className="contact-form">
                            <form
                                action="https://formspree.io/f/xgedgjkr"
                                method="POST"
                                className="contact-inputs">
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="username"
                                    autoComplete="off"
                                    required
                                />

                                <input
                                    type="email"
                                    name="Email"
                                    placeholder="Email"
                                    autoComplete="off"
                                    required
                                />
                                <input
                                    type="text"
                                    name="Subject"
                                    placeholder="Subject"
                                    autoComplete="off"
                                    required
                                />

                                <textarea
                                    name="message"
                                    cols="30"
                                    rows="6"
                                    placeholder="Message"
                                    autoComplete="off"
                                    required></textarea>

                                <button className="send-button" role="button"><span class="text">Send</span></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="form-map-container-mobile">
                <div className="form-container">
                    <div className="form">
                        <div className="contact-form">
                            <form
                                action="https://formspree.io/f/xgedgjkr"
                                method="POST"
                                className="contact-inputs">
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="username"

                                    autoComplete="off"
                                    required
                                    value={userData.username} onChange={postUserData}
                                />

                                <input
                                    type="email"
                                    name="Email"
                                    placeholder="Email"

                                    autoComplete="off"
                                    required
                                    value={userData.Email} onChange={postUserData}
                                />
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Subject"

                                    autoComplete="off"
                                    required
                                    value={userData.subject} onChange={postUserData}
                                />

                                <textarea
                                    name="message"
                                    cols="30"
                                    rows="6"
                                    placeholder="Message"

                                    autoComplete="off"
                                    required
                                    value={userData.message} onChange={postUserData}></textarea>

                                <button className='send-button' onClick={submitData}>SEND</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="find-us">
                    <div className="heading">
                        <h3>FIND US</h3>
                    </div>
                </div>
                <div className="map-image">
                    <div className="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.549083148078!2d81.60284041478289!3d21.24972218587908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dde213f66723%3A0x21543965c50c43c7!2sNational%20Institute%20of%20Technology(NIT)%2C%20Raipur!5e0!3m2!1sen!2sin!4v1673606841967!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
            <div className="mobile-footer">
                <div className="mobile-footer-links-logo">
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
                            <SmartPhoneLogo />
                        </div>
                        <div className="contact-links-text-div" >
                            <p>+91 70001 79871</p>
                        </div>
                    </div>
                    <div className="footer-contact-links">
                        <div className="contact-links-logo-div">
                            <LocationPinLogo />
                        </div>
                        <div className="contact-links-text-div" >
                            <p>Raipur, Chhattisgarh, India</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ContactUs