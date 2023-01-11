import { Outlet } from "react-router-dom"
import React, { Fragment,useState } from 'react';
import styled from 'styled-components';
import Burger from './burger.component';
import RightNav from "./rightNav.component";

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

const BodyDiv = styled.div`
    margin: 50px;

    @media (max-width: 768px) {
    margin: 0px;
  }
`

function Navigation() {
    const [open, setOpen] = useState(false)
    return (
        <Fragment>
            <BodyDiv>
                <Burger open={open} setOpen={setOpen}/>
                
                <Nav>
                    <RightNav open={open} setOpen={setOpen}/>
                </Nav>
                <Outlet/>
            </BodyDiv>
        </Fragment>
    )
}

export default Navigation
