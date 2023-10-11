import Character from "./component/character.js";
import Root from "./component/layout.js";
import CharactersPage from "./pages/characters-pages.js";
import About from "./pages/about.js";
import Notfound from "./pages/404.js";

const characters = require('./data/characters.json');

const routes =  [
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "characters",
                element: <CharactersPage />,
                loader: () => characters
            },
            {
                path: "characters/:id",
                element: <Character/>,    
                loader:({params})=> characters.find((character) => character.id === params.id )           
            },
            {   
                path: "about",
                element: <About/>,
            },
            {
                path: "*",
                element: <Notfound/>,
            }
        ],
    },

]

export default routes;
