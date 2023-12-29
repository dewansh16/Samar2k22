import { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo1 from "../../Assets/Images/home_logo1.png";
import { NavbarContext } from "../../contexts/navbar.context";
import "./navigation.component.css";
// import { hover } from "@testing-library/user-event/dist/hover";

const Ul = styled.div`
display: flex;
align-items: center;
  flex-flow: row nowrap;
  width: 100%;
  justify-content: space-around;
  @media (max-width: 1000px) {
    padding: 0px;
    margin-top: 0px;
    flex-flow: column nowrap;
    // background: rgb(0 0 0 / 13%) 0% 0% no-repeat padding-box;
    box-shadow: 0 0.5px 15px rgb(52 52 52 / 50%);
    backdrop-filter: blur(6.5px);
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0%)" : "translateX(108%)")};
    top: 0;
   right: 0;
   z-index:99;
    height: 100vh;
    width: 300px;
    transition: transform 0.3s ease-in-out;
    border-radius: 60px 0px 0px 60px;
  }
`;
const NavLink = styled(Link)`
  font-weight: 800;
  color: white;
  text-decoration: none;
  font-size: 18px;
    @media (max-width: 1000px) {
    width: 100%;
    border-radius: 0px 30px 30px 0px;
    display: flex;
    justify-content: center;
    border-radius: 10px;
    align-items: center;
  }
 
`;
const NavLinkDiv = styled.div`
  text-align: center;
  border-radius: 10px;
  min-width: 50px;
  margin: 7px 0;
  padding: 7px 10px;
  tansistion: 0.1s;
  a:hover{
    // color:#E1D9D1;
    color:#3618de;
  }

  .underline {
    position: relative;
  }

  .underline::after {
    content: "";
    position: absolute;
    left: 0px;
    bottom: -10px;
    height: 2px;
    width: 0;
    background-color: white;
    transition: width 0.3s ease;
  }

  .underline:hover::after {
    width: 100%;
  }


  @media (max-width: 1000px) {
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
  flex-shrink:3;
  font-size:100%;
  align-items: center;
  padding: 0px 4%;
  width: 100%;
  justify-content: space-between;
  @media (max-width: 1000px) {
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
          <img src={logo1} className="mar_image" alt="Samar logo" />
          </NavLink>
        </NavLinkDiv>
        <NavLinkDiv  >
          <NavLink
            className="underline"
            style={activeLink === 1 ? { color: "#E1D9D1" } : {}}
            to="/event"
            onClick={() => {
              setActiveLink(1);
              setOpen(false);
            }}
          >
            Event
          </NavLink>
        </NavLinkDiv>
{
        // <NavLinkDiv>
        //   <NavLink
        //     style={activeLink === 2 ? { color: "red" } : {}}
        //     to="/schedule"
        //     onClick={() => {
        //       setActiveLink(2);
        //       setOpen(false);
        //     }}
        //   >
        //     Schedule
        //   </NavLink>
        // </NavLinkDiv>
        }
        <NavLinkDiv>
          <NavLink
          className="underline"
            style={activeLink === 3 ? { color: "#E1D9D1" } : {}}
            to="/sponsors"
            onClick={() => {
              setActiveLink(3);
              setOpen(false);
            }}
          >
            Sponsors
          </NavLink>
        </NavLinkDiv>
        <NavLinkDiv >
          <NavLink
          className="underline"
            style={activeLink === 4 ? { color: "#E1D9D1" } : {}}
            to="/gallery"
            onClick={() => {
              setActiveLink(4);
              setOpen(false);
            }}
          >
            Gallery
          </NavLink>
        </NavLinkDiv>
        <NavLinkDiv>
          <NavLink
          className="underline"
            style={activeLink === 5 ? { color: "#E1D9D1" } : {}}
            to="/ourTeam"
            onClick={() => {
              setActiveLink(5);
              setOpen(false);
            }}
          >
           Team
          </NavLink>
        </NavLinkDiv>
        {/* <NavLinkDiv>
          <NavLink
          className="underline"
            style={activeLink === 6 ? { color: "#E1D9D1" } : {}}
            to="/contactUs"
            onClick={() => {
              setActiveLink(6);
              setOpen(false);
            }}
          >
            Contact
          </NavLink>
        </NavLinkDiv> */}
        <NavLinkDiv>
          <NavLink
          className="underline"
            style={activeLink === 7 ? { color: "#E1D9D1" } : {}}
            to="/aboutUs"
            onClick={() => {
              setActiveLink(7);
              setOpen(false);
            }}
          >
            About
          </NavLink>
        </NavLinkDiv>
        <NavLinkDiv>
          <NavLink
          className="underline"
            style={activeLink === 8 ? { color: "#E1D9D1" } : {}}
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