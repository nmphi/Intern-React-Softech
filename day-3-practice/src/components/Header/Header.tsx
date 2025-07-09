import React from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <img
        src="https://placehold.co/40x40"
        alt="Logo"
        className={styles.logo}
      />
      <h1 className={styles.title}>My React App</h1>
    </header>
  );
};

export default Header;
