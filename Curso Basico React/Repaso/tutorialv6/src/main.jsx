import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"

import Root from "./routes/root.jsx"
import {loader as rootLoader} from "./routes/root.jsx"

import ErrorPage from "./error-page"
import Contact from "./routes/contact"

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    loader: rootLoader,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact/>,
      },
    ],
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={myRouter}></RouterProvider>
    {/* <App /> */}
  </React.StrictMode>,
)
