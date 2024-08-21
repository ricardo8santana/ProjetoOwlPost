import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { useState } from 'react'

import PostTitulo from './components/PostTitulo';

import PostEditorPage from './pages/PostEditorPage'
import PostViewPage from './pages/PostViewPage'
import Navbar from "./Header/Navbar";


const routes = createBrowserRouter([
  {
    path: '/',
    element:
      <>
        <Navbar />
        <div className="home">
          {/* <CarroselH/> */}
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
    path: '/post-titulo',
    element: <PostTitulo />
  }
])




function App() {
  return (
    <RouterProvider router={routes}/>
  )
}

export default App;