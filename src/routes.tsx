import { createBrowserRouter } from "react-router"
import GameList from "./components/GameList"
import GameDetail from "./components/GameDetail"
import Layout from "./components/Layout"
import About from "./components/About"
import LayoutDeveloper from "./components/LayoutDeveloper"
import DeveloperList from "./components/DeveloperList"
import DeveloperDetail from "./components/DeveloperDetail"

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
        path: "giochi/:codice",
        element: <GameDetail />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: "/developers",
    element: <LayoutDeveloper />,
    children: [
      {
        index: true,
        element: <DeveloperList />,
      },
      {
        path: ":codice",
        element: <DeveloperDetail />,
      },
    ],
  },
])

export default router
