import { NavLink, Link } from "react-router";
import '../css/Navbar.css'  // On importe le fichier CSS

 function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/">Accueil</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  )
}

export default Navbar