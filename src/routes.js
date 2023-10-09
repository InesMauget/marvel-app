import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";
import CharactersList from "./component/listCharacters.js";
import Character from "./component/character.js";

const characters = require('./data/characters.json');

const routes =  [
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "characters",
                element: <CharactersList />,
                loader: () => characters
            },
            {
                path: "characters/:id",
                element: <Character/>,                
            },
            {   
                path: "about",
                element: <div>
                    About
                </div>,
            },
            {
                path: "*",
                element: <div>Not Found</div>,
            }
        ],
    },

]

function Root() {
    return (
        <>
            <header>
                <nav>
                    <NavLink to="/characters">Characters</NavLink>
                    <NavLink to="/characters/:id">Character</NavLink>
                    <NavLink to="/about">About</NavLink>
                </nav>
            </header>
            <div className="content">
                <Outlet />
            </div>
        </>
    );
}

export default routes;
