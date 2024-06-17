import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'
import {useDispatch } from "react-redux"
import { addUser, removeUser } from '../utils/userSlice'
import MoviesInfo from './MoviesInfo'

const Body = () => {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
      path:"/",
      element:<Login/>
    },
    {
      path:"/browse",
      element:<Browse/>
    },
    {
      path:"/MoviesInfo/:resId",
      element:<MoviesInfo/>
    },
  ])
  return (
    <div className='font-medium'>
      <RouterProvider router={appRouter}>
        
      </RouterProvider>
    </div>
  )
}


export default Body
