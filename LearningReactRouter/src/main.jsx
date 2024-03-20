import React from "react"
import ReactDOM from "react-dom/client"
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  Routes,
} from "react-router-dom"
import "./index.css"
import App from "./App"
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import User from "./components/User/User"
import GitHub, { githubInfoLoader } from "./components/GitHub/GitHub"

// const routes = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//     ]
//   },
// ]);

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />
      <Route loader={githubInfoLoader} path="github" element={<GitHub />} />
    </Route>
  )
)  

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
)
