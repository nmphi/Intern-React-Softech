import React from 'react';
import styles from './Gallery.module.css';
import Title from './Title';
import ImageItem from './ImageItem';

const Gallery: React.FC = () => {
  return (
    <section className={styles.gallery}>
      <Title />
      <div className={styles.grid}>
        <ImageItem />
        <ImageItem />
        <ImageItem />
        <ImageItem />
      </div>
    </section>
  );
};

export default Gallery;
