import React from "react";
import "@fontsource/roboto/400.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import ImgDiscord from "../img/img.svg";
import { TextField, FormHelperText, Radio } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import PictureImg from "../img/picture.png";
import DataComponent from "../data/Data";
import Ellipse from "../img/Ellipse.png";
import EllipseCircle from "../img/EllipseCircle.png";
import EllipseCircleMedia from "../img/EllipseCircleMedia.svg";
import EllipseMedia from "../img/EllipseMedia.svg";
import { BodyBox, BodyMother, CheckBox, ContactBox, ContactInformation, ContactLogoBox, ContactTitle, Elipse, ElipseMedia, Email, FirstName, IconHolder, InputBox, InputField, LastName, Letter, Message, PhoneNumber, Question, Send, Subject, SubTitle, SubTitleLive, Title, Wrapper } from "./Styles";


export const Body = (isFooter) => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <BodyMother>
      <Wrapper>
        <Title>Contact Us</Title>
        <SubTitle>Any question or remarks? Just write us a message!</SubTitle>
      </Wrapper>
      <BodyBox>
        <ContactBox>
          <ContactTitle>
            <ContactInformation>Contact Information</ContactInformation>
            <SubTitleLive>Say something to start a live chat!</SubTitleLive>
          </ContactTitle>

          <DataComponent footerType bodyType type="body"/>
          <ContactLogoBox>
            <IconHolder>
              <TwitterIcon fontSize="small" />
            </IconHolder>
            <IconHolder>
              <InstagramIcon fontSize="small" />
            </IconHolder>
            <IconHolder>
              <img src={ImgDiscord} alt="0" />
            </IconHolder>
          </ContactLogoBox>
          <Elipse>
            <img

              src={Ellipse}alt="0"
              style={{
                position: "absolute",
                bottom: "74px",
                left: "311px",
              
              }}
            ></img>
            <img src={EllipseCircle}alt="0"
                 style={{
                  position: "absolute",
                  bottom: "144px",
                  left: "283px",
                }}
            ></img>
          </Elipse>
          <ElipseMedia>
            <img src={EllipseMedia}alt="0"
            style={{    left: "255px",
              position: "absolute",
              top: "503px"}}>
            </img>
            <img src={EllipseCircleMedia}alt="0"
               style={{    left: "255px",
               position: "absolute",
               top: "499px"}}>
            </img>
          </ElipseMedia>

        </ContactBox>

        <InputField>
          <InputBox>
            <FirstName>
              <FormHelperText style={{ marginTop: "-1px" }} id="my-helper-text">
                First Name
              </FormHelperText>
              <TextField
                variant="standard"
                sx={{ width: "279px", paddingTop: "2px" }} // Set the width to 300px using sx prop
              />
            </FirstName>
            <LastName>
              <FormHelperText style={{ marginTop: "-1px" }} id="my-helper-text">
                Last Name
              </FormHelperText>

              <TextField
                variant="standard"
                style={{ width: "100%", paddingTop: "2px" }} // Set the width to 100% using style prop
              />
            </LastName>
            <Email>
              <FormHelperText style={{ marginTop: "-1px" }} id="my-helper-text">
                Email
              </FormHelperText>

              <TextField
                variant="standard"
                style={{ width: "100%", paddingTop: "2px" }} // Set the width to 100% using style prop
              />
            </Email>
            <PhoneNumber>
              <FormHelperText style={{ marginTop: "-1px" }} id="my-helper-text">
                Phone Number
              </FormHelperText>

              <TextField
                variant="standard"

                style={{ width: "100%", paddingTop: "2px" }} // Set the width to 100% using style prop
              />
            </PhoneNumber>
          </InputBox>
          <Subject>
            <Question>Select Subject?</Question>
            <CheckBox>
              <FormControlLabel
                control={
                  <Radio
                    checked={checked}
                    onChange={handleChange}
                    sx={{
                      "& .MuiSvgIcon-root": {
                        borderRadius: 2,
                        width: 13,
                        height: 13,
                        border: "solid 1px #C9D6E2",
                        backgroundColor: "#FFFFFF",
                        "&.Mui-checked": {
                          backgroundColor: "#0079D3",
                          borderColor: "#0079D3",
                        },
                      },
                    }}
                  />
                }
                label="General inquiry"
              />

              <FormControlLabel
                control={
                  <Radio
                    sx={{
                      "& .MuiSvgIcon-root": {
                        borderRadius: 2,
                        width: 13,
                        height: 13,
                        border: "solid 1px #C9D6E2",
                        backgroundColor: "#FFFFFF",
                        "&.Mui-checked": {
                          backgroundColor: "#0079D3",
                          borderColor: "#0079D3",
                        },
                      },
                    }}
                  />
                }
                label="General inquiry"
              />

              <FormControlLabel
                control={
                  <Radio
                    sx={{
                      "& .MuiSvgIcon-root": {
                        borderRadius: 2,
                        width: 13,
                        height: 13,
                        border: "solid 1px #C9D6E2",
                        backgroundColor: "#FFFFFF",
                        "&.Mui-checked": {
                          backgroundColor: "#0079D3",
                          borderColor: "#0079D3",
                        },
                      },
                    }}
                  />
                }
                label="General inquiry"
              />

              <FormControlLabel
                control={
                  <Radio
                    sx={{
                      "& .MuiSvgIcon-root": {
                        borderRadius: 2,
                        width: 13,
                        height: 13,
                        border: "solid 1px #C9D6E2",
                        backgroundColor: "#FFFFFF",
                        "&.Mui-checked": {
                          backgroundColor: "#0079D3",
                          borderColor: "#0079D3",
                        },
                      },
                    }}
                  />
                }
                label="General inquiry"
              />
            </CheckBox>
            <Message>
              <FormHelperText id="my-helper-text">Message</FormHelperText>
              <TextField
                variant="standard"
                label="Write your message.."
                style={{
                  fontFamily: "Poppins",
                  margin: "0px",
                  height: "40px",
                  bottom: "15px",
                  paddingTop: "2px",
                }}
              />
            </Message>
          </Subject>
          <Send style={{ cursor: "pointer" }}>Send Message</Send>
          <Letter style={{ cursor: "pointer" }}>
            <img src={PictureImg} style={{ width: "100%" }} alt="0"></img>
          </Letter>
        </InputField>
      </BodyBox>
    </BodyMother>
  );
};
export default Body;
