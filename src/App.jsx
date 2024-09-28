import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { useEffect } from 'react';

import * as darkModeService from './services/darkModeService';

import PaginaPerfil from './pages/PaginaPerfil';
import PaginaCadastro from './pages/PaginaCadastro';
import PaginaLogin from './pages/PaginaLogin';
import PaginaPostagem from './pages/PaginaPostagem';
import PostViewPage from './pages/PostViewPage'
import PaginaHome from './pages/PaginaHome';
import PaginaEditor from './pages/PaginaEditor';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <PaginaHome />
  },
  {
    path: '/posts',
    element: <PostViewPage />
  },
  {
    path: '/editor/:postID',
    element: <PaginaEditor />
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
    path: '/posts/:postID',
    element: <PaginaPostagem />
  }
]);

function App() {
  useEffect(() => {
    darkModeService.setTheme(darkModeService.loadTheme());
  }, []);

  return (
    <RouterProvider router={routes} />
  )
}

export default App;