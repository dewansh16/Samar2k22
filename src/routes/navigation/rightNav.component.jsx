import { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../../Assets/Images/home_logo.png";
import { NavbarContext } from "../../contexts/navbar.context";
// import { hover } from "@testing-library/user-event/dist/hover";

const Ul = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  justify-content: space-around;
  @media (max-width: 800px) {
    padding: 0px;
    margin-top: 0px;
    flex-flow: column nowrap;
    background: rgb(240,248,255,0.2) 0% 0% no-repeat padding-box;
    box-shadow: 0 0.5px 15px rgb(240,248,255,0.5);
    backdrop-filter: blur(6.5px);
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0%)" : "translateX(108%)")};
    top: 0;
   right: 0;
   z-index:99;
    height: 100vh;
    width: 300px;
    transition: transform 0.3s ease-in-out;
    border-radius: 70px 0px 0px 70px;
  }
`;

const NavLink = styled(Link)`
  font-weight: 800;
  color: #ffffff;
  text-decoration: none;
  font-size: 18px;
`;
const NavLinkDiv = styled.div`
  text-align: center;
  border-radius: 10px;
  margin: 7px 0;
  padding: 7px 10px;
  a:hover{
    color:#e5a022;
  }
  @media (max-width: 800px) {
    width: 100%;
    border-radius: 0px 30px 30px 0px;
    display: flex;
    justify-content: center;
    border-radius: 10px;
    align-items: center;
  }
`;
const NavLinkContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding: 0px 10px;
  width: 90%;
  justify-content: space-around;
  @media (max-width: 800px) {
    height: 60%;
    padding: 0px;
    margin-top: 0px;
    flex-flow: column nowrap;
  
  }
`;

const RightNav = ({ open,setOpen,hover }) => {
  const { activeLink, setActiveLink } = useContext(NavbarContext);
  return (
    <Ul open={open}>
      <NavLinkContainer>
        <NavLinkDiv>
          <NavLink
            to="/"
            onClick={() => {
              setActiveLink(0);
              setOpen(false);
            }}
          >
          <img src={logo} alt="Samar logo" height="80px" width="auto" margin-left="10px"/>
          </NavLink>
        </NavLinkDiv>
        <NavLinkDiv style={activeLink === 1 ? { background: "red" } : {}} >
          <NavLink
            to="/event"
            onClick={() => {
              setActiveLink(1);
              setOpen(false);
            }}

          >
            Event
          </NavLink>
        </NavLinkDiv>
        <NavLinkDiv style={activeLink === 2 ? { background: "red" } : {}}>
          <NavLink
            to="/schedule"
            onClick={() => {
              setActiveLink(2);
              setOpen(false);
            }}
          >
            Schedule
          </NavLink>
        </NavLinkDiv>
        <NavLinkDiv style={activeLink === 3 ? { background: "red" } : {}}>
          <NavLink
            to="/sponsors"
            onClick={() => {
              setActiveLink(3);
              setOpen(false);
            }}
          >
            Sponsors
          </NavLink>
        </NavLinkDiv>
        <NavLinkDiv style={activeLink === 4 ? { background: "red" } : {}}>
          <NavLink
            to="/gallery"
            onClick={() => {
              setActiveLink(4);
              setOpen(false);
            }}
          >
            Gallery
          </NavLink>
        </NavLinkDiv>
        <NavLinkDiv style={activeLink === 5 ? { background: "red" } : {}}>
          <NavLink
            to="/ourTeam"
            onClick={() => {
              setActiveLink(5);
              setOpen(false);
            }}
          >
            Our Team
          </NavLink>
        </NavLinkDiv>
        <NavLinkDiv style={activeLink === 6 ? { background: "red" } : {}}>
          <NavLink
            to="/contactUs"
            onClick={() => {
              setActiveLink(6);
              setOpen(false);
            }}
          >
            Contact Us
          </NavLink>
        </NavLinkDiv>
        <NavLinkDiv style={activeLink === 7 ? { background: "red" } : {}}>
          <NavLink
            to="/aboutUs"
            onClick={() => {
              setActiveLink(7);
              setOpen(false);
            }}
          >
            About Us
          </NavLink>
        </NavLinkDiv>
        <NavLinkDiv style={activeLink === 8 ? { background: "red" } : {}}>
          <NavLink
            to="/Merchandise"
            onClick={() => {
              setActiveLink(8);
              setOpen(false);
            }}
          >
            Merchandise
          </NavLink>
        </NavLinkDiv>
      </NavLinkContainer>
    </Ul>
  );
};
export default RightNav;