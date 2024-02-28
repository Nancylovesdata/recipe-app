import Navbar from './components/navbar';
import Recipes from './pages/recipes';
import Recipe from './pages/recipe';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router';

const router = createBrowserRouter ([
  {path: "/", element : < Recipes/>},
  {path: "/recipes", element: <Recipes />},
  {path:"/recipes/:id", element: <Recipe/>}
]);

function App() {
return(
<>
< Navbar/>
<RouterProvider router={router} />
</>
  );
}

export default App;
