import React from 'react';
import styles from './StaticArticle.module.css';

const StaticArticle: React.FC = () => {
  return (
    <article className={styles.article}>
        <h2>Article</h2>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcHUM8CF8bGY-mlGKsK-csNaVTSLXA4Z5IFw&s"
        alt="Article visual"
        className={styles.image}
      />
      <h2 className={styles.title}>The Future of Web Development</h2>
      <p className={styles.body}>
        Web development is evolving rapidly with the rise of new frameworks,
        tools, and AI-powered assistance. Developers can now build responsive,
        scalable applications faster and more efficiently than ever before.
      </p>
    </article>
  );
};

export default StaticArticle;
