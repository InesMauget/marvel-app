import D3PieChart from './D3PieChart';
import { format } from "date-fns";

function CharacterDetail({ character = {} }) {
    return (
        <div>
            <h2>{character.name}</h2>
            {
                // if character.thumbnail is not null, then render the image
                character.thumbnail && <img src={`${character.thumbnail.path}/standard_large.${character.thumbnail.extension}`} alt={character.name} />
            }
            <p>{character.description}</p>
            <p>{character.modified ? format(new Date(character.modified), "MMMM dd, yyyy") : 'Date not available'}</p>
            <D3PieChart data={character.capacities} /> 
        </div>
    );
}

export default CharacterDetail;
