import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { useState } from 'react'

import PostEditorPage from './pages/PostEditorPage'
import PostViewPage from './pages/PostViewPage'

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
  }
])

import Navbar from "./Header/Navbar";
import CarroselHome from "../Carousel/Carrosel";
import './App.css';

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