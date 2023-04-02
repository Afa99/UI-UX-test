import styled from "styled-components";

export const BodyMother = styled.div`
  @media (max-width: 360px) {
    width: 360px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #f5f5f5;
    height: 1202px;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 75px;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 49px;
  @media (max-width: 360px) {
    padding-top: 14px;
    margin-bottom: 0px;
    gap: 10px;
  } ;
`;
export const Title = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
  color: #000000;
  letter-spacing: 0.01em;
  padding-right: 1px;
  @media (max-width: 360px) {
    font-family: 'Poppins';
    font-size: 24px;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: left;
  }
`;
export const SubTitle = styled.div`
  font-family: "Poppins";

  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
  letter-spacing: 0.01em;
  text-align: center;
  color: gray;
  @media (max-width: 360px) {
    font-family: 'Poppins';
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: center;
    width: 184px;
    margin-bottom: 20px;
  }
`;
export const BodyBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1196px;
  height: 667px;
  padding-left: 132px;
  @media (max-width: 360px) {
    padding: 5px;
    width: 310px;
    flex-direction: column;
    justify-content: flex-start;
    height: 1030px;
  }
`;
export const ContactBox = styled.div`
  background: black;
  width: 491px;
  height: 648px;
  gap: 110px;
  border-radius: 10px 10px 0px 10px;
  color: white;
  font-family: "Poppins";
  font-size: 28px;
  font-weight: 600;
  line-height: 42px;
  letter-spacing: 0em;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  @media (max-width: 360px) {
    width: 310px;
    align-items: center;
    gap: 0;
    height: 397px;
  }
`;
export const ContactTitle = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 40px;
  padding-top: 40px;
  justify-content: center;
  letter-spacing: 0.01em;
  padding-right: 2px;
  gap: 5px;
  @media (max-width: 360px) {
    font-family: 'Poppins';
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
    padding-top: 15px;
    padding-left: 0px;
    width: 208px;
    padding-right: 0px;
    gap: 7px;
    align-items: center;
  }
`;
export const ContactInformation = styled.div`
  font-family: "Poppins";
  font-size: 28px;
  font-weight: 600;
  line-height: 42px;
  letter-spacing: 0.01em;
  text-align: left;
  @media (max-width: 360px) {
    font-family: 'Poppins';
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
  }
`;
export const SubTitleLive = styled.div`
  font-family: "Poppins";
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;
  color: gray;
  @media (max-width: 360px) {
    font-family: Poppins;
    font-size: 11px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 11px;
  }
`;

export const ContactLogoBox = styled.div`
  display: flex;
  gap: 24px;
  padding-top: 49px;
  padding-left: 39px;
  @media (max-width: 360px) {
    padding-left: 0px;
    padding-top: 38px;
  }
  
`;
export const IconHolder = styled.div`
  :hover {
    background: #f1f1f1;
    color: #1b1b1b;
  }
  background: #1b1b1b;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 30px;
  height: 30px;
  color: #f1f1f1;
  border-radius: 50%;
`;

export const InputField = styled.div`
  width: 705px;
  height: 667px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 19px;
  @media (max-width: 360px) {
    width: 360px;
    gap: 0px;
    justify-content: space-around;
    height: 633px;
  }
`;
export const InputBox = styled.div`
  width: 600px;
  height: 194px;
  gap: 39px;

  padding-right: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  font-family: "Poppins";
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  @media (max-width: 360px) {
    width: 320px;
    gap: 20px;
    padding: 0;
    padding-top: 37px;
  }
`;
export const FirstName = styled.div`
  #my-helper-text {
    font-family: "Poppins";
    font-size: 12px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    margin: 0;
  }
  width: 278px;
  height: 55px;
`;
export const LastName = styled.div`
  width: 278px;
  height: 55px;
`;
export const Email = styled.div`
  width: 278px;
  height: 55px;
  padding-top: 5px;
  @media (max-width: 360px) {
    padding: 0;
  }
`;
export const PhoneNumber = styled.div`
  width: 278px;
  height: 55px;
  padding-top: 5px;
  @media (max-width: 360px) {
    padding: 0;
  }
`;
export const Subject = styled.div`
  height: 156px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 219px;
  padding-right: 8px;
  gap: 8px;
  @media (max-width: 360px) {
    padding: 0;
    padding-left: 43px;
    height: 86px;
    gap: 3px;
    width: 320px;
  }
`;
export const Question = styled.div`
  font-family: "Poppins";
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: #1b1b1b;
  padding-top: 6px;
  letter-spacing: 0.01em;
  @media (max-width: 360px) {
    padding-top: 0px;
    font-family: Poppins;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
  }
`;
export const CheckBox = styled.div`
  .css-j204z7-MuiFormControlLabel-root .MuiFormControlLabel-label {
    font-family: "Poppins";
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    color: #1b1b1b;
  }
  display: flex;
  gap: 7px;
  @media (max-width: 360px) {
    gap: 3px;
    flex-wrap: wrap;
  }
`;
export const Elipse = styled.div`

  position: relative;
  @media(max-width:360px){
display:none;
  }
`;
export const Message = styled.div`
  width: 595px;

  padding-top: 28px;
  display: flex; 
  flex-direction: column;
  @media(max-width:360px){
    width:278px;
    padding-top:13px;

  }
`;
export const Send = styled.button`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 15px 48px;
  gap: 10px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  text-align: center;

  color: #ffffff;
  position: absolute;
  width: 216px;
  height: 54px;
  left: 1053px;
  top: 752px;

  background: #000000;

  border-radius: 5px;
  @media(max-width:360px){
    top: 1131px;
    left: 42px;
    width: 278px;
height: 38.21px;
background: #000000;
box-shadow: 0px 0px 8.96262px rgba(0, 0, 0, 0.12);
border-radius: 3.20093px;
    padding:0;
    gap: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 12.9495px;
line-height: 19px;
text-align: center;

color: #FFFFFF;



  }
  
`;
export const Letter = styled.div`
  position: absolute;
  width: 263px;
  height: 212.31px;
  left: 919.87px;
  top: 781px;
  background: url(../img/picture.png);
  @media (max-width: 360px) {
    position: inherit;
    height: 52px;
    width: 128px;
    padding-right: 88px;
    padding-top: 52px;
  }
`;
export const ElipseMedia = styled.div`
display:none;
@media(max-width:360px){
  display: flex;

}

`;