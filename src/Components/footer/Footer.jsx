import React from "react";
import DataComponent from "../data/Data";
import "@fontsource/roboto/400.css";
import { TextField } from "@mui/material";
import { Company, FooterBorder, FooterButton,FooterBox, FooterHelpText, FooterInputBox, FooterJON, FooterLogo, FooterNavBar, FooterText, Legal, NavBox, NewsLetter, QuickLinks, Reach, FooterTextStyle } from "./Styles";
import styled from "styled-components";

const ReachContainer = styled.div`
`;

export const Footer = ( isFooter,isLegal) => {
  
  return (
    <FooterBox>
      <FooterLogo>Logo Here</FooterLogo>
      <FooterBorder></FooterBorder>
      <FooterNavBar>
     
        <Reach >
          <FooterTextStyle>
            <ReachContainer>Reach us</ReachContainer>
           <DataComponent type="footer" shortText footerLocation isFooter footerMedia footer/>

          </FooterTextStyle>
          <Company>
            <FooterTextStyle>Company</FooterTextStyle>
            <FooterText>About</FooterText>
            <FooterText style={{paddingTop:'3px'}}>Contact</FooterText>
            <FooterText >Blogs</FooterText>
          </Company>
        </Reach>
        <NavBox>
     
          <Legal isLegal={isLegal}>
            <FooterTextStyle>Legal</FooterTextStyle>
            <FooterText>Privacy Policy</FooterText>
            <FooterText style={{paddingTop:'3px'}}>Terms & Services</FooterText>
            <FooterText style={{paddingTop:'3px'}}>Terms of Use</FooterText>
            <FooterText >Refund Policy</FooterText>
          </Legal>
          <QuickLinks>
            <FooterTextStyle>Quick Links</FooterTextStyle>
            <FooterText >Techlabz Keybox</FooterText>
            <FooterText style={{paddingTop:'3px'}}>Downloads</FooterText>
            <FooterText style={{paddingTop:'3px'}}>Forum</FooterText>
          </QuickLinks>
        </NavBox>
        <NewsLetter>
          <FooterJON >
            Join Our Newsletter
          </FooterJON>
          <FooterInputBox>
              <TextField
                id="filled-basic"
                label="Your email address"
                variant="filled"
                style={{ width: 172, height: 40 ,background:"#1E1E1E", borderRadius: 4,    fontFamily: 'Poppins',

                fontWeight: 400,
                fontSize: 11,
                lineHeight: 7,
                color: "#616161"}}
              />
              <FooterButton>Subscribe</FooterButton>
           </FooterInputBox>

          <FooterHelpText>
            * Will send you weekly updates for your better tool management.
          </FooterHelpText>
        </NewsLetter>
      </FooterNavBar>
    </FooterBox>
  );
};
