import React from 'react';
import styles from './UserSummary.module.css';

const UserSummary: React.FC = () => {
  return (
    <div className={styles.summary}>
      <h3>👤 User Info</h3>
      <p>Name: Jane Doe</p>
      <p>Role: Admin</p>
      <p>Status: Active</p>
    </div>
  );
};

export default UserSummary;
