import { useParams } from "react-router-dom";
const characters = require('../data/characters.json');

function Character() {
    const { id } = useParams();
  return (
    <>
      {characters && (
        <div>
          <h4>Nom :</h4>
          {id.name}
          <br></br>
          <h4>Image : </h4>
          {id.thumbnail && (
            <img
              src={`${id.thumbnail.path}.${id.thumbnail.extension}`}
              alt={id.name}
              style={{ maxWidth: '100px' }}
            />
          )}
          <br />
          <h4>Description :</h4>
          {id.description}
        </div>
      )}
    </>
  );
}

export default Character;
