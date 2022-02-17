import React from 'react';
import { NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import styles from './Navbar.module.css';

function Navbar() {
  const links = [
    {
      id: uuidv4(),
      path: '/',
      text: 'Home',
    },
    {
      id: uuidv4(),
      path: '/calculator',
      text: 'Calculator',
    },
    {
      id: uuidv4(),
      path: '/qoute',
      text: 'Qoute',
    },
  ];
  return (
    <>
      <div data-testid="navbar" className={styles.headerContainer}>
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
