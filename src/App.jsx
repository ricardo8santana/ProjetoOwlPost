import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import PaginaCadastro from './pages/PaginaCadastro';
import PaginaLogin from './pages/PaginaLogin';

import Navbar from './components/Navbar';
import CarroselHome from "../Carousel/Carrosel";
import PaginaPerfil from './pages/PaginaPerfil';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import PostTitulo from './components/PostTitulo';

import PostEditorPage from './pages/PostEditorPage'
import PostViewPage from './pages/PostViewPage'
import PaginaHome from './pages/PaginaHome';



const routes = createBrowserRouter([
  {
    path: '/',
    element: <PaginaHome />    
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
    <RouterProvider router={routes}/>
  )
}

export default App;