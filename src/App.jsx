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
    <RouterProvider router={routes}/>
  )
}

export default App;