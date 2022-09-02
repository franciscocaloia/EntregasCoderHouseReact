import React from 'react'
import styled from "styled-components";
import CartWidget from './CartWidget';
import Container from './Container';
import Logo from './Logo';
import MenuDropDown from './MenuDropDown';
import MenuItem from './MenuItem';

const StyledNavBar = styled.nav`
    background-color: #066a96;
    height: 4rem;
`
const StyledMenu = styled.ul`
    height:100%;
    width: 36rem;
    display: flex;
    align-items: center;
    list-style-type: none;
    margin:0;
    `


const NavBar = ()=>{
    return (
    <StyledNavBar>
        <Container>
            <a style={{textDecoration:'none'}} href="../index.html">
                <Logo/>
            </a>
            <StyledMenu>
                    <MenuDropDown content="tienda">
                            <MenuItem content="placas" URL={"/#"}><a href="./placas.html">Placas</a></MenuItem>
                            <MenuItem content="sensores" URL={"/#"}><a href="./sensores.html">Sensores</a></MenuItem>
                    </MenuDropDown>
                    <CartWidget  URL={"/#"} ></CartWidget>
                    <MenuItem content={"Nosotros"} URL="/#"></MenuItem>
                    <MenuItem content="contatco" URL="/#"></MenuItem>
            </StyledMenu>
        </Container>
    </StyledNavBar>
  )
}


export default NavBar