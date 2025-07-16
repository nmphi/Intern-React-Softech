// File: src/components/Navbar/Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';

import styles from './Navbar.module.css';
const items = [
  {
    label: <NavLink to="/" className={({ isActive }) => isActive ? styles.active : ''}>Home</NavLink>,
    key: 'home',
  },
  {
    label: <NavLink to="/about" className={({ isActive }) => isActive ? styles.active : ''}>About</NavLink>,
    key: 'about',
  },
  {
    label: <NavLink to="/projects" className={({ isActive }) => isActive ? styles.active : ''}>Projects</NavLink>,
    key: 'projects',
  },
  {
    label: <NavLink to="/contact" className={({ isActive }) => isActive ? styles.active : ''}>Contact</NavLink>,
    key: 'contact',
  },
];

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Menu mode="horizontal" className={styles.navList} items={items} />
    </div>
  );
};

export default Navbar;
