import React from 'react';
import styles from './FeatureList.module.css';

const FeatureList: React.FC = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Key Features</h3>
      <ul className={styles.list}>
        <li>⚡ Fast Performance</li>
        <li>🎨 Clean Design</li>
        <li>👌 Easy to Use</li>
      </ul>
    </div>
  );
};

export default FeatureList;
