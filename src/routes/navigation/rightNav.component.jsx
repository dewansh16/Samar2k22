import {useState} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Ul = styled.div`
    align-items: flex-end;
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  padding: 0px 40px;
    justify-content: space-around;
  @media (max-width: 768px) {
    margin-top: 0px;
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    top: 0;
    left: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
  }
`;

const NavLink = styled(Link)`
height: 60%;
    width: 10%;
    font-weight:800;
    color: #FFFFFF;
    text-decoration: none;
    text-align: center;
    font-size: 18px;
    border-radius: 30px 30px 0px 0px;
    padding-top: 14px;
  @media (max-width: 768px) {
    color: #fff;
  }
`;

const RightNav = ({ open }) => {
    const [activeLink, setActiveLink] = useState(0);
  return (
    <Ul open={open}>
          <NavLink
              to = '/'
              onClick={() => { setActiveLink(0) }}
              style={activeLink === 0 ? { background: 'red' } : {}}
          >
              Home
          </NavLink>
          <NavLink
              to='/event'
              onClick={() => { setActiveLink(1) }}
              style={activeLink === 1 ? { background: 'red' } : {}}
          >
              Event
          </NavLink>
          <NavLink
              to='/schedule'
              onClick={() => { setActiveLink(2) }}
              style={activeLink === 2 ? { background: 'red' } : {}}
          >
              Schedule
          </NavLink>
          <NavLink
              to='/sponsors'
              onClick={() => { setActiveLink(3) }}
              style={activeLink === 3 ? { background: 'red' } : {}}
          >
              Sponsors
          </NavLink>
          <NavLink
              to='/gallery'
              onClick={() => { setActiveLink(4) }}
              style={activeLink === 4 ? { background: 'red' } : {}}
          >
              Gallery
          </NavLink>
          <NavLink
              to='/ourTeam'
              onClick={() => { setActiveLink(5) }}
              style={activeLink === 5 ? { background: 'red' } : {}}
          >
              Our Team
          </NavLink>
          <NavLink
              to='/contactUs'
              onClick={() => { setActiveLink(6) }}
              style={activeLink === 6 ? { background: 'red' } : {}}
          >
              Contact Us
          </NavLink>
          <NavLink
              to='/aboutUs'
              onClick={() => { setActiveLink(7) }}
              style={activeLink === 7 ? { background: 'red' } : {}}
          >
              About Us
          </NavLink>
    </Ul>
  )
}

export default RightNav