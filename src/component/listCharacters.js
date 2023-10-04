const characters=require('../data/characters.json');
function CharactersList(){
    return(
      <>
      <h3>List of characters :</h3>
      <ul>
      {characters.map(character => (
              <li key={character.id}>
                <p>{character.name}</p>
              </li>
            ))}
      </ul>
      </>
    )
  };


  export default CharactersList;