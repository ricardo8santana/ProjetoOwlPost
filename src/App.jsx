import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import PaginaCadastro from './pages/PaginaCadastro';
import PaginaLogin from './pages/PaginaLogin';

import Navbar from "./Header/Navbar";
import CarroselHome from "../Carousel/Carrosel";
import PaginaPerfil from './pages/PaginaPerfil';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import PostTitulo from './components/PostTitulo';

import PostEditorPage from './pages/PostEditorPage'
import PostViewPage from './pages/PostViewPage'



const routes = createBrowserRouter([
  {
    path: '/',
    element:
    <>
    <Navbar/>
    <div>
        <div className="home">
            <CarroselHome/>
            <div className="margem-carrosel-jogos">
                <ul className="teste-1">
                    <li className="carregamento-carrosel jogo1-1">
                        <span>Jogo 1</span>
                    </li>
                    <li className="carregamento-carrosel jogo1-2">
                        <span>Jogo 2</span>
                    </li>
                    <li className="carregamento-carrosel postagem1-1">
                        <span>Postagem 1</span>
                    </li>
                    <li className="carregamento-carrosel postagem1-2">
                        <span>Postagem 2</span>
                    </li>
                </ul>
            </div>
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
  },
  {
    path: '/post-titulo',
    element: <PostTitulo />
  }
]);




function App() {
  return (
<<<<<<< HEAD
    <>
     
    </>
=======
    <RouterProvider router={routes}/>
>>>>>>> 6f67807829f4a5a2cdd664fa95d7d6a0ee1ee033
  )
}

export default App;