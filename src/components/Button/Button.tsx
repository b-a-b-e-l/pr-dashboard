import React from "react";
import styled from "styled-components";

const StyledButton = styled.a`
  background-color: #7bebd4;
  border-radius: 13px;
  border: 1px solid #000000;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  padding: 10px 20px;
  &:hover {
    background-color: #e4ff96;
  }
`;

const Button: React.FC = () => {
  return <StyledButton href="#">Click!</StyledButton>;
};

export default Button;
