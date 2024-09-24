import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import PaginaPerfil from './pages/PaginaPerfil';
import PaginaCadastro from './pages/PaginaCadastro';
import PaginaLogin from './pages/PaginaLogin';
import PostTitulo from './components/PostTitulo';
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