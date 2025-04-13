import { NavLink } from "react-router";
import css from "../AppHeader/AppHeader.module.css";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const getLinkStyles = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={css.nav}>
      <div className={css.list}>
        <NavLink to="/" className={getLinkStyles}>
          Home
        </NavLink>

        {isLoggedIn && (
          <NavLink to="/contacts" className={getLinkStyles}>
            Contacts
          </NavLink>
        )}
      </div>
    </nav>
  );
}
