import React from 'react';
import { useLoaderData } from "react-router-dom";
import CharactersCount from '../component/nbCharacters';
import ListePersonnages from '../component/listCharacters';



function CharactersPage() {
  const characters = useLoaderData();
  return (
    <>
      <h2>Marvel Characters</h2>
      <h3>List of characters :</h3>
      <ListePersonnages characters={characters} />
      <CharactersCount characters={characters}/>
    </>
  );
}

export default CharactersPage;
