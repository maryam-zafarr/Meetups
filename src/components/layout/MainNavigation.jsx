import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";

const MainNavigation = () => {
  const favoritesCtx = useContext(FavoritesContext);
  const favoritesCount = favoritesCtx.totalFavorites;

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <NavLink to="/meetups">All Meetups</NavLink>
          </li>
          <li>
            <NavLink to="/new-meetup">New Meetup</NavLink>
          </li>
          <li>
            <NavLink to="/favorites">My Favorites</NavLink>
            <span className={classes.badge}>{favoritesCount}</span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
