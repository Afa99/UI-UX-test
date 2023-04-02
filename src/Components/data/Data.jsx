import React from "react";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  Data,
  DataBody,
  DataFuter,
  DataHeader,
  DataNumber,
  DataText,
  ImgContainer
} from "./Styles";




const DataComponent = ({
  footerMedia,
  shortText,
  type,
  bodyType,
  footerType,
}) => {
  return (
    <Data type={type}>
      <DataHeader type={type} footerMedia={footerMedia}>
        <PhoneInTalkIcon style={{ cursor: "pointer", }} />
        <DataNumber>+1012 3456 789</DataNumber>
      </DataHeader>
      <DataBody bodyType={bodyType}>
        <EmailIcon style={{ cursor: "pointer", paddingRight: "0px" }} />
        <DataText type='body'>demo@gmail.com</DataText>
      </DataBody>
      <DataFuter footerType={footerType}>
        <ImgContainer>
          <LocationOnIcon
            style={{ cursor: "pointer", paddingBottom: "20px" }}
          />
        </ImgContainer>

        {shortText ? (
          <DataText type="footer">
            132 Dartmouth Street Boston, Massachusetts 02156 United States
          </DataText>
        ) : (
          <DataText>
            132 Dartmouth Street Boston, Massachusetts 02156 United States
          </DataText>
        )}
      </DataFuter>
    </Data>
  );
};
export default DataComponent;
