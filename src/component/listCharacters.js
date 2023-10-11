import { Link, useLoaderData } from "react-router-dom";

function ListePersonnages() {
const characters = useLoaderData();

  return (
    <>
      <ul>
        {characters.map((character) => (
          <li
            key={character.id}
          >
            <Link to={`/characters/${character.id}`}>{character.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListePersonnages;
