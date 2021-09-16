import { NavLink } from "react-router-dom"

export default function Sidebar() {
  const links = [
    {
      label: "Time tracker",
      path: "/"
    },
    {
      label: "Clients",
      path: "/clients"
    },
    {
      label: "Projects",
      path: "/projects"
    }
  ]
  return <div className="w-1/4 p-5">
    <div>
      {links.map(link => (
        <NavLink key={link.path} to={link.path}
          className="block cursor-pointer mb-5 bg-gray-100 rounded leading-7 px-2">{link.label}</NavLink>
      ))}
    </div>
  </div>
}