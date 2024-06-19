import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'
import {useDispatch } from "react-redux"
import { addUser, removeUser } from '../utils/userSlice'
import MoviesInfo from './MoviesInfo'
import VideoPage from './VideoPage'
import Details from './Details'
import Similar from './Similar'
import Recommended from './Recommended'

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
    {
      path:"/Video/:resId",
      element:<VideoPage/>,
      children: [
        {
          path: "Detail",
          element: <Details />
        },
        {
          path: "Similar",
          element: <Similar />
        },
        {
          path: "Recommended",
          element: <Recommended />
        }
      ]
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
