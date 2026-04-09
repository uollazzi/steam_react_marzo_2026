import { Outlet } from "react-router"
import NavBar from "./NavBar"

const Layout = () => {
  return (
    <>
      <NavBar />
      <div className="container mx-auto py-4">
        <Outlet />
      </div>
    </>
  )
}

export default Layout
