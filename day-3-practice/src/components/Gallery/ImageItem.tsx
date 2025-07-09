import React from 'react';
import styles from './ImageItem.module.css';

const ImageItem: React.FC = () => {
  return (
    <div className={styles.imageWrapper}>
      <img
        src="https://placehold.co/200x140"
        alt="Gallery Item"
        className={styles.image}
      />
    </div>
  );
};

export default ImageItem;
