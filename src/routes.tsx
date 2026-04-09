import { createBrowserRouter } from "react-router"
import GameList from "./components/GameList"
import GameDetail from "./components/GameDetail"
import Layout from "./components/Layout"
import About from "./components/About"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <GameList />,
      },
      {
        path: "/giochi/:codice",
        element: <GameDetail />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
])

export default router
