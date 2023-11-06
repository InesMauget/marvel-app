import { useLoaderData } from "react-router-dom";
import Character from '../components/character.js';

function CharacterPage() {
    const character = useLoaderData();
  return (
    <Character character={character}/>
  );
}
export default CharacterPage;
