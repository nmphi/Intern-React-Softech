import React from 'react';
import styles from './MainContent.module.css';

const MainContent: React.FC = () => {
  return (
    <main className={styles.main}>
      <h2>Main Content Area</h2>
      <p>This is where your content goes.</p>
    </main>
  );
};

export default MainContent;
