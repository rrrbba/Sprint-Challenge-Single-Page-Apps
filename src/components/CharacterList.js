import React, { useEffect, useState } from "react";
import axios from 'axios';
// import { Card } from 'reactstrap';
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import SearchForm from './SearchForm';



export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([])
  const [searchCharacters, setSearchCharacters] = useState ([])



  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getCharacters = () => {
    axios
    .get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        const characters = response.data.results;
        console.log(characters)
        setCharacters(characters)
      })
      .catch(error => {
        console.log("The data was not returned", error);
      });
    }
    getCharacters();
  }, []);



  return (
    <section className="character-list">
      
      {characters.map(character => (
        <CharacterDetails key = {character.id} character={character} />
      ))}
    </section>
  );
}


function CharacterDetails({character}) {
  const { name, gender } = character;

  return(
    <>
      <SearchForm  />
     <div>
      <StyledCard>
  
      <StyledName>Name: {name}</StyledName>
      <StyledGender>Gender: {gender}</StyledGender>
   

      </StyledCard>
      </div>

</>
    
  )

}

const StyledName = styled.div`
  text-decoration: none;
  color: black
`

const StyledGender = styled.div`
  padding-bottom: 5%;
`

const StyledCard = styled.div`
  font-size: 1.3rem;
  // display: flex;
  // justify-content: space-evenly;
  // background-color: lightblue;
  margin-left: 35%;
  width: 100%;
`


