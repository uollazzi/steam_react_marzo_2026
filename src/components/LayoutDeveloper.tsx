import { Outlet } from "react-router"
import NavBar from "./NavBar"

const LayoutDeveloper = () => {
  return (
    <div className="bg-pink-300">
      <NavBar />
      <div className="container mx-auto py-4">
        <Outlet />
      </div>
    </div>
  )
}

export default LayoutDeveloper
