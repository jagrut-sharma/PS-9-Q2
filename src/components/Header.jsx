import { NavLink } from "react-router-dom";

export default function Header() {
  const activeLink = ({ isActive }) => {
    return isActive ? "activeLink navLinks" : "navLinks";
  };

  return (
    <div>
      <NavLink to="/" className={activeLink}>
        All books
      </NavLink>
      <NavLink to="/favourites" className={activeLink}>
        Favourites
      </NavLink>
      <NavLink to="/read" className={activeLink}>
        Read
      </NavLink>
      <NavLink to="/profile" className={activeLink}>
        Profile
      </NavLink>
    </div>
  );
}
