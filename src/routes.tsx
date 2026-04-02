import { createBrowserRouter } from "react-router"
import GameList from "./components/GameList"
import GameDetail from "./components/GameDetail"

const router = createBrowserRouter([
  {
    path: "/",
    element: <GameList />,
  },
  {
    path: "/game",
    element: <GameDetail />,
  },
])

export default router
