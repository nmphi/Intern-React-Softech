import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import styles from './DashboardLayout.module.css';
import MainContent from '../MainContent/MainContent';
import Footer from '../Footer/Footer';
import UserSummary from './UserSummary';

const DashboardLayout: React.FC = () => {
  return (
    <div className={styles.dashboard}>
      <Sidebar />
      
      <div className={styles.mainArea}>
        <div className={styles.panel}>
          <UserSummary />
          <MainContent />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default DashboardLayout;
