import styled from "styled-components";

export const Burger = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 12px;
  position: relative;
  width: 18px;
  padding-top: 4px;

  & .burger-line {
    background-color: #000;
    height: 3px;
    transition: all 0.2s ease-in-out;
    transform: translateY(${(props) => (props.isOpen ? "-13px" : "0")})
      rotate(${(props) => (props.isOpen ? "-45deg" : "0")});
  }

  & .burger-line:first-child {
    transform: translateY(${(props) => (props.isOpen ? "8px" : "0")})
      rotate(${(props) => (props.isOpen ? "45deg" : "0")});
  }

  & .burger-line:last-child {
    width: 10px;
    margin-left: 8px;

    transform: translateY(${(props) => (props.isOpen ? "-8px" : "0")})
      rotate(${(props) => (props.isOpen ? "-45deg" : "0")});
  }
`;

export const Menu = styled.div`
  background-color: #000;
  border: 1px solid #ddd;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  display: none;
  position: absolute;
  left: 0;
  top: 0;
  width: 360px;
  z-index: 1;
  &.open {
    display: block;
  }

  & ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  & li {
    border-bottom: 1px solid #ddd;
    color: #555;
    font-size: 14px;
    font-weight: 500;
    padding: 16px;
    text-transform: uppercase;

    &:hover {
      background-color: #f7f7f7;
    }
  }

  & li:last-child {
    border-bottom: none;
  }
`;
export const HoverMenu = styled.div`
  height: 476px;
  width: 320px;
  padding: 20px;
  gap: 58px;
  display: flex;
  flex-direction: column;
`;
export const HoverNavs = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const MenuStyledText = styled.div`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  width: 65px;
  height: 246px;
  gap: 30px;
  display: flex;
  flex-direction: column;
`;