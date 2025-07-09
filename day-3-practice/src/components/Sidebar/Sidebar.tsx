import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';

const Sidebar: React.FC = () => {
  return (
    <aside className={styles.sidebar}>
      <nav>
        <ul className={styles.navList}>
          <li>
            <NavLink to="/dashboard" className={({ isActive }) => isActive ? styles.active : styles.link}>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" className={({ isActive }) => isActive ? styles.active : styles.link}>
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/features" className={({ isActive }) => isActive ? styles.active : styles.link}>
              Features
            </NavLink>
          </li>
          <li>
            <NavLink to="/article" className={({ isActive }) => isActive ? styles.active : styles.link}>
              Article
            </NavLink>
          </li>
          <li>
            <NavLink to="/loading" className={({ isActive }) => isActive ? styles.active : styles.link}>
              Loading
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
