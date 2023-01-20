import { Outlet} from "react-router-dom"
import React, { useState,useEffect } from 'react';
import styled from 'styled-components';
import Burger from './burger.component';
import RightNav from "./rightNav.component";
import Footer from "../../Components/footer/footer.component";
import './navigation.component.css';
import LandingLoader from "../../Components/animationPage/landingLoader.component";

const Nav = styled.nav`
  height: 90px;
/* position:fixed;  */
  top:0;
  left:0;
  width:100%;
  /* border: 2px solid black; */
  margin-top:0;
  z-index:100;
  /* background: rgb(240,248,255,0.2) 0% 0% no-repeat padding-box; */
  /* box-shadow: 0 0.5px 15px rgb(240,248,255,0.5); */
  backdrop-filter: blur(6.5px);
  -webkit-backdrop-filter: blur(6.5px);
  display: flex;
  justify-content: space-between;
  @media (max-width: 800px) {
      position: absolute;
      backdrop-filter:none;
      background:none;
      border:none;
      box-shadow:none;
  }
`
const NavDiv = styled.div`
    margin-bottom: 50px;
    @media (max-width: 800px) {
    margin: 0px;
  }
`
const BodyDiv = styled.div`
display: flex;
flex-direction: column;
min-height: 100%;
width: 100%;
`
function Navigation() {
    const [open, setOpen] = useState(false);
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        },4000)
    },[])
    return (
        <>
            {isLoading ?<LandingLoader isLoading={isLoading} />:
                <BodyDiv>
                    <NavDiv>
                        <Burger open={open} setOpen={setOpen}/>
                        <Nav>
                            <RightNav open={open} setOpen={setOpen}/>
                        </Nav>
                    </NavDiv>
                    <Outlet />
                    <Footer/>
                </BodyDiv>
            }
        </>
    )
}
export default Navigation