import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import img from '../../utils/404.png';
import styles from './Error.module.css';

const Error = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgWrapper}>
        <img src={img} alt="errorIMG"></img>
      </div>
      <h1 className={styles.errorTitle}>Sorry, this page was not found:(</h1>
      <NavLink className={styles.errorLink} to={routes.home}>
        Back to the homepage
      </NavLink>
    </div>
  );
};

export default Error;
