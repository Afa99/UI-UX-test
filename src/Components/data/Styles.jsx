import styled from "styled-components";

export const Data = styled.div`
    width: 337px;
    font-family: 'Poppins';
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    display: flex;
    flex-direction: column;
    gap: 50px;
    -webkit-box-pack: center;
    justify-content: center;
        ${(props) => {
      if(props.type === "body") {
        return`
        padding-left: 40px;
        padding-top:0px
        gap:50px;
        `;
      }
      if(props.type === "footer") {
        return`
        width: 337px;
    font-family: Poppins;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    display: flex;
    flex-direction: column;
    gap: 22px;
    padding-top: 17px;
    -webkit-box-pack: center;
    justify-content: center;
        `;
      }
    }}
  @media (max-width:360px) {
    width: 140px;
    align-items: flex-end;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 17px;
    align-items: flex-start;
    justify-content: flex-start;
    ${(props) => {
      if(props.type === "body") {
        return`
          align-items: center;
        `;
      }
      if(props.type === "footer") {
        return`
        width: 337px;
    font-family: Poppins;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    display: flex;
    flex-direction: column;
    gap: 9px;
    -webkit-box-pack: center;
    justify-content: center;
        `;
      }
    }}
  }
`;
export const DataHeader = styled.div`
  height: 23%;
  display: flex;
  align-items: center;
  gap: 27px;
  padding-top: 5px;
      ${(props) => {
    if (props.type ==="body") {
        return`
        padding-top:0px;

        `;
    }
  }}
  
  @media (max-width: 360px) {
    padding: 0;
    gap: 10px;
    flex-direction: column;
    padding-right: 0;

    ${(props) => {
    if (props.footerMedia) {
        return`
            padding-right:0px;
            margin-top: 14px;
            align-items: flex-start;

        `;
    }
  }}

  }
  ${({ isFooter }) => (isFooter ? "padding-left:0px;" : "")}
`;
export const DataNumber = styled.div`
  height: 24px;
  width: 143px;
  letter-spacing: 0.01em;

  @media(max-width:360px) {
    font-family: "Poppins";
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    width: 89px;
    /* padding-left: 63px; */
    
  }
`;
export const DataBody = styled.div`
  height: 17%;
  display: flex;
  align-items: center;
  gap: 24px;
  
  @media (max-width: 360px) {
    padding: 0;
    gap: 10px;
    flex-direction: column;
    font-family: "Poppins";
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    height: 43px;
    align-items: center;
    justify-content: flex-start;
    display: flex;
    align-items: flex-start;
    ${(props) => {
      if(props.bodyType) {
        return`
        align-items: center;
        `;
      }
    }}
  }`;
export const DataFuter = styled.div`
  /* width: 100%; */
  height: 37%;
  display: flex;
  align-items: center;
  gap: 25px;
  @media (max-width: 360px) {
    padding: 0;
    gap: 0px;
    flex-direction: column;
    text-align: center;
    font-family: "Poppins";
    font-size: 12px;
    font-weight: 400;
    line-height: 8px;
    letter-spacing: 0em;
    align-items: flex-start;
    justify-content: flex-start;
${(props) => {
      if(props.footerType) {
        return`
        align-items: center;
        `;
      }
    }}
  }
`;
export const DataText = styled.div`
  line-height: 24px;
  margin: 0;
 
  @media (max-width: 360px) {
    line-height: 18px;
    text-align: center;
    margin: 0;
    width: 250px;
    ${(props) => {
    if (props.type === 'footer') {
        return`
            width: 140px;
            text-align: left;

        `;
    }
    if (props.type === 'body') {
        return`
            width: 140px;
            margin-left: -14px;
        `;
    }
  }}
  }
`;

export const ImgContainer = styled.div`
    height: 37%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    gap: 2px;
     @media (max-width:360px){
      padding-top: 9px;
     }
      ${(props) => {
      if(props.type === "call") {
        return`

        `}}

        }`;
        