import React from "react";
// import CharacterList from './components/CharacterList';
import { Route } from "react-router-dom";



export default function WelcomePage(props) {

  const routeToCharacters = event => {
    event.preventDefault();
    props.history.push("/characters")
  }

  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
          />
        
        <button onClick = {routeToCharacters}>View Characters</button>
      </header>
      

    </section>
  );
}

