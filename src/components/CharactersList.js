import { Link } from "react-router-dom";
import { format } from "date-fns";

export function CharactersList({ characters = [] }) {
    return (
        <ul id="characters">
            {characters.map((character) => {
                return (
                    <li key={character.id} data-testid={`character-item-${character.id}`}>
                        <Link to={`/characters/${character.id}`}>
                            <strong>{character.name}</strong>
                            <small> - {format(new Date(character.modified), "MMMM dd, yyyy")}</small>
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}