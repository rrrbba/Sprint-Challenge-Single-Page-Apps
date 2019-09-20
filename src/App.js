import React from "react";
import Header from "./components/Header.js";
import { Route, Link } from "react-router-dom";
import CharacterList from './components/CharacterList';
import WelcomePage from './components/WelcomePage';

export default function App() {
  return (
    <main>
      <Header />

    <Route exact path = "/" component = {WelcomePage} />
      <div>
        
      <Route exact path = "/characters" component = {CharacterList} />
      

    </div>
    </main>


  );
}
