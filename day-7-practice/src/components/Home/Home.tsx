// File: src/components/Home/Home.tsx
import React, { useState } from 'react';
import { Button, Card, Typography } from 'antd';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const { Title, Paragraph } = Typography;

const Home: React.FC = () => {
  const [clickCount, setClickCount] = useState<number>(0);

  const handleClick = () => {
    setClickCount((prev) => prev + 1);
  };

  return (
    <div className={styles.container}>
      <Card className={styles.hero} bordered>
        <img src="https://via.placeholder.com/150" alt="Profile" className={styles.image} />
        <Title level={2}>Welcome to My Portfolio</Title>
        <Paragraph>
          I’m a passionate developer focused on building elegant, efficient, and effective web applications.
          I love working with JavaScript and modern frameworks like React.
        </Paragraph>
        <Link to="/about">
          <Button type="primary" onClick={handleClick}>Learn More About Me</Button>
        </Link>
        <Paragraph className={styles.counter}>Clicked: {clickCount} times</Paragraph>
      </Card>
    </div>
  );
};

export default Home;
