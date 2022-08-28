import React from 'react'
import styled from "styled-components";
import Container from './Container';
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

            <a href="../index.html">
                <div className="logo">
                    <img src="../assets/icons8-arduino.svg" alt="logoarduino"></img>
                    <h1 className="titulo">Kloi<span className="bold">Arduino</span></h1>
                </div>
            </a>
            <Menu>
                    <li className="nav_item"><a href="/#"><img className="flecha" src="../assets/right-arrow-svgrepo-com.svg" alt="flecha"></img> Tienda</a>
                    <MenuDropDown>
                            <MenuItem className="sub_nav_item"><a href="./placas.html">Placas</a></MenuItem>
                            <MenuItem className="sub_nav_item"><a href="./sensores.html">Sensores</a></MenuItem>
                    </MenuDropDown>
                    </li>
                    <MenuItem content={<img src="D:\ESCRITORIO\EntregasGithubReact\src\assets\cart.svg" alt="iconoCarrito"></img>} URL={"/#"} ></MenuItem>
                    <MenuItem content={"Nosotros"} URL="/#"></MenuItem>
                    <MenuItem content="contatco" URL="/#"></MenuItem>
            </Menu>
        </Container>
    </StyledNavBar>
  )
}


export default NavBar