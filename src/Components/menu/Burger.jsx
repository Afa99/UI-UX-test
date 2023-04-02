import React, { useState } from "react";
import { StyledLogo, StyledText,StyledIcons } from "../header/Styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Burger, Menu,HoverMenu, HoverNavs, MenuStyledText,} from "./Styles";


function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="burger-menu">
      <Burger isOpen={isOpen} onClick={handleMenuClick}>
        <div className="burger-line"></div>
        <div className="burger-line"></div>
        <div className="burger-line"></div>
      </Burger>
      <Menu className={isOpen ? "open" : ""}>
        <HoverMenu>
          <HoverNavs>
            <StyledLogo style={{ color: "white" }}>Logo Here</StyledLogo>
            <Burger
              isOpen={isOpen}
              onClick={handleMenuClick}
              style={{
                cursor: "pointer",
                position: "absolute",
                right: "25px",
                width: "24px",
                height: "24px",
              }}
            >
              <div
                className="burger-line"
                style={{ backgroundColor: "white" }}
              ></div>
              <div
                className="burger-line"
                style={{ backgroundColor: "white" }}
              ></div>
              <div className="burger-line" style={{ display: "none" }}></div>
            </Burger>
          </HoverNavs>
          <MenuStyledText>
            <StyledText style={{ color: "white" }}>Home</StyledText>
            <StyledText style={{ color: "white" }}>
              Features
              <KeyboardArrowDownIcon
                style={{ paddingTop: "2px", paddingLeft: "2px" }}
              />
            </StyledText>
            <StyledText style={{ color: "white" }}>Blog</StyledText>
            <StyledText style={{ color: "white" }}>Shop</StyledText>
            <StyledText style={{ color: "white" }}>About</StyledText>
            <StyledText style={{ color: "white",fontSize:"14px",fontWeight:"700" }}>Contact</StyledText>
          </MenuStyledText>
          <StyledIcons style={{ color: "white", paddingLeft: "115px" }}>
            <AccountCircleIcon
              style={{ cursor: "pointer", opacity: "75%", fontSize:"31px",paddingTop:"25px"}}
              color="white"
            />
            <ShoppingCartIcon
              style={{ cursor: "pointer", opacity: "75%", fontSize:"31px",paddingTop:"25px" }}
              color="black"
            />
          </StyledIcons>
        </HoverMenu>
      </Menu>   
    </div>
  );
}

export default BurgerMenu;
