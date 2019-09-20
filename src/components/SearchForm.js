import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function SearchForm({characters, setSearchResults}) {
  
  const [searchWord, setSearchWord] = useState('')


 

 
  useEffect(() => {
    const results = characters.filter(character => character.name.toLowerCase().includes(searchWord))

      searchWord === ''
      ? setSearchResults(characters)
      : setSearchResults(results)

  }, [searchWord])

  const handleChange = (event) => {
    event.preventDefault();
    setSearchWord(event.target.value)
  }

  return (
    <section className="search-form">
      
      <form>
      <Searcher
        name = "search"
        type = "text"
        placeholder = "Search Characters"
        value = {searchWord}
        onChange = {handleChange}


      />
      <input 
      onClick = 'submit'
      type = 'submit'
      value = "Search"
      />
      </form>


    </section>
  );
}

 const Searcher = styled.input`
  border: 1px solid black
 `
