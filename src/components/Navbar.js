import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/qoute',
      text: 'Qoute',
    },
  ];
  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.headerTitle}>
          <h1>Math Magicians</h1>
        </div>
        <nav className={styles.navbar}>
          <ul>
            {
        links.map((link) => (
          <>
            <li key={link.id}>
              <NavLink className={styles.activeLink} to={link.path}>
                {link.text}
              </NavLink>
            </li>
            <div className={styles.line} />
          </>
        ))
        }
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
