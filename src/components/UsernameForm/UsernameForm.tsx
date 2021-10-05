import React from "react";
import styled from 'styled-components'

interface Props {

}

const StyledForm = styled.form`
background-color: #C4C4C4;
font-weight: 700;
color: #E4FF96;
box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
padding: 15px
`

const StyledInput = styled.input`
background-color: #C4C4C4;
font-weight: 700;
color: #E4FF96;
border: 1px solid #000000;
`
const StyledSelect = styled.select`
background-color: #C4C4C4;
font-weight: 700;
color: #E4FF96;
border: 1px solid #000000;
`


const UsernameForm = (props: Props) => {
   return (
       <StyledForm>
            <StyledInput placeholder="GitHub Username" /> 
            <StyledInput type="submit" value="OK" />
            <StyledSelect name="repository" id="repositories">
                <option value="Repo1">Repo1</option>
                <option value="Repo2">Repo2</option>
                <option value="Repo3">Repo3</option>
                <option value="Repo4">Repo4</option>
            </StyledSelect>
       </StyledForm>
   ) 
}

export default UsernameForm;