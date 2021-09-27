import React from "react";
import styled from 'styled-components'

interface Props {

}

export const Card = (props: Props) => {
   return (
       <div>
           <h3>Created branch #1</h3>
           <p>by Marta-S7 on 24/09/2021 13:41</p>
           <p>into main/branch1</p>
           <img src="#" alt="avatar"></img>
           <p>1 commit</p>
           <p>2 comments</p>
           <p>0 approvals</p>
       </div>
   ) 
}