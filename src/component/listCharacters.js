import React, { useState } from 'react';

const characters = require('../data/characters.json');

function CharactersList() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleClick = (character) => {
    setSelectedCharacter(character);
  };

  return (
    <>
      <h3>List of characters :</h3>
      <ul>
        {characters.map((character) => (
          <li
            key={character.id}
            onClick={() => handleClick(character)}
          >
            <p>{character.name}</p>
          </li>
        ))}
      </ul>
      {selectedCharacter && (
        <div>
          <h4>Nom :</h4>
          {selectedCharacter.name}
          <br></br>
          <h4>Image : </h4>
          {selectedCharacter.thumbnail && (
            <img
              src={`${selectedCharacter.thumbnail.path}.${selectedCharacter.thumbnail.extension}`}
              alt={selectedCharacter.name}
              style={{ maxWidth: '100px' }}
            />
          )}
          <br />
          <h4>Description :</h4>
          {selectedCharacter.description}
        </div>
      )}
    </>
  );
}

export default CharactersList;
