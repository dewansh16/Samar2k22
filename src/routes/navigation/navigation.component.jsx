import { Outlet} from "react-router-dom"
import React, { useState,useEffect } from 'react';
import styled from 'styled-components';
import Burger from './burger.component';
import RightNav from "./rightNav.component";
import Footer from "../../Components/footer/footer.component";
import './navigation.component.css';

import SamarImg from "../../Assets/Images/samar21 (1).png";

const Nav = styled.nav`
  height: 70px;
  border: 2px solid black;
  border-radius: 50px;
  background: #E5A022 0% 0% no-repeat padding-box;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
      position: absolute;
  }
`

const NavDiv = styled.div`
    margin: 50px;

    @media (max-width: 768px) {
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
        },2000)
    },[])

    return (
        <>
            <div style={isLoading?{}:{display:'none'}} className="animationDiv">
                <div>
                    <img
                        alt="samarImage"
                        src={SamarImg}
                    />
                </div>
            </div>
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
        </>
    )
}

export default Navigation
