import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import PaginaPerfil from './pages/PaginaPerfil';
import PaginaCadastro from './pages/PaginaCadastro';
import PaginaLogin from './pages/PaginaLogin';
import PostTitulo from './components/PostTitulo';
import PostViewPage from './pages/PostViewPage'
import PaginaHome from './pages/PaginaHome';
import PostEditorPage from './pages/PostEditorPage'
import Sobrenos from './components/Sobrenos';

import { RouterProvider, createBrowserRouter } from 'react-router-dom'


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
    path: '/sobrenos',
    element: <Sobrenos />
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