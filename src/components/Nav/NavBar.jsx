import React from 'react'
import CartWidget from './CartWidget';
import Logo from './Logo';
import MenuDropDown from './MenuDropDown';
import MenuItem from './MenuItem';
import { StyledMenu, StyledNavBar, StyledNavContainer} from '../Styled/StyledNavBar.styled';



const NavBar = ()=>{
    return (
    <StyledNavBar>
        <StyledNavContainer>
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
        </StyledNavContainer>
    </StyledNavBar>
  )
}


export default NavBar