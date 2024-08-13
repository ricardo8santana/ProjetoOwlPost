import './App.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { useState } from 'react'

import PostEditorPage from './pages/PostEditorPage'
import PostViewPage from './pages/PostViewPage'

const routes = createBrowserRouter([
  {
    path: '/post',
    element: <PostViewPage/>
  },
  {
    path: '/post-edit',
    element: <PostEditorPage/>
  }
])


function App() {
  return (
    <RouterProvider router={routes}/>
  )
}

export default App
