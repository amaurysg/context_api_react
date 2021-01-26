import React from 'react'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'

const Header = () => {
  return (
    <div>
       <HeaderStyled>
          <TitleStyled>Blog Personal</TitleStyled>
          <MenuStyled>
           <NavLink   to="/" exact={true}> Inicio</NavLink>
           <NavLink  to="/blog">Blog</NavLink>
           <NavLink  to="/about">About</NavLink>
          </MenuStyled>
        </HeaderStyled>
    </div>
  )
}

const HeaderStyled = styled.header`
      text-align: center; 
      margin-bottom:40px;

`
const TitleStyled = styled.h1`
   
      margin-bottom:10px;
      font-size: 26px;
      text-transform: uppercase;

`
const MenuStyled = styled.nav`
    a{
        text-decoration:none;
        color: #165168; 
        margin: 0 10px

    }
    a:hover{
      color: green;
    }
    a.active{
      font-weight: bold;
      border-bottom: 2px solid green
    }

`

export default Header
