import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import routes from '../../routes';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.containerNavigation}>
        <NavLink exact to={routes.home} activeClassName={styles.active}>
          Home
        </NavLink>
        <NavLink to={routes.movies} activeClassName={styles.active}>
          Movies
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
