import styled from "styled-components";
import React from "react"; 
export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 41px;
  @media(max-width:360px){
    width:100%;
    height:81px;
    padding-top:0px;
  justify-content: space-between;
  background: #F5F5F5;

  }

`;
export const StyledNav = styled.div`
display:none;
width:18px;
height:12px;
@media(max-width:360px){
  display:block;
  padding-right: 23px;
  padding-bottom: 8px;

}
`
export const StyledLogo = styled.div`
 font-family: 'Inter' sans-serif;
 font-size: 24px;
 font-weight: 800;
 line-height: 29px;
 letter-spacing: 0em;
 text-align: left;
 
  width: 121px;
  padding-right: 237px;
  @media(max-width:360px){
    font-size:18px;
    padding-right:0px;
  padding-left: 20px;

  }
`;
 export const StyledNavigation = styled.div`
  width: 677px;
  font-family:'Roboto';
  font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
  gap: 47px;
  display: flex;
  align-items: center;
  padding-right:4px;
  @media(max-width:360px){
    display:none;

  }
`;
export  const StyledIcons = styled.div`
  width: 90px;
  height: 22px;
  display: flex;
  justify-content: space-between;
  padding-left:17px;
`; 
export const StyledText = styled.span`
font-family: 'Roboto';
font-size: 16px;
font-weight: 400;
line-height: 19px;
letter-spacing: 0em;
display: flex;
align-items: center;
cursor:pointer;
${(props) => {
  if (props.type === "change"){
   return`
      margin-left:-10px;
  `;
}
    }}
    `;