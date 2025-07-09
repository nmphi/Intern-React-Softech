import React from 'react';
import styles from './StaticCard.module.css';

const StaticCard: React.FC = () => {
  return (
    <div className={styles.card}>
      <img
        src="https://placehold.co/300x180"
        alt="Card"
        className={styles.image}
      />
      <h3 className={styles.title}>Card Title</h3>
      <p className={styles.text}> description inside the card.</p>
    </div>
  );
};

export default StaticCard;
