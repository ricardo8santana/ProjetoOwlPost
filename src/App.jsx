import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import PaginaCadastro from './pages/PaginaCadastro';
import PaginaLogin from './pages/PaginaLogin';
import PostViewPage from './pages/PostViewPage';
import PostEditorPage from './pages/PostEditorPage';

import Navbar from "./Header/Navbar";
import CarroselHome from "../Carousel/Carrosel";
import PaginaPerfil from './pages/PaginaPerfil';

const routes = createBrowserRouter([
  {
    path: '/',
    element:
      <>
        <Navbar />
        <div className="home">
          <CarroselHome />
          <div>
            <p>teste</p>
            <p>teste</p>
          </div>
        </div>
      </>
  },
  {
    path: '/post',
    element: <PostViewPage />
  },
  {
    path: '/post-edit',
    element: <PostEditorPage />
  },
  {
    path: '/login',
    element: <PaginaLogin />
  },
  {
    path: '/cadastro',
    element: <PaginaCadastro />
  },
  {
    path: '/perfil',
    element: <PaginaPerfil />
  }
]);

function App() {
  return (
    <RouterProvider router={routes}/>
  )
}

export default App;