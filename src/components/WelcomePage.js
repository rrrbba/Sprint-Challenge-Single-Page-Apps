import React from "react";
// import CharacterList from './components/CharacterList';
import { NavLink } from "react-router-dom";



export default function WelcomePage(props) {

  const routeToCharacters = event => {
    event.preventDefault();
    props.history.push("/characters")
  }

  return (
    <section className="welcome-page">
      <header>
      <NavLink to="/characters">Characters</NavLink>
        <h1>Welcome to the ultimate fan site!</h1>
        
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
          />
        
        
      </header>
      

    </section>
  );
}

