import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import User from './components/User/User'
import Github from './components/Github/Github'
import Api from './Api/Api'

//One method
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contactus",
//         element: <Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route path="" element={<Home />}/>
    <Route path="about" element={<About />}/>
    <Route path="contactus" element={<Contact />}/>
    <Route path="user/:id" element={<User />}/>
    <Route
    loader={Api}
     path="github"
      element={<Github />}/>
  </Route>
)
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
