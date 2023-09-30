import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"

import Root from "./routes/root.jsx"
import {loader as rootLoader, action as rootAction} from "./routes/root.jsx"

import ErrorPage from "./error-page"

import Contact from "./routes/contact"
import {loader as contactLoader, action as contactAction} from "./routes/contact"

import EditContact from "./routes/edit";
import {loader as contactEditLoader, action as contactEditAction} from "./routes/edit"

//Destroy
import {action as destroyAction} from "./routes/destroy"

import Index from './routes'

import LogoutPage from "./routes/logout"
import {loader as logoutLoader, action as logoutAction} from "./routes/logout"

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    loader: rootLoader, //Recien cuando el user acceda a la ruta "/" se usara la funcion rootLoader para cargar de manera asincronica los contactos, los cuales se usan para geneerar los Links de manera dinamica con un map
    action: rootAction,
    children: [
      {
        index: true,
        element: <Index/>,
      },
      {
        path: "contacts/:contactId",
        element: <Contact/>,
        loader: contactLoader,
        action: contactAction,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactEditLoader,
        action: contactEditAction
      },
      {
        path: "contacts/:contactId/destroy",
        action: destroyAction,
        errorElement: <>Ups! Something went wrong...</>
      },
      {
        path: "logout/",
        element: <LogoutPage></LogoutPage>,
        loader: logoutLoader,
        action: logoutAction,
      },
    ],
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={myRouter}></RouterProvider>
  </React.StrictMode>,
)

