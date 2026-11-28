import { Outlet } from "react-router-dom"
import Nav from "../components/nav/Nav"

const home = () => {
  return (
    <div className="w-full h-screen">
      <Nav />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default home