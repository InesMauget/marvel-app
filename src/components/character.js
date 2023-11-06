import { useLoaderData } from "react-router-dom";

function Character() {
    const character = useLoaderData();
  return (
    <>
      {character && (
        <div>
          <h4>Nom :</h4>
          {character.name}
          <br></br>
          <h4>Image : </h4>
          {character.thumbnail && (
            <img
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              alt={character.name}
              style={{ maxWidth: '100px' }}
            />
          )}
          <br />
          <h4>Description :</h4>
          {character.description}
        </div>
      )}
    </>
  );
}

export default Character;
