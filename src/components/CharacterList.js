import React, { useEffect, useState } from "react";
import axios from 'axios';
// import { Card } from 'reactstrap';
import styled from "styled-components";
import { Link } from "react-router-dom";
import SearchForm from './SearchForm';
import CharacterCard from './CharacterCard';


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([])




  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    // const getCharacters = () => {
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
    // }
    // getCharacters();
  }, []);




  return (
    <section className="character-list">
        <Link to="/">
        <button>Home</button>
        </Link>
      <h2>Characters!</h2>
     
      <SearchForm characters={characters}/>
      <Div>
      {characters.map(character => {
        return (
          <div key={character.id}>
          <CharacterCard character={character}/>
        </div> 
        ) 
      })}
      </Div>
    </section>
  );
}

const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 2px;
  margin: 2px;
`;



