
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import "./Navbar.css"
export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
           
      </Link>
      <ul>
        <CustomLink to="/GamingPC"><b>GamingPC</b></CustomLink>
        <CustomLink to="/Laptops"><b>Laptops</b></CustomLink>
        <CustomLink to="/Accessories"><b>Accessories</b></CustomLink>
      </ul>
    </nav>
  )
}

// eslint-disable-next-line react/prop-types
function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
