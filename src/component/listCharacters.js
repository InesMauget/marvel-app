import React, { useState } from 'react';
import CharactersCount from "./nbCharacters.js";
import { Link, useLoaderData } from "react-router-dom";



function CharactersList() {
  const characters = useLoaderData();

  return (
    <>
      <h2>Marvel Characters</h2>
      <h3>List of characters :</h3>
      <ul>
        {characters.map((character) => (
          <li
            key={character.id}
          >
            <Link to="/characters/1">{character.name}</Link>
          </li>
        ))}
      </ul>
      <CharactersCount characters={characters}/>
    </>
  );
}

export default CharactersList;
