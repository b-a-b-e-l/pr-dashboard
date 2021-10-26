import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";

const StyledCard = styled.div`
  max-width: 300px;
  border: 0.5px solid #b7fdec;
  background-color: #c4c4c4;
  color: #ffffff;
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 8.5px;
`;
const CardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const CardDetails = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

interface Props {}

const Card = (props: Props) => {
  return (
    <StyledCard>
      <CardInfo>
        <div>
          <h3>Created branch #1</h3>
          <p>by Marta-S7 on 24/09/2021 13:41</p>
          <p>into main/branch1</p>
        </div>
        <img src="#" alt="avatar"></img>
      </CardInfo>
      <CardDetails>
        <ul>
          <li>1 commit</li>
          <li>2 comments</li>
          <li>0 approvals</li>
        </ul>
        <Button>see PR</Button>
      </CardDetails>
    </StyledCard>
  );
};

export default Card;
