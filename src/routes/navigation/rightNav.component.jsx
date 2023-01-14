import {useContext} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { NavbarContext } from '../../contexts/navbar.context';

const Ul = styled.div`
    align-items: flex-end;
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  padding: 0px 40px;
    justify-content: space-around;
  @media (max-width: 768px) {
      padding: 0px;
    margin-top: 0px;
    flex-flow: column nowrap;
    background-color:#E5A022;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    top: 0;
    left: 0;
    height: 100vh;
    width: 300px;
    transition: transform 0.3s ease-in-out;
    border-radius: 0px 70px 70px 0px;
  }
`;

const NavLink = styled(Link)`
    font-weight:800;
    color: #FFFFFF;
    text-decoration: none;
    font-size: 18px;
`;

const NavLinkDiv = styled.div`
    height: 60%;
    width: 10%;
    text-align: center;
    border-radius: 30px 30px 0px 0px;
    padding-top: 14px;
  @media (max-width: 768px) {
    width: 100%;
    border-radius: 0px 30px 30px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 0px;
  }
`

const NavLinkContainer = styled.div`
align-items: flex-end;
display: flex;
flex-flow: row nowrap;
width: 100%;
height: 100%;
padding: 0px 40px;
justify-content: space-around;
@media (max-width: 768px) {
    height: 60%;
      padding: 0px;
    margin-top: 0px;
    flex-flow: column nowrap;
  }
`

const RightNav = ({ open }) => {
    const { activeLink, setActiveLink } = useContext(NavbarContext)
    return (
        <Ul open={open}>
            <NavLinkContainer>
            <NavLinkDiv
                style={activeLink === 0 ? { background: 'red' } : {}}
            >
                <NavLink
                    to = '/'
                    onClick={() => { setActiveLink(0) }}
                >
                    Home
                </NavLink>
            </NavLinkDiv>
            <NavLinkDiv
                style={activeLink === 1 ? { background: 'red' } : {}}
            >
                <NavLink
                    to='/event'
                    onClick={() => { setActiveLink(1) }}
                >
                    Event
                </NavLink>
            </NavLinkDiv>
            <NavLinkDiv
                style={activeLink === 2 ? { background: 'red' } : {}}
                >
                <NavLink
                    to='/schedule'
                    onClick={() => { setActiveLink(2) }}
                >
                    Schedule
                </NavLink>
            </NavLinkDiv>
            <NavLinkDiv
                style={activeLink === 3 ? { background: 'red' } : {}}
                >
                <NavLink
                    to='/sponsors'
                    onClick={() => { setActiveLink(3) }}
                >
                Sponsors
                </NavLink>
            </NavLinkDiv>
            <NavLinkDiv
                style={activeLink === 4 ? { background: 'red' } : {}}
                >
                <NavLink
                    to='/gallery'
                    onClick={() => { setActiveLink(4) }}
                >
                    Gallery
                </NavLink>
            </NavLinkDiv>
            <NavLinkDiv
                    style={activeLink === 5 ? { background: 'red' } : {}}
                >
                <NavLink
                    to='/ourTeam'
                    onClick={() => { setActiveLink(5) }}
                >
                    Our Team
                </NavLink>
            </NavLinkDiv>
            <NavLinkDiv
                    style={activeLink === 6 ? { background: 'red' } : {}}
                >
                <NavLink
                    to='/contactUs'
                    onClick={() => { setActiveLink(6) }}
                >
                    Contact Us
                </NavLink>
            </NavLinkDiv>
            <NavLinkDiv
                    style={activeLink === 7 ? { background: 'red' } : {}}
                >
                <NavLink
                    to='/aboutUs'
                    onClick={() => { setActiveLink(7) }}
                >
                    About Us
                </NavLink>
                    </NavLinkDiv>
            </NavLinkContainer>
        </Ul>
  )
}

export default RightNav