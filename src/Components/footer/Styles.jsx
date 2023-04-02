import styled from "styled-components";

export const FooterBox = styled.div`
  width: 1440px;
  height: 479px;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 49px;
  gap: 30px;
  @media (max-width: 360px) {
    width: 360px;
    height: 832px;
    margin: 0;
    justify-content: flex-start;
    gap: 3px;
  }
`;
export const FooterLogo = styled.div`
  font-family: "Inter" sans-serif;
  font-size: 36px;
  font-weight: 800;
  line-height: 71px;
  letter-spacing: 0em;
  text-align: left;
  padding-top: 29px;
  width: 181px;
  height: 44px;
  color: white;
  @media (max-width: 360px) {
    padding-top: 6px;
    padding-left: 33px;
  }
`;
export const FooterBorder = styled.div`
  border: 1px solid #ffffff;
  width: 1280px;
  margin-top: 29px;
  @media (max-width: 360px) {
    width: 320px;
  }
`;
export const FooterNavBar = styled.div`
  width: 1280px;
  cursor: pointer;
  height: 244px;
  display: flex;
  gap: 60px;
  padding-left: 40px;
  @media (max-width: 360px) {
    gap: 31px;
    width: 320px;
    padding: 0;
    flex-direction: column;
  }
`;
export const Reach = styled.div`
  width: 471px;
  height: 190px;
  display: flex;
  color: white;
  flex-direction: row;
  font-family: "Poppins";
  font-size: 18px;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  gap: 42px;
  @media (max-width: 360px) {
    font-family: "Poppins";
    font-size: 16px;
    font-weight: 600;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: left;
    display: flex;
    flex-direction: row;
    width: 320px;
    height: 261px;
    gap:95px;
    padding-top: 25px;
  }
`;
export const FooterTextStyle = styled.div`
  font-family: "Poppins";
  font-size: 18px;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: 0.02em;
  text-align: left;
  @media (max-width: 360px) {
    font-family: "Poppins";
    font-size: 16px;
    font-weight: 600;
    line-height: 26px;
    text-align: left;
    width:143px;
    height: 261px;
  }
`;

export const NavBox = styled.div`
  width: 481px;
  height: 214px;
  display: flex;
  gap: 60px;
  @media (max-width: 360px) {
    width: 320px;
    height: 178px;
    margin: 0;
    display: flex;

    gap: 77px;
  }
`;
export const Company = styled.div`
  height: 166px;
  width: 92px;
  color: white;
  display: flex;
  flex-direction: column;
  font-family: "Poppins";
  font-size: 18px;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  gap: 21px;
  @media (max-width: 360px) {
    font-family: "Poppins";
    font-size: 16px;
    font-weight: 600;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: left;
    gap: 19px;
    width:82px;
    height:140px;
  }
`;
export const Legal = styled.div`
  height: 214px;
  width: 136px;
  color: white;
  display: flex;
  flex-direction: column;
  font-family: "Poppins";
  font-size: 18px;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  gap: 21px;
  @media (max-width: 360px) {
    gap: 18px;
    width: 147px;
    height: 178px;
  }
`;
export const QuickLinks = styled.div`
  height: 166px;
  width: 141px;
  color: white;
  display: flex;
  flex-direction: column;
  font-family: "Poppins";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;

  gap: 21px;
  @media (max-width: 360px) {
    gap: 18px;
    width: 147px;
    height: 178px;
    font-family: "Poppins";
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    width: 100px;
    height: 140px;
  }
`;
export const FooterText = styled.div`
  font-family: "Poppins";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  @media (max-width: 360px) {
    font-size: 12px;
    line-height: 18px;
    padding-top: 1px;
  }
`;

export const NewsLetter = styled.div`
  background: #131313;
  height: 184px;
  width: 400px;
  border-radius: 10px;
  color: white;
  font-family: "Poppins";
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.01em;
  text-align: left;
  gap: 30px;
  margin-top: -12px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media (max-width: 360px) {
        gap: 21px;
    width: 320px;
    height: 175px;
    margin-top: 9px;
  }
`;
export const FooterButton = styled.button`
  height: 39px;
  width: 105px;
  background: #000000;
  border: none;
  color: white;
  font-family: "Poppins";
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: center;
`;
export const FooterHelpText = styled.div`
  font-family: "Roboto";
  width: 255px;
  letter-spacing: 0.02em;
  font-size: 13px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  color: white;
  opacity: 0.5;
  padding: 22px 0px 20px 15px;
  width: 262px;
  letter-spacing: 0.02em;
  @media (max-width: 360px) {
  padding:0px 0px 0px 15px;


  }
`;
export const FooterInputBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-bottom: -33px;
  .css-e4w4as-MuiFormLabel-root-MuiInputLabel-root {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 8px;
    color: #616161;
  }
  @media (max-width: 360px) {
    margin: 0;
  justify-content: normal;
    padding-top: 2px;
    padding-left: 13px;
  }
`;
export const FooterJON = styled.div`
 font-family: 'Poppins';
font-size: 16px;
font-weight: 600;
line-height: 26px;
text-align: left;
letter-spacing: 0.08em;
padding-left: 16px;
  @media (max-width: 360px) {
  
    padding-top: 16px;
    letter-spacing: 0em;
  }
`;

function handleMobile() {
  if (Reach.matches) {
    this.setState({ isMobile: true });
  } else {
  }
}

handleMobile();
