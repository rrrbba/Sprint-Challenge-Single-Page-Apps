import React from "react";
import styled from "styled-components";




const StyledCard = styled.div`
  font-size: 1.3rem;

  // background-color: lightblue;
  // margin-left: 35%;
  width: 70%;
  padding: 15%;
`

export default function CharacterCard(props) {
  return (
    <div>
       <StyledCard>
         <img src={props.character.image} alt = 'character '/>
      <h1>{props.character.name}</h1>
      <p>Gender: {props.character.gender}</p>
      </StyledCard>
    </div>

  )
}
