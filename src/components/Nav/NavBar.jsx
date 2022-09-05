import React from 'react'
import CartWidget from './CartWidget';
import Container from '../Container';
import Logo from './Logo';
import MenuDropDown from './MenuDropDown';
import MenuItem from './MenuItem';
import { StyledMenu, StyledNavBar } from '../Styled/StyledNavBar.styled';



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