import React from 'react';
import styles from './ProfileCard.module.css';

const ProfileCard: React.FC = () => {
  return (
    <div className={styles.card}>
        <h2>Profile</h2>
      <img
        src="https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/11/tai-hinh-nen-dep-mien-phi.jpg"
        alt="User Avatar"
        className={styles.avatar}
      />
      <h3 className={styles.name}>Naruto</h3>
      <p className={styles.title}>Donation for orphan</p>
      <button className={styles.followBtn}>Follow</button>
    </div>
  );
};

export default ProfileCard;
