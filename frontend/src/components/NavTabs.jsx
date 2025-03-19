import { NavLink } from "react-router-dom";
import "./NavTabs.css"; // For styling

function NavTabs() {
  return (
    <nav className="nav-tabs">
      <NavLink to="/sandwiches" activeClassName="active">Sandwiches</NavLink>
      <NavLink to="/drinks" activeClassName="active">Drinks</NavLink>
      <NavLink to="/snacks" activeClassName="active">Snacks</NavLink>
    </nav>
  );
}

export default NavTabs;
