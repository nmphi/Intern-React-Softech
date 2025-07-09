import React from 'react';
import styles from './Navbar.module.css';


const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={`${styles.navItem} ${styles.active}`}>Home</li>
        <li className={styles.navItem}>About</li>
        <li className={styles.navItem}>Contact</li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
