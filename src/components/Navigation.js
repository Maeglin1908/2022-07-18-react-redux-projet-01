import { NavLink } from "react-router-dom";
import "../styles/navigation.css";

const Navigation = () => (
  <nav className="main-nav">
    <NavLink to="/">Accueil</NavLink>
    <NavLink to="/login">Login</NavLink>
  </nav>
);

export default Navigation;
