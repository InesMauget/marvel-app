import Title from "./component/titre.js";

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import routes from './routes.js';

const characters=require('./data/characters.json');
const router = createBrowserRouter(routes)

function App() {

  return (
    <>
      <Title/>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

//<> et </> permettent de mettre plsuieurs composant au sein d'un composant 
