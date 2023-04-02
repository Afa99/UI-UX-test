import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import BurgerMenu from "../menu/Burger";
import { StyledHeader, StyledIcons, StyledLogo, StyledNav, StyledNavigation, StyledText } from "./Styles";


export const Header = () => {
  return (
    <StyledHeader>
      <StyledLogo style={{cursor:"pointer"}}>Logo Here</StyledLogo>
      <StyledNav><BurgerMenu/></StyledNav>

      <StyledNavigation>
        <StyledText>Home</StyledText>
        <StyledText >Features <KeyboardArrowDownIcon style={{paddingTop:"2px",paddingLeft:"2px"}}/></StyledText>
        <StyledText type='change'>Blog</StyledText>
        <StyledText>Shop</StyledText>
        <StyledText>About</StyledText>
        <StyledText>Contact</StyledText>
        <StyledIcons >
          <AccountCircleIcon style={{cursor:"pointer"}} color="action"/>
          <ShoppingCartIcon  style={{cursor:"pointer"}}color="action" />
        </StyledIcons>
      </StyledNavigation>

    </StyledHeader>
  );
};
export default Header;
