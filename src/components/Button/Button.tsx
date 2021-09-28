import React from "react";
import styled from "styled-components";

const StyledButton = styled.div`
background-color: #7BEBD4;
border-radius: 13px;
border: 1px solid #000000;
`

const Button: React.FC = () => {
    return (
        <StyledButton>
            Click!
        </StyledButton>
    )
}

export default Button;