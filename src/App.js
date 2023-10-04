import Title from "./component/titre.js";
import CharactersList from "./component/listCharacters.js";
import CharactersCount from "./component/nbCharacters.js";

const characters=require('./data/characters.json');


function App() {

  return (
    <>
      <Title/>
      <CharactersList characters={characters}/>
      <CharactersCount characters={characters}/>
    </>
  );
}

export default App;



//<> et </> permettent de mettre plsuieurs composant au sein d'un composant
