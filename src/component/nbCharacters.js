const characters=require('../data/characters.json');
function CharactersCount(){
    return(<h2>Number of characters : {characters.length}</h2>)
  };

  export default CharactersCount;
  