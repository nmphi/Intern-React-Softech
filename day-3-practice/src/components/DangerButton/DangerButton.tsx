import React from 'react';
import styles from './DangerButton.module.css';

const DangerButton: React.FC = () => {
  return <button className={styles.button}>Danger</button>;
};

export default DangerButton;
