
import React from 'react';
import { Typography, Button } from 'antd';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

const { Title, Paragraph } = Typography;

const NotFound: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Title className={styles.title}>404 - Page Not Found</Title>
        <Paragraph className={styles.message}>
          Sorry, this page doesn't exist.
        </Paragraph>
        <Link to="/">
          <Button type="primary">Go Back Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
