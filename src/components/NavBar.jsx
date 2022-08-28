import React from 'react'
import styled from "styled-components";
import CartWidget from './CartWidget';
import Container from './Container';
import Logo from './Logo';
import Menu from './Menu';
import MenuDropDown from './MenuDropDown';
import MenuItem from './MenuItem';

const StyledNavBar = styled.nav`
background-color: #066a96;
height: 4rem;
`


const NavBar = ()=>{
    return (
    <StyledNavBar>
        <Container>
            <a style={{textDecoration:'none'}} href="../index.html">
                <Logo/>
            </a>
            <Menu>
                    <MenuDropDown content="tienda">
                            <MenuItem content="placas" URL={"/#"}><a href="./placas.html">Placas</a></MenuItem>
                            <MenuItem content="sensores" URL={"/#"}><a href="./sensores.html">Sensores</a></MenuItem>
                    </MenuDropDown>
                    <CartWidget  URL={"/#"} ></CartWidget>
                    <MenuItem content={"Nosotros"} URL="/#"></MenuItem>
                    <MenuItem content="contatco" URL="/#"></MenuItem>
            </Menu>
        </Container>
    </StyledNavBar>
  )
}


export default NavBar